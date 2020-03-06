import { ApolloClient } from "apollo-client";
import Head from "next/head";
import { ApolloProvider } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";
import { InMemoryCache } from "apollo-cache-inmemory";

let globalApolloClient = null;

function createIsomorphLink() {
    if (typeof window === "undefined") {
        const { SchemaLink } = require("apollo-link-schema");
        const { schema } = require("./schema");
        return new SchemaLink({ schema });
    } else {
        const { HttpLink } = require("apollo-link-http");
        return new HttpLink({
            uri: "/api/graphql",
            credentials: "same-origin",
            fetch
        });
    }
}

function createApolloClient(initialState = {}) {
    const ssrMode = typeof window === "undefined";
    const cache = new InMemoryCache().restore(initialState);

    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    return new ApolloClient({
        ssrMode,
        link: createIsomorphLink(),
        cache
    });
}

const initApolloClient = (initialState = {}) => {
    if (typeof window === 'undefined') {
        return createApolloClient(initialState)
    }

    if(!globalApolloClient) {
        globalApolloClient = createApolloClient(initialState)
    }

    return globalApolloClient;
};



export function withApollo(PageComponent, { ssr = true } = {}) {
    const WithApollo = ({ apolloClient, apolloState, ...pageProps }) => {
        const client = apolloClient || initApolloClient(apolloState);
        return (
            <ApolloProvider client={client}>
                <PageComponent {...pageProps} />
            </ApolloProvider>
        );
    };

    // Set the correct displayName in development
    if (process.env.NODE_ENV !== "production") {
        const displayName = PageComponent.displayName || PageComponent.name || "Component";

        if (displayName === "App") {
            console.warn("This withApollo HOC only works with PageComponents.");
        }

        WithApollo.displayName = `withApollo(${displayName})`;
    }

    if (ssr || PageComponent.getInitialProps) {
        WithApollo.getInitialProps = async ctx => {
            const { AppTree } = ctx;

            // Initialize ApolloClient, add it to the ctx object so
            // we can use it in `PageComponent.getInitialProp`.
            const apolloClient = (ctx.apolloClient = initApolloClient());

            // Run wrapped getInitialProps methods
            let pageProps = {};
            if (PageComponent.getInitialProps) {
                pageProps = await PageComponent.getInitialProps(ctx);
            }

            // Only on the server:
            if (typeof window === "undefined") {
                // When redirecting, the response is finished.
                // No point in continuing to render
                if (ctx.res && ctx.res.finished) {
                    return pageProps;
                }

                // Only if ssr is enabled
                if (ssr) {
                    try {
                        // Run all GraphQL queries
                        const { getDataFromTree } = await import("@apollo/react-ssr");
                        await getDataFromTree(
                            <AppTree
                                pageProps={{
                                    ...pageProps,
                                    apolloClient
                                }}
                            />
                        );
                    } catch (error) {
                        // Prevent Apollo Client GraphQL errors from crashing SSR.
                        // Handle them in components via the data.error prop:
                        // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
                        console.error("Error while running `getDataFromTree`", error);
                    }

                    // getDataFromTree does not call componentWillUnmount
                    // head side effect therefore need to be cleared manually
                    Head.rewind();
                }
            }

            // Extract query data from the Apollo store
            const apolloState = apolloClient.cache.extract();

            return {
                ...pageProps,
                apolloState
            };
        };
    }
    return WithApollo;
}

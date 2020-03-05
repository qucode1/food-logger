import { ApolloServer, gql } from 'apollo-server-micro';
import { mergeResolvers, mergeTypeDefs } from "graphql-toolkit";
import connectDB from '../../lib/mongoose';
import { brandResolvers } from "../../src/api/brand/resolvers";
import { brandMutations } from "../../src/api/brand/mutations";
import Brand from '../../src/api/brand/Brand.graphql';

const fakeTypeDefs = gql`
    type Query {
        sayHello: String
    }
`

const fakeResolvers = {
    Query: {
        sayHello: () => 'Hello :)'
    }
};

const resolvers = mergeResolvers([
    fakeResolvers,
    brandResolvers,
    brandMutations
]);

const typeDefs = mergeTypeDefs([
    fakeTypeDefs,
    Brand
]);

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
    api: {
        bodyParser: false
    }
};



const server = apolloServer.createHandler({ path: '/api/graphql'});

export default connectDB(server);
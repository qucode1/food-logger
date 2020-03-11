import { gql } from 'apollo-server-micro';
import { mergeSchemas } from "graphql-toolkit";
import { brandMutations } from "../src/api/brand/mutations";
import { brandResolvers } from "../src/api/brand/resolvers";
import Brand from "../src/api/brand/Brand.graphql";

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

// const myMergeSchemas = () => {
//     const schema = mergeSchemas({
//         schemas: [],
//         resolvers: [brandResolvers, brandMutations, fakeResolvers],
//         typeDefs: [Brand, fakeTypeDefs]
//     })
//     console.log('schema', schema);
//     return schema
// }

export const schema = mergeSchemas({
    schemas: [],
    resolvers: [brandResolvers, brandMutations, fakeResolvers],
    typeDefs: [Brand, fakeTypeDefs]
})
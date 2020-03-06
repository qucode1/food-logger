import { ApolloServer } from 'apollo-server-micro';
import connectDB from '../../lib/mongoose';
import { schema } from "../../lib/schema";

const apolloServer = new ApolloServer({ schema })

export const config = {
    api: {
        bodyParser: false
    }
};

const server = apolloServer.createHandler({ path: '/api/graphql'});

export default connectDB(server);
import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

import Brand from './brand'

export const brandResolvers = {
    Query: {
        async brand(_, { brand }) {
            try {
                    const foundBrand = await Brand.findOne({
                        id: brand._id
                    });
                    return foundBrand;
            } catch (e) {
                console.log(e);
            }
        },
        async brands() {
            try {
                    const brands = await Brand.find();
                    return brands;
            } catch (e) {
                console.log(e);
            }
        }
    },

    // Date: new GraphQLScalarType({
    //     name: 'Date',
    //     description: 'Date custom scalar',
    //     parseValue(value) {
    //       return new Date(value); // value from the client
    //     },
    //     serialize(value) {
    //       return value.getTime(); //value sent to the client
    //     },
    //     parseLiteral(ast) {
    //       if (ast.kind === Kind.INT) {
    //         return new Date(ast.value);
    //       }
    //       return null;
    //     }
    // })
}
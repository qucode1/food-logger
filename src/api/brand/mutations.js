import Brand from './brand'

export const brandMutations = {
    Mutation: {
        async addBrand(_, { brand }) {
            try {
                const newBrand = await Brand.create({
                    ...brand
                });
                return newBrand;
            } catch (e) {
                console.log(e);
            }
        }
    }
}
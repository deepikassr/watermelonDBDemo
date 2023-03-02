// --------------- LIBRARIES ---------------
import faker from 'faker';

export default {
    getRandomPosts: () => {
        return Array(1)
            .fill('')
            .map(() => {
                return {
                    title: faker.commerce.productName(),
                    body: faker.commerce.productDescription(),
                };
            });
    },
};

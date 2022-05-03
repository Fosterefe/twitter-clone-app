const {hello,
createUser,
createPost,
getAllUsers,
getAllPosts
} = require('../controllers/resolversFuncs');

const resolvers = {
    Query: {
        hello,
        getAllUsers,
        getAllPosts
    },
    Mutation: {
        createUser,
        createPost
    }
}

module.exports = { resolvers };
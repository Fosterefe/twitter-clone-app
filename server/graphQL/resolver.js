const {hello,
createUser,
createPost,
getAllUsers,
getAllPosts,
newFollower,
newFollow
} = require('../controllers/resolversFuncs');

const resolvers = {
    Query: {
        hello,
        getAllUsers,
        getAllPosts
    },
    Mutation: {
        createUser,
        createPost,
        newFollower,
        newFollow
    },
}

module.exports = { resolvers };
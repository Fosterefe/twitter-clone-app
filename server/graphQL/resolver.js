const {hello,
createUser,
createPost,
getAllUsers,
getAllPosts,
newFollower,
newFollow,
addLike
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
        newFollow,
        addLike
    },
}

module.exports = { resolvers };
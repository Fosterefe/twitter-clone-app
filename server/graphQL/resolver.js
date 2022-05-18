const {hello,
createUser,
createPost,
getAllUsers,
getAllPosts,
newFollower,
newFollow,
addLike,
loginUser,
verifyToken,
getUserById
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
        addLike,
        loginUser,
        verifyToken,
        getUserById
    },
}

module.exports = { resolvers };
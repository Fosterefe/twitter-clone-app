const { gql } = require('apollo-server-express');


const typeDefinitions = gql`
    type User {
        username: String
        gmail: String
        password: String
    }

    type Post {
        content: String
        createdAt: String
    }

    type Query {
        hello: String
        getAllUsers: [User]
        getAllPosts: [Post]
    }

    input UserInput {
        username: String
        gmail: String
        password: String
    }

    input PostInput {
        content: String
        createdAt: String
    }

    type Mutation {
        createUser(user: UserInput!): User
        createPost(post: PostInput!): Post
    }
`

module.exports = { typeDefinitions };
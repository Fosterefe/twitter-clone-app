const { gql } = require('apollo-server-express');


const typeDefinitions = gql`
    type Post {
        id: ID
        content: String
        owner_id: String
        createdAt: String
    }

    type Follower {
        id: ID
        username: String
        gmail: String
        password: String
        posts: [Post]
        followers: [User]
        follows: [User]
    }

    type Follow {
        id: ID
        username: String
        gmail: String
        password: String
        posts: [Post]
        followers: [User]
        follows: [User]
    }

    type User {
        id: ID
        username: String
        gmail: String
        password: String
        posts: [Post]
        followers: [Follower]
        follows: [Follow]
    }

    type  helloShcema{
        number: Int
    }

    type Query {
        hello: [helloShcema]
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
        owner_id: String
        createdAt: String
    }

    input FollowerInput {
        id: ID
        userId: ID
    }

    input NewFollow {
        myId: ID
        userId: ID
    }

    type Mutation {
        createUser(user: UserInput!): User
        createPost(post: PostInput!): Post
        newFollower(follower: FollowerInput!): User
        newFollow(follow: NewFollow!): User
    }
`

module.exports = { typeDefinitions };
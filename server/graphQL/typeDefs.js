const { gql } = require('apollo-server-express');


const typeDefinitions = gql`
    type peopleLikes  {
        id: ID
        username: String
        gmail: String
        password: String
        posts: [Post]
        followers: [Follower]
        follows: [Follow]
    }

    type Likes {
        amount: Int
        users: [peopleLikes]
    }
 
    type Post {
        id: ID
        content: String
        createdAt: String
        owner_id: String
        likes: Likes
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

    input LikeInput {
        add: Boolean
        userId: ID
        postId: ID
    }

    type Mutation {
        createUser(user: UserInput!): User
        createPost(post: PostInput!): Post
        newFollower(follower: FollowerInput!): User
        newFollow(follow: NewFollow!): User
        addLike(payload: LikeInput): Post
    }
`

module.exports = { typeDefinitions };
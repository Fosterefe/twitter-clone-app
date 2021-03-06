import { gql } from '@apollo/client';

export const CREATE_USER = gql `
mutation createUser($username: String, $gmail: String, $password: String){
  createUser(user: {
    username: $username,
    gmail: $gmail,
    password: $password
  }) {
    id
    username
    password
    gmail
  }
}
`

export const LOGIN_USER = gql`
mutation loginUser($username: String, $gmail: String, $password: String){
  loginUser(user: {
    username: $username,
    gmail: $gmail,
    password: $password
  }) {
    jwt   
    user {
      id
      username
      gmail
      posts {
        content
        createdAt
        likes {
          amount
          users {
            username
          }
        }
      }
      followers {
        id
        username
      }
      follows {
        id
        username
      }

    }
  }
}
`

export const VERIFY_TOKEN = gql`
mutation verifyToken($token: String!){
  verifyToken(token: $token) 
  {
    isExpired
    user {
      username
      gmail
      hashedPass
    }
  }
}
`

export const CREATE_POST = gql`
mutation createPost($content: String, $owner_id: String){
  createPost(post: {
    content: $content,
    owner_id: $owner_id
  }) {
    owner_id
    content
    createdAt
  }
}
`

export const ADD_LIKE = gql`
mutation giveLike($add: Boolean, $userId: ID, $postId: ID) {
  addLike(payload: {
    add: $add,
    userId: $userId,
    postId: $postId
  }) {
    content
    likes {
      amount
    }
  }
}
`

export const GET_USER_PROFILE = gql`
mutation getUserById($getUserByIdId: String!) {
  getUserById(id: $getUserByIdId) {
    id
    username
    gmail
    posts {
      id
      content
      createdAt
      likes {
        amount
      }
      owner_name
    }
    followers {
      id
      username
    }
    follows {
      id
      username
    }
  }
}
`

export const NEW_FOLLOW = gql`
mutation($myId: ID, $userId: ID) {
  newFollow(follow: {
    myId: $myId,
    userId: $userId
  }) {
    username
    id
    follows {
        username
      }
      followers {
        username
    }
  }
}
`
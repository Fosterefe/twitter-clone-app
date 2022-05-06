import { gql } from '@apollo/client';

export const ALL_USERS = gql`
query {
  getAllUsers {
    id
    username
  }
}
`

export const ALL_POSTS = gql`
query {
  getAllPosts {
    id
    content
    createdAt
    owner_id
    likes {
      amount
      users {
        username
      }
    }
  }
}
`
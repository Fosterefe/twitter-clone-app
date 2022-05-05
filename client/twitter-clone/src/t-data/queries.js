import { gql } from '@apollo/client';

export const ALL_USERS = gql`
query {
  getAllUsers {
    id
    username
  }
}
`
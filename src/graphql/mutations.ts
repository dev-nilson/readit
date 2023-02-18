import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation MyMutation(
    $username: String!
    $text: String!
    $subpost_id: ID!
  ) {
    insertPost(
      subpost_id: $subpost_id
      username: $username
      text: $text
    ) {
      subpost_id
      username
      text
    }
  }
`

export const ADD_SUBPOST = gql`
  mutation MyMutation(
    $topic: String!
  ) {
    insertSubpost(
      topic: $topic
    ) {
      id
      topic
      created_at
    }
  }
`
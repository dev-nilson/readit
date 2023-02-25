import { gql } from "@apollo/client";

export const ADD_POST = gql`
  mutation MyMutation($username: String!, $text: String!, $subpost_id: ID!) {
    insertPost(subpost_id: $subpost_id, username: $username, text: $text) {
      subpost_id
      username
      text
    }
  }
`;

export const ADD_SUBPOST = gql`
  mutation MyMutation($topic: String!) {
    insertSubpost(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $text: String!) {
    insertComments(post_id: $post_id, username: $username, text: $text) {
      id
      post_id
      username
      text
      created_at
    }
  }
`;

export const ADD_VOTE = gql`
  mutation MyMutation($post_id: ID!, $username: String!, $upvote: Boolean!) {
    insertVotes(post_id: $post_id, username: $username, upvote: $upvote) {
      id
      post_id
      username
      created_at
    }
  }
`;

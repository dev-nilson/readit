import { gql } from "@apollo/client";

export const GET_SUBPOST_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubpostsByTopic(topic: $topic) {
      id
      topic
      created_at
    }
  }
`;

export const GET_POSTS = gql`
  query MyQuery {
    postsList {
      id
      text
      username
      subpost_id
      created_at
      comments {
        created_at
        id
        post_id
        text
        username
      }
      subposts {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    postsListByTopic(topic: $topic) {
      id
      text
      username
      subpost_id
      created_at
      comments {
        created_at
        id
        post_id
        text
        username
      }
      subposts {
        created_at
        id
        topic
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

import { useQuery } from "@apollo/client";
import { GET_POSTS, GET_POSTS_BY_TOPIC } from "@/graphql/queries";
import Post from "../Post/Post";

type FeedProps = {
  topic?: string;
};

function Feed({ topic }: FeedProps) {
  const { data, error } = !topic
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuery(GET_POSTS)
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuery(GET_POSTS_BY_TOPIC, {
        variables: { topic },
      });

  const posts: Post[] = !topic ? data?.postsList : data?.postsListByTopic;
  console.log(data);

  return (
    <div className="w-full mt-5 space-y-5">
      {posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default Feed;

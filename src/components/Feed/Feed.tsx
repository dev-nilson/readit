import { useQuery } from "@apollo/client";
import { GET_POSTS, GET_POSTS_BY_TOPIC } from "@/graphql/queries";
import { Orbit } from "@uiball/loaders";
import Post from "../Post/Post";

type FeedProps = {
  topic?: string;
};

function Feed({ topic }: FeedProps) {
  const { data } = !topic
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuery(GET_POSTS)
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuery(GET_POSTS_BY_TOPIC, {
        variables: { topic },
      });

  const posts: Post[] = !topic ? data?.postsList : data?.postsListByTopic;

  return (
    <div className="w-full mt-5 space-y-5">
      {posts ? (
        posts?.map((post) => <Post key={post.id} post={post} />)
      ) : (
        <div className="flex w-full items-center justify-center p-10 text-xl">
          <Orbit size={40} color="#ff4301" />
        </div>
      )}
    </div>
  );
}

export default Feed;

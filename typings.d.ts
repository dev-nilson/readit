type Comments = {
  created_at: string;
  id: number;
  post_id: number;
  text: string;
  username: string;
};

type Vote = {
  created_at: string;
  id: number;
  post_id: number;
  upvote: boolean;
  username: string;
};

type Subpost = {
  created_at: string;
  id: number;
  topic: string;
};

type Post = {
  created_at: string;
  id: number;
  title: string;
  text: string;
  username: string;
  subpost_id: number;
  votes: Vote[];
  comments: Comments[];
  subposts: Subpost[];
};

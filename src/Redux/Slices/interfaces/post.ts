export type postId = {
  id: number;
};

export type PostInput = FormData;

export type PostInputWithId = PostInput & postId;

export type PostOutput = {
  status: number;
  result: string;
};

export type post = {
  id: number;
  title: string;
  description: string;
  post_image: string;
  category: {
    cat_id: number;
    cat_name: string;
  };
  user: {
    username: string;
    email: string;
    image: string;
  };
  published_at: string,
};

export type postState = {
  loading: boolean;
  error: boolean;
  data: PostOutput | post;
};


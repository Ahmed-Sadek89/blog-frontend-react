export type postPayload = {
  title: string;
  description: string;
  post_image: File | null;
  category_id: number | undefined;
};

export type postInfo = {
  id: number;
  title: string;
  description: string;
  post_image: string;
  published_at: string;
  category: {
    cat_id: number;
    cat_name: string;
  };
  user: {
    username: string;
    email: string;
    image: string;
  };
};

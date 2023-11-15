import { postInfo } from "../../Types/posts";

export type props = {
    postState: {
      loading: boolean;
      error: boolean;
      data: {
        status: number;
        result: postInfo| {};
      };
    };
    postId: number;
  };
import { postType } from "../../Types/types";

export type props = {
    postState: {
      loading: boolean;
      error: boolean;
      data: {
        status: number;
        result: postType | undefined;
      };
    };
    postId: string | undefined;
  };
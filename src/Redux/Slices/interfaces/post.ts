import { postInfo } from "../../../Types/posts";

// general
export type postId = {
  id: number;
};
export type postByCatId = {
  cat_id: number;
};

export type PostInput = FormData;

export type PostInputWithId = {
  id: number;
  formData: FormData;
};

// output
export type PostOutput = {
  status: number;
  result: string;
};
export type PostGetAllOutput = {
  status: number;
  result: postInfo[];
};
export type PostByParamOutput = {
  status: number;
  result: postInfo| {};
};


// states
export type postState = {
  loading: boolean;
  error: boolean;
  data: PostOutput;
};

export type postGetAllState = {
  loading: boolean;
  error: boolean;
  data: PostGetAllOutput;
};
export type postGetByParamState = {
  loading: boolean;
  error: boolean;
  data: PostByParamOutput;
};

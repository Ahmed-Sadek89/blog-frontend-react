// POST PUT DELETE
export type addPostInput = FormData

export type editPostInput = addPostInput;

export type addPostOutput = {
  status: number,
  result: string,
}

export type editPostOutput = addPostOutput;

export type deletePostOutput = addPostOutput;

export type addPostState = {
  loading: boolean;
  error: boolean;
  data: addPostOutput;
};

export type editPostState = addPostState

export type deletePostState = addPostState


// GET
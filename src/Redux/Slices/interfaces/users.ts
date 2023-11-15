export type userById = {
  id: number;
};

export type userRegister = FormData;

export type userLogin = {
  email: string,
  password: string
}

export type userOutput = {
  status: number;
  result: string;
  token?: string
};

export type userState = {
    loading: boolean,
    error: boolean,
    data: userOutput
}

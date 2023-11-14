import React from "react";
import { useLocation } from "react-router-dom";
import { post } from "./postType";
import getUserId from "./getUserId";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Redux/store";
import { getFormData } from "./formData";
import insertNewPost from "./insertNewPost";
import updateThePost from "./updateThePost";

const handlePostAction = (post: post) => {
  const dispatch = useDispatch<AppDispatch>();
  const { state } = useLocation();
  const user_id = getUserId();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = getFormData(post, user_id)
    if (state === null) {
      insertNewPost(formData, dispatch)
    } else {
      console.log({ ...post, user_id });
      updateThePost(formData, dispatch)
    }
  };
  return handleSubmit;
};

export default handlePostAction;

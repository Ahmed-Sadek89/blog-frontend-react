import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { post } from "./postType";
import getUserId from "./getUserId";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, rootState } from "../../Redux/store";
import { addPost } from "../../Redux/Slices/async_slices/posts/addPost.slice";
import Swal from "sweetalert2";

const handlePostAction = (post: post) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { state } = useLocation();
  const user_id = getUserId();
  // const addPoststate = useSelector<rootState>(state => state.addNewPostState);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (state === null) {
      const formData = new FormData();
      formData.append("title", post.title);
      formData.append("description", post.description);
      formData.append("post_image", post.post_image as File);
      formData.append("category_id", post.category_id.toString());
      formData.append("user_id", user_id.toString());

      await dispatch(addPost(formData))
        .then(({payload}) => {
           let res = payload as {
             status: number;
           };
           if (res.status === 200) {
             Swal.fire("success!", "Your new post has been added successfully", "success")
             .then(() => {
                window.location.href = "/";
              })
           }
        })
        .catch((error) => {
          console.log({ error });
        });
    } else {
      console.log({ ...post, user_id });
    }
  };
  return handleSubmit;
};

export default handlePostAction;

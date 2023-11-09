import { useEffect } from "react";
import { post_getById } from "../../Redux/Slices/async_slices/post_getById.slice";
import { AppDispatch } from "../../Redux/store";
import { posts_getByCategory } from "../../Redux/Slices/async_slices/posts_getByCategory.slice";
import { useNavigate, useParams } from "react-router-dom";
import { postType } from "../../Types/types";
import { useDispatch } from "react-redux";

const fetchPosts = () => {
  const { post_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(post_getById(parseInt(post_id || ""))).then(({ payload }) => {
      let res = payload as {
        status: number;
        result: postType;
      };
      if (res.status === 200) {
        dispatch(posts_getByCategory(res?.result?.category?.cat_id));
      } else {
        navigate("/");
      }
    });
  }, [dispatch, post_id, navigate]);
};

export default fetchPosts;

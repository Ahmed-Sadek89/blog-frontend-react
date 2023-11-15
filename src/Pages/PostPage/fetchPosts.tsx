import { useEffect } from "react";
import { post_getById } from "../../Redux/Slices/async_slices/posts/post_getById.slice";
import { AppDispatch } from "../../Redux/store";
import { posts_getByCategory } from "../../Redux/Slices/async_slices/posts/posts_getByCategory.slice";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postInfo } from "../../Types/posts";

const fetchPosts = () => {
  const { post_id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(post_getById({id: parseInt(post_id || "")})).then(({ payload }) => {
      let res = payload as {
        status: number;
        result: postInfo;
      };
      if (res.status === 200) {
        dispatch(posts_getByCategory({cat_id: res?.result?.category?.cat_id}));
      } else {
        navigate("/");
      }
    });
  }, [dispatch, post_id, navigate]);
};

export default fetchPosts;

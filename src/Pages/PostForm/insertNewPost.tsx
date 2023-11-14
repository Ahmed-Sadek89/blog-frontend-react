import { useDispatch } from "react-redux";
import { addPost } from "../../Redux/Slices/async_slices/posts/addPost.slice";
import Swal from "sweetalert2";
import { AppDispatch } from "../../Redux/store";

const insertNewPost = (formData: FormData, dispatch: AppDispatch) => {
  const insertPost = async () => {
    await dispatch(addPost(formData))
      .then(({ payload }) => {
        let res = payload as {
          status: number;
        };
        if (res.status === 200) {
          Swal.fire(
            "success!",
            "Your new post has been added successfully",
            "success"
          ).then(() => {
            window.location.href = "/";
          });
        }
      })
      .catch((error) => {
        console.log({ error });
      });
  };
  return insertPost();
};

export default insertNewPost;

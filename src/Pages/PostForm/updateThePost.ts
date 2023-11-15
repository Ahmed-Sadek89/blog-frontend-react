import { AppDispatch } from '../../Redux/store';
import { updatePost } from '../../Redux/Slices/async_slices/posts/updatePost.slice';
import Swal from 'sweetalert2';


const updateThePost = (id: number, formData: FormData, dispatch: AppDispatch) => {
  const updateThisPost = async () => {
    await dispatch(updatePost({ id, formData }))
      .then(({ payload }) => {
        let res = payload as {
          status: number;
        };
        if (res.status === 200) {
          Swal.fire(
            "success!",
            "Your post has been updated successfully",
            "success"
          ).then(() => {
            window.location.href = "/";
          });
        }
      })
      .catch((error) => {
        throw new Error(error)
      });
  };
  return updateThisPost()
}

export default updateThePost
import React from 'react'
import { AppDispatch } from '../../Redux/store';
import Swal from 'sweetalert2';

const updateThePost = (formData: FormData, dispatch: AppDispatch) => {
    const updatePost = async () => {
        // await dispatch(addPost(formData))
        //   .then(({ payload }) => {
        //     let res = payload as {
        //       status: number;
        //     };
        //     if (res.status === 200) {
        //       Swal.fire(
        //         "success!",
        //         "Your new post has been added successfully",
        //         "success"
        //       ).then(() => {
        //         window.location.href = "/";
        //       });
        //     }
        //   })
        //   .catch((error) => {
        //     console.log({ error });
        //   });
        console.log(formData);
      };
      return updatePost();
}

export default updateThePost
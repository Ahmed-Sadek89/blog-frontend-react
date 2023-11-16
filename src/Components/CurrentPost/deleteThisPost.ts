import React from 'react'
import Swal from 'sweetalert2';
import { AppDispatch } from '../../Redux/store';
import { delete_post_by_id } from '../../Redux/Slices/async_slices/posts/delete_post_by_id.slice';

const deleteThisPost = (postId: number, dispatch: AppDispatch) => {
    const deletePost = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
            await dispatch(delete_post_by_id({ id: postId }))
              .then(({ payload }) => {
                const res = payload as {
                  status: number;
                };
                if (res.status === 200) {
                  Swal.fire("Deleted!", "Your file has been deleted.", "success")
                    .then(() => window.location.href = "/")
                }
              }
              )
          }
        });
      };
      return deletePost()
}

export default deleteThisPost
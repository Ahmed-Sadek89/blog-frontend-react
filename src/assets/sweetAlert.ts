import Cookies from "js-cookie"
import Swal from "sweetalert2"


export const checkLogout = () => {
    Swal.fire({
        title: 'Are you sure to logout?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
      }).then((result) => {
        if (result.isConfirmed) {
          Cookies.remove('authorization');
          window.location.href = '/';
        }
      })
}
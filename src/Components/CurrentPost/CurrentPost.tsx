import { postType } from '../../Types/types'
import edit from '../../Images/edit.png'
import Delete from '../../Images/delete.png'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { getDateChanged } from './getDateChanged'
import jwtDecode from 'jwt-decode'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../Redux/store'
import { delete_post_by_id } from '../../Redux/Slices/async_slices/delete_post_by_id.slice'

type props = {
  postState: {
    loading: boolean;
    error: boolean;
    data: {
      status: number,
      result: postType | undefined
    }
  },
  postId: string | undefined
}

const CurrentPost = ({ postState, postId }: props) => {
  const dispatch = useDispatch<AppDispatch>()
  const token = Cookies.get('authorization') || '';
  const isAuth = token ? true : false;
  const { result } = postState.data
  // check if user make update -> change date
  const dateChanged = getDateChanged(result?.last_modified_at);
  let decoded = {
    email: ''
  }
  try {
    decoded = jwtDecode(token);
  } catch (error) {
    // console.log('JWT decoding error:', error);
    decoded.email = ''
  }
  const isUserOwnPost = decoded.email === result?.user.email;

  const deletePost = (postId: string| undefined) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(delete_post_by_id(parseInt(postId || '')))
        .then(({payload}) => {
          const res = payload as {
            status: number
          }
          if ( res.status === 200 ) {
            window.location.href = '/';
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })
      }
    })
   
  }
  return (
    <>
      <img src={result?.post_image} alt={result?.title} />
      <div className='post-single-current-owner'>
        <img src={result?.user.image} alt={result?.user.username} />
        <div className='post-single-current-owner-texts'>
          <span>{result?.user.username}</span>
          <span>{dateChanged}</span>
        </div>
        {/* put update delete option if user is auth && this is user's post */}
        {
          (isAuth === true && isUserOwnPost) &&
          <div className="post-single-current-owner-options">
            <Link to={`/write?edit=${postId}`} state={result}>
              <img src={edit} alt="edit" />
            </Link>
            <img src={Delete} alt="Delete" onClick={() => deletePost(postId)}/>
          </div>
        }
      </div>
      <h1>{result?.title}</h1>
      <p>{result?.description}</p>
    </>
  )
}

export default CurrentPost
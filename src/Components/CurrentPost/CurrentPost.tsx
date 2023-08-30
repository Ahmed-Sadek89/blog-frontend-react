import { postType } from '../../Types/types'
import edit from '../../Images/edit.png'
import Delete from '../../Images/delete.png'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

type props = {
  post: postType | undefined,
  postId: string | undefined
}

const CurrentPost = ({ post, postId }: props) => {
  const token = Cookies.get('authorization');
  const isAuth = token ? true : false;

  return (
    <>
      <img src={post?.post_image} alt={post?.title} />
      <div className='post-single-current-owner'>
        <img src={post?.user.image} alt={post?.user.username} />
        <div className='post-single-current-owner-texts'>
          <span>{post?.user.username}</span>
          {/* <span>published at {post?.user.post_published} ago</span> */}
          <span>published at ... ago</span>
        </div>
        {/* put update delete option if user is auth && this is user's post */}
        {
          isAuth === true &&
          <div className="post-single-current-owner-options">
            <Link to={`/write?edit=${postId}`} state={post}>
              <img src={edit} alt="edit" />
            </Link>
            <img src={Delete} alt="Delete" />
          </div>
        }
      </div>
      <h1>{post?.title}</h1>
      <p>{post?.description}</p>
    </>
  )
}

export default CurrentPost
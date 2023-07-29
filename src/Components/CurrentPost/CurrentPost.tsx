import { postType } from '../../Types/types'
import edit from '../../Images/edit.png'
import Delete from '../../Images/delete.png'
import { Link } from 'react-router-dom'

type props = {
  post: postType | undefined,
  postId: string | undefined
}

const CurrentPost = ({ post, postId }: props) => {
  return (
    <>
      <img src={post?.img} alt={post?.title} />
      <div className='post-single-current-owner'>
        <img src={post?.owner.image} alt={post?.owner.username} />
        <div className='post-single-current-owner-texts'>
          <span>{post?.owner.username}</span>
          <span>published at {post?.owner.post_published} ago</span>
        </div>
        {/* put update delete option if user is auth && this is user's post */}
        <div className="post-single-current-owner-options">
          <Link to={`/write?edit=${postId}`} state={post}>
            <img src={edit} alt="edit" />
          </Link>
          <img src={Delete} alt="Delete" />
        </div>
      </div>
      <h1>{post?.title}</h1>
      <p>{post?.desc}</p>
    </>
  )
}

export default CurrentPost
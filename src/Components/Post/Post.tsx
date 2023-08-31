import { Link, useNavigate } from 'react-router-dom';
import { postType } from '../../Types/types';

type props = {
    post: postType
}

const Post = ({post}: props ) => {
  const navigate = useNavigate()
  return (
    <div className='post'>
      <div className="post-info">
          <h1 onClick={() => navigate(`/post/${post.id.toString()}`)}>
            {post.title}
          </h1>
        <p>{`${post.description.slice(0, 200)}...`}</p>
          <button onClick={() => navigate(`/post/${post.id.toString()}`)}>read more...</button>
      </div>
      <div className="post-background">
          <img src={post.post_image} alt={post.title} />
      </div>
    </div>
  )
}

export default Post
import { Link } from 'react-router-dom';
import { postType } from '../../Types/types';

type props = {
    post: postType
}

const Post = ({post}: props ) => {

  return (
    <div className='post'>
      <div className="post-info">
        <Link to={`/post/${post.id.toString()}`}>
          <h1>
            {post.title}
          </h1>
        </Link>
        <p>{post.desc}</p>
        <Link to={`/post/${post.id.toString()}`}>
          <button>read more...</button>
        </Link>
      </div>
      <div className="post-background">
          <img src={post.img} alt={post.title} />
      </div>
    </div>
  )
}

export default Post
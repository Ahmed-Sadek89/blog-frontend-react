import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { rootState } from '../../Redux/store';
import CurrentPost from '../../Components/CurrentPost/CurrentPost';
import OtherPosts from '../../Components/OtherPosts/OtherPosts';

const SinglePost = () => {
  const { post_id } = useParams();
  const { posts } = useSelector(( state: rootState ) => state.posts_get);
  const currentPost = posts.find(index => index.id.toString() === post_id);
  const otherPosts = posts.filter(index => index.id.toString() !== post_id);
  return (
    <div className='post-single'>
      <div className="post-single-current">
        <CurrentPost post={currentPost} postId={post_id}/>
      </div> 

      <div className="post-single-other">
        <h2>Other posts you may like</h2>
        <OtherPosts posts={otherPosts} />
      </div>
     </div>
  )
}

export default SinglePost
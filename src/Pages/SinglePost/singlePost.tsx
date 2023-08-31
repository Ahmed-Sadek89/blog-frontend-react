import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, rootState } from '../../Redux/store';
import CurrentPost from '../../Components/CurrentPost/CurrentPost';
import OtherPosts from '../../Components/OtherPosts/OtherPosts';
import { posts_getByCategory } from '../../Redux/Slices/async_slices/posts_getByCategory.slice';
import { post_getById } from '../../Redux/Slices/async_slices/post_getById.slice';
import { postType } from '../../Types/types';

const SinglePost = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<AppDispatch>();
  const { post_id } = useParams();
  useEffect(() => {
    dispatch(post_getById(parseInt(post_id || '')))
      .then(({ payload }) => {
        let res = payload as {
          status: number,
          result: postType
        }
        if ( res.status === 200) {
          dispatch(posts_getByCategory(res?.result?.category?.cat_id))
        } else {
          navigate('/')
        }
      })
  }, [dispatch, post_id, navigate])
  const posts_getById_state = useSelector((state: rootState) => state.post_getById_state);
  const posts_getByCategory_state = useSelector((state: rootState) => state.posts_getByCategory_state);
  return (
    <div className='post-single'>
      <div className="post-single-current">
        <CurrentPost postState={posts_getById_state} postId={post_id} />
        {/* <h1>hi</h1> */}
      </div>

      <div className="post-single-other">
        <h3>other posts you may like</h3>
        <OtherPosts postId={post_id} posts={
          posts_getByCategory_state?.data?.result
        } />
      </div>
    </div>
  )
}

export default SinglePost
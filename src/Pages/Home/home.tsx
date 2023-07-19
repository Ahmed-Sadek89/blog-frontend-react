import Post from '../../Components/Post/Post'
import { useSelector } from 'react-redux'
import { postType } from '../../Types/types'
import { rootState } from '../../Redux/store'
import { useParams, useSearchParams } from 'react-router-dom'

const home = () => {
  let { loading, error, posts } = useSelector((state: rootState) => state.posts_get);
  const {cat_name} = useParams()
  return (
    <>
      {
        loading === true && <h1>loading</h1>
      }
      {
        error === true && <h1>error</h1>
      }
      {
        (posts.length !==0 && cat_name === undefined) && 
        <div className='posts_layout'>
          {
            posts.map((post: postType) => (
              <Post post={post} key={post.id}/>
            ))
          }
        </div>
      }
      {
        (posts.length !==0 && cat_name !== undefined) && 
        <div className='posts_layout'>
          {
            posts.filter(index => index.category === cat_name)
            .map((post: postType) => (
              <Post post={post} key={post.id}/>
            ))
          }
        </div>
      }
    </>
  )
}

export default home
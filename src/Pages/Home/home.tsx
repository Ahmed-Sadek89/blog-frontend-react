import Post from '../../Components/Post/Post'
import { useSelector } from 'react-redux'
import { postType } from '../../Types/types'
import { rootState } from '../../Redux/store'
import { useParams, useSearchParams } from 'react-router-dom'

const home = () => {
  let { loading, error, data } = useSelector((state: rootState) => state.posts_get);
  const {cat_name} = useParams()
  console.log({data})
  console.log({postByCat: data.result.filter(index => index.cat_name === cat_name)})
  return (
    <>
      {
        loading === true && <h1>loading</h1>
      }
      {
        error === true && <h1>error</h1>
      }
      {
        (data.result.length !==0 && cat_name === undefined) && 
        <div className='posts_layout'>
          {
            data.result.map((post: postType) => (
              <Post post={post} key={post.id}/>
            ))
          }
        </div>
      }
      {
        (data.result.length !==0 && cat_name !== undefined) && 
        <div className='posts_layout'>
          {
            data.result.filter(index => index.cat_name === cat_name)
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
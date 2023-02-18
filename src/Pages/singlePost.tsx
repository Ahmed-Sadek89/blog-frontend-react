import { useParams } from 'react-router-dom'

const SinglePost = () => {
  const { post_id } = useParams();
  
  return (
    <div>post number { post_id } </div>
  )
}

export default SinglePost
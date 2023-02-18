import { useParams } from 'react-router-dom'

const Category = () => {
  const { cat_name } = useParams();
  return (
    <div>category number {cat_name} </div>
  )
}

export default Category
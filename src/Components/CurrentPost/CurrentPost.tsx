import React from 'react'
import { postType } from '../../Types/types'

type props = {
    post: postType | undefined
}

const CurrentPost = ({post}: props) => {
  return (
    <>
        <img src={post?.img} alt={post?.title} />
        <div className='post-single-current-owner'>
            <img src={post?.owner.image} alt={post?.owner.username} />
            <div>
                <span>{post?.owner.username}</span>
                <span>published at {post?.owner.post_published} ago</span>
            </div>
            {/* put update delete option if user is auth && this is user's post */}
        </div>
        <h1>{post?.title}</h1>
        <p>{post?.desc}</p>
    </>
  )
}

export default CurrentPost
import React from 'react'
import { useSelector } from 'react-redux'
import { selectPostById } from './postsSlice'
import PostAuthor from './PostAuthor'
import TimeAgo from './TimeAgo'

const SinglePostPage = () => {

    const post = useSelector((state) => selectPostById(state, postId))

    if (!post) {
        return (
            <section>
                <h2>Post not found!</h2>
            </section>
        )
    }

  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <p>
            <PostAuthor userId={post.userId}/>
            <TimeAgo timestamp={post.date} />
        </p>
    </article>
  )
}

export default SinglePostPage
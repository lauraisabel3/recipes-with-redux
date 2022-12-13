import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "./postsSlice"
import './postList.scss'

const PostList = () => {
  const posts = useSelector(state => state.posts)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('renderizacion')
    dispatch(fetchPosts())
  }, [])

  const reversedPosts = [...posts].reverse()
  const data = reversedPosts.map(post => (
    <div key={post.id} className='recipe'>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  ))
  return (
    <div className="recipes-container">
      {data}
    </div>
  )
}

export default PostList
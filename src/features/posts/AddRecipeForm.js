import { useState } from "react"
import { useDispatch } from "react-redux"
import { addPost } from "./postsSlice"
import './postList.scss'

const AddRecipeForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const dispatch = useDispatch()

  const onAddPost = () => {
    dispatch(addPost(title, content));
    setTitle('')
    setContent('')
  }

  
  return(
    <div className="add-recipe-container">
      <div className="add-recipe-labels">
        <div>
          <label>Add your recipe's title</label>
          <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
        </div>
        <div>
          <label>Add your recipe</label>
          <textarea value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
        </div>
      </div>
      <button onClick={onAddPost}>Add recipe</button>
    </div>
  )
}

export default AddRecipeForm
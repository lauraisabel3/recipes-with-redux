import { createAsyncThunk, createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = []

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers:{
    addPost: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(title, content){
        return {
          payload: {
            title,
            content,
            id: nanoid()
          }
        }
      }
    }
},
extraReducers (builder) {
  builder
  .addCase( fetchPosts.fulfilled, (state, action) => {
    action.payload.map(el => (
      state.push(el)
    ))
  })}
})

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
  const data = await response.json()
  let recipes = data.meals.map(el => ({
    title: el.strMeal,
    content: el.strInstructions,
    id: el.idMeal,
  }))

  return recipes
})

export const { addPost } = postsSlice.actions

export default postsSlice.reducer
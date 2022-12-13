import PostList from './features/posts/PostsList';
import AddRecipeForm from './features/posts/AddRecipeForm';

function App() {

  return (
    <div className='main'>
      <AddRecipeForm/>
      <PostList />
    </div>
  );
}

export default App;

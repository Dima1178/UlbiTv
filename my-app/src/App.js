import React, {useState, useRef} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const[posts, setPosts] = useState([
    {id:  1, title: 'Java Script', name: 'Descriotion'},
    {id:  2, title: 'Java Script 2', name: 'Descriotion'},
    {id:  3, title: 'Java Script 3', name: 'Descriotion'},
  ])

  const[title, setTitle] = useState('')

  const[body, setBody] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPosts([...posts, newPost])
    setTitle( '')
    setBody('')
  }
 

  return (
    <div className= 'App'> 
      <form>
        {/*управляемій компонент*/}
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text" 
          placeholder="Name of the post"
          />
        <MyInput 
        value={title}
        onChange={e => setTitle(e.target.value)}
        type="text"
        placeholder="Dicription of the post"
         />
      
      </form>
     
      <MyButton onClick={addNewPost}>Create post</MyButton>
      <PostList posts={posts} title="List of Posts 1" />                                                                             
    </div>
  );
}

export default App;

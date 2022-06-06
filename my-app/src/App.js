import React, {useState} from 'react';
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

  const[title, setTitle] = useState('hjhjhjh')

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
  }


  return (
    <div className= 'App'> 
      <form>
        {/*управляемій компонент*/}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder="Name of the post"
          />
        <MyInput type="text" placeholder="Dicription of the post"/>
      
      </form>
     
      <MyButton onClick={addNewPost}>Create post</MyButton>
      <PostList posts={posts} title="List of Posts 1" />                                                                             
    </div>
  );
}

export default App;

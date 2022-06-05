import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';

function App() {
  const[posts, setPosts] = useState([
    {id:  1, title: 'Java Script', name: 'Descriotion'},
    {id:  2, title: 'Java Script 2', name: 'Descriotion'},
    {id:  3, title: 'Java Script 3', name: 'Descriotion'},
  ])

  const[posts2, setPosts2] = useState([
    {id:  1, title: 'Pyton', name: 'Descriotion'},
    {id:  2, title: 'Pyton2', name: 'Descriotion'},
    {id:  3, title: 'Ptron3', name: 'Descriotion'},
  ])

  return (
    <div className= 'App'> 
      <PostList posts={posts} title="List of Posts 1" />    
      <PostList posts={posts2} title="List of Posts 2" />                                                                                    
    </div>
  );
}

export default App;

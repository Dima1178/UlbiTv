import React, {useState} from 'react';

function PostItem(props) {

  return (
      <div className= 'post'>
         <div className= 'post__content'>
            <strong>{props.post.id}, {props.post.title}</strong> 
            <div> 
            {props.post.name}
            </div>                                                                                           
         </div> 
         <div className="post__btn">
            <button>remove</button>
         </div>                                                                                              
      </div>                                                                      
  );
}

export default PostItem;
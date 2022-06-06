import React, {useState} from 'react';

function PostItem(props) {

  return (
      <div className= 'post'>
         <div className= 'post__content'>
            <strong>{props.number}. {props.post.title}</strong> 
            <div> 
            {props.post.body}
            </div>                                                                                           
         </div> 
         <div className="post__btn">
            <button>remove</button>
         </div>                                                                                              
      </div>                                                                      
  );
}

export default PostItem;
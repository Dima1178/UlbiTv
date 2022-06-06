import React from "react";
import classes from './MyButton.module.css';

 const MyButton =({
    children,
    onClick,
    type,
    ...props}) => {
    return(
       
        <button onClick={onClick} type={type} {...props} className={classes.myBtn}>
            {children}
        </button>
       
    );
}

export default MyButton;
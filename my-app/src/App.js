import React, {useState} from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";

function App() {
  return (
    <div>
    <Counter/>
    <Counter/>
    <ClassCounter/>
    <ClassCounter/>
    </div>
  );
}

export default App;

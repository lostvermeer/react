import React, { useState } from "react";

const Counter = function () {
    const [likes, setLikes] = useState(0);

    function Increment() {
        setLikes(likes + 1);
      }
    
      function Decrement() {
        setLikes(likes - 1);
      }
    return (
        <div>
            <h1>Counter</h1>
            <h4>Functional Component</h4>
            <h1>{likes}</h1>
            <button count={likes} onClick={Increment}>Increment</button>
            <button count={likes} onClick={Decrement}>Decrement</button>
        </div>
    );
}

export default Counter;
// import React from 'react';
import './blogstext.js';
import './blogs.css';


  
// const Blogs = () => {
//   return (
//     <div>
//       <h1> bla bla</h1>
//     </div>
//   );
//   };


import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import './blogs.css';

const Blogs = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const todo = localStorage.getItem("todo");
    setData(JSON.parse(todo));
  }, []);
  const addTodo = () => {
    const list = {
      id: uuid(),
      todo: input,
    };
    data.push(list);
    localStorage.setItem("todo", JSON.stringify(data));
    setInput("");
  };

  const Delete = (id) => {
    const deleted = data.filter((item) => item.id !== id);
    setData(deleted);
    localStorage.setItem("todo", JSON.stringify(data));
  };
  return (
    <div>
      <div class="container">
        <h2>Review Section</h2>
        <h3>Add Comment</h3>
        <p>
          <input
            id="new-task"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={addTodo}>Add</button>
        </p>
        <h3>Reviews</h3>
        <ul>
          {data?.map((item) => (
            <li>
              <label>{item?.todo}</label>
              <input type="text" />
              <button class="delete" onClick={() => Delete(item?.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

  
export default Blogs;
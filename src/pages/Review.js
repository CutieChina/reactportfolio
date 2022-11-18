// import React from 'react';
import './blogstext.js';
import './blogs.css';
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import './blogs.css';

const Review = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const todo = localStorage.getItem("todo");
    setData(JSON.parse(todo));
  }, []);

  const addTodo = async () => {
    const list = {
      id: uuid(),
      todo: input,
    };

    data.push(list);
    localStorage.setItem("todo", JSON.stringify(data));
    setInput("");

    let foo = await fetch("http://localhost:3001/db");
    let bar = await foo.json();
    console.log(bar);
    
  };

  const Delete = (id) => {
    const deleted = data.filter((item) => item.id !== id);
    setData(deleted);
    localStorage.setItem("todo", JSON.stringify(data));
  };


  const Edit = (id) => {
    const edited = data.find((item) => item.id === id);
    edited.todo = input
    setData(data.map(item => ({...item})));
    localStorage.setItem("todo", JSON.stringify(data));
    
  };

  // async function deleteEntry() {
  //   if (activeEntry._id) {
  //       await fetch(`/entry/${activeEntry._id}`, {
  //           method: 'DELETE'
  //       })
  // function Edit(liTag) {
  //   let liContent = liTag.querySelector("span");
  
  //   let input = document.createElement("input");
  //   input.type = "text";
  //   input.value = liContent.textContent;
  //   liTag.append(input);
  //   input.focus();
  //   input.addEventListener("blur", () => {
  //     liContent.innerHTML = input.value;
  //     input.remove();
  //   });
  // }

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
              <button class="edit" onClick={() => Edit(item?.id)}>
                Edit
              </button>
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

  
export default Review;
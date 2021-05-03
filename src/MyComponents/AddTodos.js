import React, { useState } from "react";

export const AddTodos = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(title, desc);
    setTitle("");
    setDesc("");
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleChangeDescription = (e) => {
    setDesc(e.target.value);
  };
  return (
    <div className="container">
      <h1 className="title my-3">Add a todo</h1>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="title" class="form-label">
            To-to Title
          </label>
          <input
            type="text"
            class="form-control"
            id="title"
            value={title}
            onChange={handleChangeTitle}
            autofocus
          />
        </div>
        <div class="mb-3">
          <label for="desc" class="form-label">
            Description
          </label>
          <textarea
            class="form-control"
            id="desc"
            value={desc}
            onChange={handleChangeDescription}
          />
        </div>
        <button type="submit" class="btn btn-success" disabled={!title}>
          Submit
        </button>
      </form>
    </div>
  );
};

import React from "react";

const Todo = ({ todo, onDelete }) => {
  const handleClickDelete = () => {
    onDelete(todo.sno);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{todo.title}</h5>
        <p className="card-text">{todo.desc}</p>
        <a href="#" class="btn btn-sm btn-danger" onClick={handleClickDelete}>
          Delete
        </a>
      </div>
    </div>
  );
};

export default Todo;

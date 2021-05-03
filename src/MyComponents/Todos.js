import React from "react";
import Todo from "./Todo";
const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container" style={{ paddingBottom: 30 }}>
      <h1 className="title my-3">Nisha's CheckList</h1>
      {todos.length ? (
        <>
          {todos.map((todo) => (
            <Todo key={todo.sno} todo={todo} onDelete={onDelete} />
          ))}
        </>
      ) : (
        "Nothing to display"
      )}
    </div>
  );
};

export default Todos;

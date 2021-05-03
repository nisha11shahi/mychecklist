import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import { AddTodos } from "./MyComponents/AddTodos";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

function App() {
  const onDelete = (sno) => {
    //setTodos(todos.filter((e) => e.sno != sno));
    let currentTodos = [...todos];

    currentTodos = currentTodos.filter((todo) => todo.sno !== sno);

    setTodos(currentTodos);
  };
  const onAdd = (title, desc) => {
    let currentTodos = [...todos];
    currentTodos.push({
      title,
      desc,
      sno: currentTodos.length + 1,
    });
    setTodos(currentTodos);
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Buy hooks",
      desc: "Go to walmart and get hooks",
    },
    {
      sno: 2,
      title: "Do Laundry",
      desc: "Go home",
    },
    {
      sno: 3,
      title: "Make tiktok",
      desc: "Dress up",
    },
  ]);

  return (
    <div className="App">
      <Header title="My Checklist" />
      <AddTodos onAdd={onAdd} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;

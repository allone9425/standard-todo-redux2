import React from "react";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import List from "../components/List";
const Home = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <header>
        <h1>To do List</h1>
      </header>
      <main>
        <Form />
        <List isDone={false} todos={todos} />
        <List isDone={true} todos={todos} />
      </main>
    </div>
  );
};

export default Home;

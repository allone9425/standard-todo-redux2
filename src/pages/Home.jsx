import React from "react";
import { useSelector } from "react-redux";
import Form from "../components/Form";
import List from "../components/List";

import styled from "styled-components";
const Home = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      <header>
        <Title>To do List</Title>
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

const Title = styled.h1`
  color: red;
  text-align: center;
  margin-bottom: 10px;
`;

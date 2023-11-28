import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
function Detail() {
  const navigate = useNavigate();
  const param = useParams().id;
  const todos = useSelector((state) => state.todos);
  const selectTodos = todos.filter((todo) => todo.id === param)[0];

  console.log(selectTodos);
  return (
    <DetailBox>
      <h3>{selectTodos.title}</h3>
      <p>{selectTodos.body}</p>
      <p>{selectTodos.isDone}</p>
      <Button
        onClick={() => {
          navigate("/");
        }}
      >
        이전으로
      </Button>
    </DetailBox>
  );
}

export default Detail;

const Button = styled.button`
  background-color: #faf0ca;
  border: none;
  padding: 10px 20px;

  border-radius: 5px;
  font-weight: bold;
`;

const DetailBox = styled.div`
  width: 400px;
  background-color: #ffd60a;
  padding: 20px;
  border-radius: 10px;
  margin: 50px 50px;
  h3 {
    color: #f95738;
  }
  p {
    color: #003566;
  }
`;

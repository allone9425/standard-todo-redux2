import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, switchTodo } from "../redux/modules/todos";
function List({ isDone }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <ListBox>
      <h2>{isDone === true ? "완료 " : "진행중"}</h2>
      {todos
        .filter((item) => {
          return item.isDone === isDone;
        })
        .map((todo) => {
          return (
            <TodoBox>
              <h3>{todo.title}</h3>
              <p>{todo.body}</p>
              <p>{todo.isDone}</p>
              <button
                onClick={() => {
                  dispatch(switchTodo(todo.id));
                }}
              >
                {isDone === false ? "완료" : "취소"}
              </button>
              <button
                onClick={() => {
                  dispatch(deleteTodo(todo.id));
                }}
              >
                삭제
              </button>
              <button
                onClick={() => {
                  navigate(`/${todo.id}`);
                }}
              >
                상세보기
              </button>
            </TodoBox>
          );
        })}
    </ListBox>
  );
}

export default List;

const TodoBox = styled.div`
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
  button {
    background-color: #faf0ca;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
    &:first-of-type {
      margin-right: 20px;
    }
    &:last-of-type {
      margin-left: 20px;
    }
  }
`;

const ListBox = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;

  h2 {
    text-align: center;
    padding: 10px;
    margin: 20px;
    width: 100%;
  }
`;

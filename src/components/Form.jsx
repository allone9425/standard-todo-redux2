import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";
function Form() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      title,
      body,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setBody("");
  };
  return (
    <FormSection>
      <FormBox onSubmit={onSubmitHandler}>
        <label htmlFor="title">제목</label>
        <input
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label htmlFor="body">내용</label>
        <input
          id="body"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button type="submit">작성</button>
      </FormBox>
    </FormSection>
  );
}

export default Form;

const FormBox = styled.form`
  display: flex;
  border: 1px solid #003566;
  padding: 10px;
  width: 380px;
  border-radius: 8px;
  flex-direction: column;
  flex-wrap: wrap;
  label {
    margin-right: 20px;
    margin-bottom: 10px;
  }
  input {
    width: 380px;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #ffd60a;
    margin-bottom: 30px;
  }
  button {
    width: 380px;
    background-color: #faf0ca;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: bold;
  }
`;

const FormSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

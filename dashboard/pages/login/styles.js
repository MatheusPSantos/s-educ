import styled from "styled-components";

export const LoginBox = styled.div`
  background: white;
  box-shadow: 1px 2px 2px 2px rgba(0, 0, 0, 0.2);
  margin: calc(50% - 600px) 35%;
  width: 25%;
  height: 400px;
  color: #333;
  display: flex;
  flex-direction: column;
  padding: 10px;

  label {
    width: 90%;
    margin: 5px auto;
  }

  input {
    position: relative;
    width: 90%;
    height: 40px;
    border: none;
    box-shadow: 1px 2px 2px 1px rgba(0, 0, 0, 0.2);
    margin: 5px auto;
  }

  button {
    position: relative;
    width: 90%;
    border: 0px;
    background-color: green;
    color: white;
    margin: 20px auto;
    height: 40px;
  }
`;

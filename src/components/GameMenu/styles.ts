import styled from 'styled-components';
import { tint } from 'polished';

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: column nowrap;

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    div {
      display: flex;
      align-items: center;

      input[type='radio'] {
        -webkit-appearance: none;
        width: 20px;
        height: 20px;
        border: 1px solid darkgray;
        border-radius: 50%;
        outline: none;
        transition: all 0.3s ease;

        &:before {
          content: '';
          display: block;
          width: 80%;
          height: 80%;
          display: flex;
          margin: 2px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        &:hover {
          cursor: pointer;
          border-color: #ff500d;
        }

        &:checked {
          border-color: #ff500d;
          &:before {
            background: #ff500d;
          }
        }
      }

      label {
        margin-left: 5px;
      }
    }

    button {
      margin-top: 30px;
      padding: 10px;
      color: #fff;
      background-color: #ff500d;
      border: 0;
      outline: none;
      border-radius: 8px;
      font-weight: bold;
      font-size: 16px;
      transition: background 0.2s ease-in;

      &:hover {
        cursor: pointer;
        background-color: ${tint(0.2, '#ff500d')};
      }
    }

    div + div {
      margin-top: 8px;
    }
  }
`;

import styled from 'styled-components';
import { tint } from 'polished';

export const Container = styled.button`
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
`;

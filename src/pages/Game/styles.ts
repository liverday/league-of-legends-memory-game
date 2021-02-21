import styled from 'styled-components';
import background from '../../assets/background.png';

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: url(${background}) no-repeat top left;
  background-size: 160%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GameContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  min-width: 500px;
`;

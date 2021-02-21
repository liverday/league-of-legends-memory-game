import styled from 'styled-components';
import background from '../../assets/background.png';

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: url(${background}) no-repeat bottom;
  background-size: cover;

  @media (min-width: 768px) {
    background-position: top left;
    background-size: 160%;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GameContainer = styled.div`
  padding: 20px;
  background-color: #fff;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    min-width: 500px;
    width: auto;
    height: auto;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
    border-radius: 8px;
  }
`;

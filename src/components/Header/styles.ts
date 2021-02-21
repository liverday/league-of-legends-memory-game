import styled from 'styled-components';

export const ScoreContainer = styled.div`
  display: flex;
  align-items: flex-start;

  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  div:not(${ScoreContainer}) {
    display: flex;
    align-items: center;

    img {
      width: 70px;
      height: 70px;
    }

    h1 {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
      text-transform: uppercase;

      span + span {
        color: #ff500d;
      }
    }
  }
`;

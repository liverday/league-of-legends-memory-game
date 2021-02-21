import styled from 'styled-components';

export const ScoreContainer = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
  }

  display: flex;
  align-items: flex-start;

  span {
    font-size: 20px;
    font-weight: bold;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    justify-content: space-between;
    flex-flow: row nowrap;
  }

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

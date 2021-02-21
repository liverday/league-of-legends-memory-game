import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 50px;
  }

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  h1,
  h2 {
    margin: 0;
  }

  > h2 {
    text-transform: uppercase;
  }

  > h3 {
    font-weight: 400;
    margin-top: 5px;
    color: #707070;
  }

  div {
    margin-top: 30px;
    > h3 {
      color: #999;
      font-size: 16px;
      font-weight: normal;
    }
  }

  button {
    margin-top: 20px;
    width: 100%;
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 120px);
  grid-template-rows: repeat(4, 120px);
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  gap: 20px;
`;

import styled from 'styled-components';

export const EasyContainer = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(5, 120px);
  grid-template-rows: repeat(4, 120px);
  gap: 20px;
`;

export const MediumContainer = styled(EasyContainer)`
  grid-template-columns: repeat(6, 90px);
  grid-template-rows: repeat(5, 90px);
`;

export const HardContainer = styled(EasyContainer)`
  grid-template-columns: repeat(8, 90px);
  grid-template-rows: repeat(5, 90px);
`;

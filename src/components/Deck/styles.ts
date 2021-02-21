import styled from 'styled-components';

export const EasyContainer = styled.div`
  margin-top: 30px;
  display: grid;

  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(4, 50px);
  justify-content: center;
  gap: 10px;

  @media (min-width: 768px) {
    margin-top: 50px;
    grid-template-columns: repeat(5, 120px);
    grid-template-rows: repeat(4, 120px);
    justify-items: initial;
    gap: 20px;
  }
`;

export const MediumContainer = styled(EasyContainer)`
  grid-template-columns: repeat(6, 40px);
  grid-template-rows: repeat(5, 40px);

  @media (min-width: 768px) {
    grid-template-columns: repeat(6, 90px);
    grid-template-rows: repeat(5, 90px);
  }
`;

export const HardContainer = styled(EasyContainer)`
  grid-template-columns: repeat(8, 30px);
  grid-template-rows: repeat(5, 30px);
  gap: 5px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(8, 90px);
    grid-template-rows: repeat(5, 90px);
  }
`;

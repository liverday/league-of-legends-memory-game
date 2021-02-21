import styled, { css } from 'styled-components';

const Flippable = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100%;
  height: 100%;
  transition: transform ease 500ms;
  border-radius: 8px;
  overflow: hidden;

  &:hover {
    cursor: pointer;
  }
`;

export const Front = styled(Flippable)`
  z-index: 2;
  transform: rotateY(-180deg);
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Back = styled(Flippable)`
  background-color: #ff500d;
  transform: rotateY(0deg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;

  @media (min-width: 768px) {
    font-size: 32px;
  }

  color: #000;
`;

interface ContainerProps {
  flipped: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  position: relative;

  ${({ flipped }) =>
    flipped &&
    css`
      ${Front} {
        transform: rotateY(0deg);
      }

      ${Back} {
        transform: rotateY(180deg);
      }
    `}
`;

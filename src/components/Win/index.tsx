import React from 'react';
import { useGame } from '../../hooks/game';

import { Container } from './styles';

const Win: React.FC = () => {
  const { flips } = useGame();

  return (
    <Container>
      <h2>Você venceu!</h2>
      <h3>Com um total de {flips} tentativas!</h3>
      <div>
        <h3>Obrigado por jogar!</h3>
      </div>
    </Container>
  );
};

export default Win;

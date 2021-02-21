import React, { useEffect, useCallback, SyntheticEvent } from 'react';

import { Container } from './styles';

import levels from '../../shared/config/levels';
import { useGame } from '../../hooks/game';
import { Level } from '../../shared/interfaces';
import Button from '../Button';

interface GameMenuProps {
  onStart(): void;
}

const GameMenu: React.FC<GameMenuProps> = ({ onStart }) => {
  const { level, chooseLevel } = useGame();

  useEffect(() => {
    if (!level) {
      const easyLevel = levels.find(({ name }) => name === 'easy');
      if (easyLevel) chooseLevel(easyLevel);
    }
  }, [level, chooseLevel]);

  const handleInputChange = useCallback(
    (newLevel: Level) => {
      chooseLevel(newLevel);
    },
    [chooseLevel],
  );

  const handleSubmit = useCallback(
    (event: SyntheticEvent<any>) => {
      event.preventDefault();

      onStart();
    },
    [onStart],
  );

  return (
    <Container>
      <h2>Escolha um nível</h2>
      <form onSubmit={handleSubmit}>
        {levels.map(({ label, name, cards }) => (
          <div key={name}>
            <input
              type="radio"
              value={name}
              checked={level?.name === name}
              id={name}
              onChange={() => handleInputChange({ label, name, cards })}
            />
            <label htmlFor={name}>{label}</label>
          </div>
        ))}
        <Button type="submit">Começar</Button>
      </form>
    </Container>
  );
};

export default GameMenu;

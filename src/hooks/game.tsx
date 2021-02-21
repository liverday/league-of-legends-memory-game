import React, { useContext, createContext, useState, useCallback } from 'react';
import { Level } from '../shared/interfaces';
import { useCards } from './card';

type GameState = 'start' | 'play' | 'won';

interface GameContextData {
  level: Level | null;
  gameState: GameState;
  flips: number;
  addFlip(): void;
  chooseLevel(level: Level): void;
  changeGameState(newGameState: GameState): void;
}

const GameContext = createContext({} as GameContextData);

export const GameContextProvider: React.FC = ({ children }) => {
  const [level, setLevel] = useState<Level | null>(null);
  const [flips, setFlips] = useState(0);
  const [gameState, setGameState] = useState<GameState>('start');
  const { initializeCards } = useCards();

  const chooseLevel = useCallback((newLevel: Level) => {
    setLevel(newLevel);
  }, []);

  const changeGameState = useCallback(
    (newGameState: GameState) => {
      if (newGameState === 'play' && level) {
        initializeCards(level);
        setFlips(0);
      }

      setGameState(newGameState);
    },
    [level, initializeCards],
  );

  const addFlip = useCallback(() => {
    setFlips(flips + 1);
  }, [flips]);

  return (
    <GameContext.Provider
      value={{ level, gameState, chooseLevel, changeGameState, flips, addFlip }}
    >
      {children}
    </GameContext.Provider>
  );
};

export function useGame(): GameContextData {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('shoulde be used with GameContextProvider');
  }

  return context;
}

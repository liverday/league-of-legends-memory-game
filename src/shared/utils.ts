import cards from './config/cards';
import { Card, Level } from './interfaces';

/* eslint-disable no-plusplus */
export function shuffle(arr: any[]): any[] {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
}

export function duplicate(arr: any[]): any[] {
  return [...arr, ...arr];
}

export function getCardsByLevel(level: Level): Card[] {
  const shuffledCards = shuffle(cards);
  const newCards = shuffledCards.filter((_, index) => index < level.cards);
  return newCards;
}

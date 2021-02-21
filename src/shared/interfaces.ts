export interface Card {
  id?: number;
  name: string;
  flipped: boolean;
}

export type LevelOption = 'easy' | 'medium' | 'hard';

export interface Level {
  name: LevelOption;
  label: string;
  cards: number;
}

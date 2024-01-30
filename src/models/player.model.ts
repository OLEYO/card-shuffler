// player.model.ts
import { Card } from './card.model';

export class Player {
  cards: Card[] = [];

  constructor(public name: string) {}
}

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
    let component: CardComponent;
    let fixture: ComponentFixture<CardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CardComponent],
        });
        fixture = TestBed.createComponent(CardComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should initialize with default values', () => {
        expect(component.numberOfPlayers).toBe(1);
        expect(component.deck).toEqual([]);
        expect(component.numberOfDecks).toBe(1);
        expect(component.players).toEqual([]);
    });

    it('should initialize the deck', () => {
        //accessing methods this way to get around private methods not being accessible.
        component['initializeDeck'](); 
        expect(component.deck.length).toBeGreaterThan(0);
    });

    it('should initialize players', () => {
        component['initializePlayers'](); 
        expect(component.players.length).toBe(component.numberOfPlayers);
    });

    it('should shuffle the deck', () => {
      const originalDeck = [...component.deck];
      console.log('Original Deck:', originalDeck);
      
      component['initializeDeck']();
      component['shuffleDeck'](); 
      
      console.log('Shuffled Deck:', component.deck);
      expect(component.deck).not.toEqual(originalDeck);
  });

    it('should distribute cards evenly among players', () => {
        component['initializePlayers']();
        component['initializeDeck']();
        component['distributeCards']();

        //check if each player has received some cards
        expect(
            component.players.every((player) => player.cards.length > 0)
        ).toBe(true);

        //check if the total number of cards distributed equals the total in the deck
        const totalDistributedCards = component.players.reduce(
            (total, player) => total + player.cards.length,
            0
        );
        expect(totalDistributedCards).toBe(component.deck.length);
    });

    it('should collect cards from players', () => {
        component['initializePlayers']();
        component['initializeDeck']();
        component['distributeCards']();

        //check if each player has received some cards
        expect(
            component.players.every((player) => player.cards.length > 0)
        ).toBe(true);

        component['collectCards']();

        //check if all players' card arrays are empty after collection
        expect(
            component.players.every((player) => player.cards.length === 0)
        ).toBe(true);
    });

    afterEach(() => {
        fixture.destroy(); //clean up the fixture after each test
    });
});

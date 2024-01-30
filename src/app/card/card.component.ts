import { Component } from '@angular/core';
import { Card } from '../../models/card.model';
import { Player } from '../../models/player.model';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    numberOfPlayers: number = 1;
    deck: Card[] = [];
    numberOfDecks: number = 1;
    players: Player[] = [];

    ngOnInit() {
        //only run what is required on load, we may not even shuffle the deck or number of players may change.
        this.initializeDeck();
    }

    run() {
        this.numberOfDecks = 1;

        while (this.numberOfPlayers > this.deck.length) {
            //open another deck if we've reached max amount of players for the deck.
            this.deck = this.deck.concat(this.deck);
            this.numberOfDecks += 1;
        }

        //check if we need to return the cards before distributing them again.
        if (this.players.find((x) => x.cards != null) != null)
            this.collectCards();
        //check if we've changed the number of players and reinitialize the players. this prevents recreating the players everytime since we already handle the clearing of cards.
        if (this.players.length != this.numberOfPlayers)
            this.initializePlayers();

        this.distributeCards();
    }

    private initializeDeck() {
        for (const suit of environment.suits) {
            for (const rank of environment.ranks) {
                this.deck.push(new Card(suit, rank));
            }
        }
    }

    private initializePlayers() {
        //clear array if we need to
        if (this.players.length > 0) this.players = [];

        for (let i = 1; i <= this.numberOfPlayers; i++) {
            this.players.push(new Player(`Player ${i}`));
        }
    }

    private shuffleDeck() {
        //Fisher-Yates shuffle algorithm. Most efficient and simple.
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    public distributeCards() {
        this.shuffleDeck();

        let cardIndex = 0;

        //this makes sure to evenly distribute the cards between the players so no player gets more than the other, where possible.
        this.players.forEach((player) => {
            player.cards.push(
                ...this.deck.slice(
                    cardIndex,
                    cardIndex +
                        Math.floor(this.deck.length / this.numberOfPlayers)
                )
            );
            cardIndex += Math.floor(this.deck.length / this.numberOfPlayers);
        });
    }

    collectCards() {
        this.players?.forEach((player) => {
            player.cards = [];
        });
    }
}

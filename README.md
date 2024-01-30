# CardShuffler

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## 'Card Component' Class

This Angular component represents the functionality of managing a deck of cards, distributing them among players, and handling related operations.


Properties:
numberOfPlayers: (number) The number of players participating in the card game. Defaults to 1.
deck: (Card[]) An array of Card objects representing the deck.
numberOfDecks: (number) The number of decks in play. Defaults to 1.
players: (Player[]) An array of Player objects representing the participants.

Lifecycle Hook:
ngOnInit(): Method called after the component is initialized. Initializes the deck on component load.

Public Methods:
run(): Initiates the card game by handling deck creation, player initialization, and card distribution. Ensures fairness by opening additional decks if needed.
distributeCards(): Shuffles the deck and distributes cards evenly among players.
collectCards(): Collects all cards from the players, clearing their hands.

Private Methods:
initializeDeck(): Populates the deck array with Card objects based on predefined suits and ranks from the environment.
initializePlayers(): Initializes the players array with Player objects, considering the specified number of players.
shuffleDeck(): Shuffles the cards in the deck using the Fisher-Yates algorithm.

Usage:
Initialize the component properties by setting the number of players (numberOfPlayers).
Call the run() method to start the card game, ensuring fair distribution among players.

Example Html:

<!-- app-card component usage in an Angular template -->
<app-card></app-card>


import { types } from "./types";

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const baseDeck = () => {
    let colors = ["red", "blue", "white", "orange", "yellow", "purple", "green", "black"];
    let deck = [];
    colors.map(color => {
        for(let i = 1; i <= 12; i++) {
            deck.push({color: color, type: "train"});
        }
    });
    for(let i = 1; i <= 14; i++) {
        deck.push({color: "loco", type: "train"});
    }
    shuffle(deck);
    return deck;
};

const initialState = {
    currentPlayer: {},
    players: [],
    gameState: "NEW_DESTINATIONS", 
    deck: baseDeck(),
    cards: [],
    tickets: [],
    destinations: []
};

export function game(state = initialState, action) {
    switch(action.type) {
        case types.ADD_PLAYER:
            return {
                ...state,
                players: [...state.players, {name: action.data.name, picture: action.data.picture, points: 0, trains: 0, cards: 0, goals: 0, round: 1}]
            };
        case types.DRAW_CARD: 
            return {
                ...state, 
                cards: [...state.cards, {color: action.color, type: "train"}]
            };
        case types.CHAGE_GAMESTATE: 
            return {
                ...state,
                gameState: action.state
            };
        case types.CHOOSE_DESTINATION:
            return {
                ...state, 
                destinations: [...state.destinations, action.destination]
            }
        default:
            return state;
    }
}
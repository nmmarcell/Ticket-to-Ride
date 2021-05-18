import { types } from "./types";

function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const baseDeck = () => {
    let colors = ["red", "blue", "white", "pink", "orange", "yellow", "purple", "green", "black"];
    let deck = [];
    colors.map(color => {
        for(let i = 1; i <= 12; i++) {
            deck.push({color: color});
        }
    });
    for(let i = 1; i <= 14; i++) {
        deck.push({color: "loco"});
    }
    shuffle(deck);
    return deck;
};

const initialState = {
    deck: baseDeck(),
    cards: []
};

export function game(state = initialState, action) {
    switch(action.type) {
        case types.DRAW_CARD: 
            return {
                ...state, 
                cards: [...state.cards, action.color]
            };
        default:
            return state;
    }
}
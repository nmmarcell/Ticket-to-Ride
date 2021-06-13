import { types } from "./types";
import {ticketToRideData} from "../../assets/ticket-to-ride-data";
import socket from "../../socket";

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
}

const insertCard = (array, index, card) => {
    let copy = array;
    copy[index].cards = [...copy[index].cards, card];
    return copy;
}

const insertDest = (array, index, goal, long) => {
    let copy = array;
    if(!long) copy[index].goals = [...array[index].goals, goal[0]];
    else  copy[index].longGoal = goal;
    return copy;
}

const removeCard = (array, color) => {
    const result = [];
    let i = 0;
    while (array[i].color !== color) {
      result.push(array[i]);
      i++;
    } 
    return result.concat(array.slice(i + 1));
}

const removeDest = (array, id) => {
    const result = [];
    let i = 0;
    while (array[i].id !== id) {
      result.push(array[i]);
      i++;
    } 
    return result.concat(array.slice(i + 1));
}

const insertConn = (array, index, conn) => {
    let copy = array;
    copy[index].builtConnections = [...array[index].builtConnections, conn];
    return copy;
}

/*
const pickLongGoal = () => {
    const n = Math.floor(Math.random() * (Object.keys(longGoals).length)) + 1;
    const goal = longGoals.filter(e => e.id === n);
    return goal;
}
*/

const initialState = {
    currentPlayer: 0,
    round: 1,
    players: [],
    gameState: "NEW_ROUND", 
    deck: baseDeck(),
    currentCards: [],
    currentDestinations: [],
    hoverObject: {},
    destinations: Object.values(ticketToRideData.destinations),
    longDestinations: Object.values(ticketToRideData.longDestinations),
    roomID: ""
};

export function game(state = initialState, action) {
    let newState = {};

    switch(action.type) {
        case types.ADD_PLAYER:
            return {
                ...state,
                players: [...state.players, {name: action.data.name, picture: action.data.picture, socketID: action.data.socketID, points: 0, trains: 45, cards: [], goals: [], builtConnections: []}]
            };

        case types.DRAW_CARD: 
            newState = {
                ...state,
                deck: removeCard(state.deck, action.color),
                players: insertCard(state.players, state.currentPlayer, {color: action.color, type: "train"}),
            };
            socket.emit('sync-state', state.roomID, {...newState}, false, (syncResponse) => {
                if(syncResponse.status !== 'ok') {
                    console.log(syncResponse.message);
                }
            });
            return newState;

        case types.CHAGE_GAMESTATE: 
            newState = {
                ...state,
                gameState: action.state
            };
            socket.emit('sync-state', state.roomID, {...newState}, false, (syncResponse) => {
                if(syncResponse.status !== 'ok') {
                    console.log(syncResponse.message);
                }
            });
            return newState;

        case types.CHOOSE_DESTINATION:
            newState = {
                ...state,
                destinations: removeDest(state.destinations, action.destinationID),
                players: insertDest(state.players, state.currentPlayer, state.destinations.filter(e => e.id === action.destinationID), false),
            };
            socket.emit('sync-state', state.roomID, {...newState}, false, (syncResponse) => {
                if(syncResponse.status !== 'ok') {
                    console.log(syncResponse.message);
                }
            });
            return newState;

        case types.NEXT_PLAYER:
            let ID = action.next;
            let newRound = state.round;
            if(action.next >= state.players.length) {
                ID = 0;
                newRound = state.round + 1;
            }
            else {
                ID = action.next;
                newRound = state.round;
            }

            newState = {
                ...state,
                round: newRound,
                gameState: "NEW_ROUND",
                currentPlayer: ID,
            };
            socket.emit('sync-state', state.roomID, {...newState}, false, (syncResponse) => {
                if(syncResponse.status !== 'ok') {
                    console.log(syncResponse.message);
                }
            });
            return newState;

        case types.BUILD_CONNECTION:
            newState = {
                ...state,
                players: insertConn(state.players, state.currentPlayer, action.connection)
            };
            socket.emit('sync-state', state.roomID, {...newState}, false, (syncResponse) => {
                if(syncResponse.status !== 'ok') {
                    console.log(syncResponse.message);
                }
            });
            return newState;

        case types.INITIALIZE_STORE:
            const client = state.players.filter(e => e.socketID === socket.id);
            return {
                ...state,
                currentCards: client[0].cards,
                currentDestinations: client[0].goals
            };
        case types.SET_HOVEROBJECT: 
            return {
                ...state,
                hoverObject: action.cities
            };
        case types.UPDATE_STATE:
            return {
                ...state,
                ...action.state,
                roomID: state.roomID
            }
        case types.INITIALIZE_ROOMID: 
            return {
                ...state,
                roomID: action.roomID
            }
        case types.RESET_STORE: 
            return {
                ...initialState
            };
        default:
            return state;
    }
}
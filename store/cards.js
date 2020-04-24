import axios from "axios";

// Constants
// ----------------------------------------------
const URL = "https://deckofcardsapi.com/api/deck";

// Functions
// ----------------------------------------------
function rotateArray(array, idx) {
  let rotatedArray = array;

  // Only rotate if the rotation index isn't the first entry and is contained in the array
  if (idx > 0 && idx <= array.length) {
    const front = array.slice(idx, array.length);
    const back = array.slice(0, idx);
    rotatedArray = front.concat(back);
  }

  return rotatedArray;
}

// State
// ----------------------------------------------
export const state = () => ({
  cardRank: ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"],
  suitRank: ["S", "C", "D", "H"],
  rotationCard: "AS",
  deck: null,
});

// Mutations
// ----------------------------------------------
export const mutations = {
  updateDeck(state, newDeck) {
    state.deck = newDeck;
  },

  updateRotationCard(state, card) {
    state.rotationCard = card;
  },

  rotateCards(state, idx) {
    state.cardRank = rotateArray(state.cardRank, idx);
  },

  rotateSuits(state, idx) {
    state.suitRank = rotateArray(state.suitRank, idx);
  },
};

// Actions
// ----------------------------------------------
export const actions = {
  async createDeck({ commit }, cards) {
    const response = await axios.get(`${URL}/new/shuffle/?cards=${cards}`);
    commit("updateDeck", response.data);
  },

  async drawCards({ commit, state }, num) {
    const response = await axios.get(
      `${URL}/${state.deck.deck_id}/draw/?count=${num}`
    );
    commit("updateDeck", response.data);
  },
};

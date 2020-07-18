import { _addCardToDeck, _getDeck, _getDecks, _saveDeckTitle } from "./data";

export function getInitialData() {
  return Promise.all([_getDecks()]).then(([decks]) => decks);
}

export function getDeckById(id) {
  return _getDeck(id);
}

export function addCardToDeck({ id, question, answer }) {
  return _addCardToDeck({
    id,
    question,
    answer,
  });
}

export function createDeck(title) {
  return _saveDeckTitle(title);
}

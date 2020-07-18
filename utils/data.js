export const decks = {
  "Silicon Valley": {
    title: "Silicon Valley",
    questions: [
      {
        question: "What is the name of the startup company?",
        answer: "Pied Piper",
      },
      {
        question: "Who is the owner?",
        answer: "Richard Hendricks",
      },
    ],
  },
  "Game of Thrones": {
    title: "Game of Thrones",
    questions: [
      {
        question: "How many kingdoms are there in total?",
        answer: "There are seven kingdoms",
      },
      {
        question: "Who is the Jon Snow?",
        answer: "The true hier to the iron throne",
      },
    ],
  },
};

// export const _getDecks = () => {
//   return new Promise((res, rej) => {
//     setTimeout(() => res({ ...decks }), 1000);
//   });
// };

// export const _getDeck = (id) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       if (!decks[id]) rej("No Deck Exist");
//       else res({ ...decks[id] });
//     }, 1000);
//   });
// };

// export const _saveDeckTitle = (title) => {
//   const id = generateUID();
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       decks = {
//         ...decks,
//         [id]: {
//           title,
//           questions: [],
//         },
//       };

//       res({
//         id,
//       });
//     }, 1000);
//   });
// };

// export const _addCardToDeck = ({ id, question, answer }) => {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       decks = {
//         ...decks,
//         [id]: {
//           questions: [
//             ...decks[id].questions,
//             {
//               question,
//               answer,
//             },
//           ],
//         },
//       };

//       res();
//     }, 1000);
//   });
// };

// function generateUID() {
//   return (
//     Math.random().toString(36).substring(2, 15) +
//     Math.random().toString(36).substring(2, 15)
//   );
// }

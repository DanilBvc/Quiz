let questionsArray = [
  {
    title: 'What is the correct command to create a new React project?',
    variants: [
      'npx create-react-app',
      'npm create-react-app myReactApp',
      'npx create-react-app myReactApp',
    ],
    correct: 2,
  },
  {
    title:
      'What does myReactApp refer to in the following command? npx create-react-app myReactApp',
    variants: [
      'The name you want to use for the new app',
      'The type of app to create',
      'The directory to create the new app in',
    ],
    correct: 0,
  },
  {
    title: 'What command is used to start the React local development server?',
    variants: ['npm serve', 'npm start', 'npm run build'],
    correct: 1,
  },
];

export let store = {
  state: {
    questions: [],
  },
  generateRandomQuestions(arrayOfQuestions) {
    function getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    let randNumb = [];
    while (randNumb.length !== arrayOfQuestions.length) {
      let randNum = getRndInteger(0, 3);
      while (randNumb.includes(randNum)) {
        randNum = getRndInteger(0, 3);
      }
      randNumb.push(randNum);
    }
    randNumb.forEach((a) => {
      this.state.questions.push(questionsArray[a]);
    });
  },
};
store.generateRandomQuestions(questionsArray);

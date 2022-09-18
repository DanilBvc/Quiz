import React from 'react';
import { Result } from './state/component/Result/Result';
import { Tasks } from './state/component/Tasks/Tasks';

function App(props) {
  const [step, setStep] = React.useState(0);
  const [correct, setCorrect] = React.useState(0);
  return (
    <div className="App">
      {step !== props.store.state.questions.length ? (
        <Tasks
          step={step}
          setStep={setStep}
          questions={props.store.state.questions}
          correct={correct}
          setCorrect={setCorrect}
        ></Tasks>
      ) : (
        <Result correct={correct}></Result>
      )}
    </div>
  );
}

export default App;

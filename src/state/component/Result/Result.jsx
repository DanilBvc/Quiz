import '../../../index.css';
import './result.css';
export const Result = (props) => {
  return (
    <div className="res__wrapper">
      <h1>Right answers: {props.correct}</h1>
      <a href="/">
        <button>try again</button>
      </a>
    </div>
  );
};

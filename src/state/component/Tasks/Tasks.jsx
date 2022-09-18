import '../../../index.css'
import './tasks.css'
export const Tasks = (props) => {
  const taskClick = (index) => {
    if (index === props.questions[props.step].correct) {
      props.setCorrect(props.correct + 1);
    }
    props.setStep(props.step + 1);
  };
  let tasks = props.questions[props.step].variants.map((task, index) => (
    <li className='tasks__item'
      onClick={() => {
        taskClick(index);
      }}
      key={index}
    >
      {task}
    </li>
  ));
  return (
    <div className="tasks__wrapper">
      {props.questions[props.step].title}
      <div className="tasks">{tasks}</div>
    </div>
  );
};

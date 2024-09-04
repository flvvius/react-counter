import { useState } from "react";

function App() {

  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());

  const decreaseStep = () => {
    setStep(prev => prev - 1);
  }

  const increaseStep = () => {
    setStep(prev => prev + 1);
  }

  const decreaseCount = () => {
    setCount(prev => prev - step)
    setDate(prev => (new Date(prev)).getTime() - step * 86400000)
  }

  const increaseCount = () => {
    setCount(prev => prev + step)
    setDate(prev => (new Date(prev)).getTime() + step * 86400000)

  }

  return (
    <div style={{
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }} >
      <div>
        <button onClick={decreaseStep}>-</button>
        Step: {step}
        <button onClick={increaseStep}>+</button>
      </div>
      <div>
      <button onClick={decreaseCount}>-</button>
        Count: {count}
        <button onClick={increaseCount}>+</button>
      </div>
      {(new Date(date)).getDay() === new Date().getDay() && <p>Today is {(new Date(date)).toDateString()}</p>}
      {(new Date(date)).getDay() < new Date().getDay() && <p>{count} days ago was {(new Date(date)).toDateString()}</p>}
      {(new Date(date)).getDay() > new Date().getDay() && <p>{count} days from today is {(new Date(date)).toDateString()}</p>}
    </div>
  );
}

export default App;

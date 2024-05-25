import { useState } from "react";
import "./styles.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <section>
        <button onClick={increment} className="btn">
          +
        </button>
        <button onClick={decrement} className="btn">
          -
        </button>
      </section>
    </>
  );
}

export default Counter;

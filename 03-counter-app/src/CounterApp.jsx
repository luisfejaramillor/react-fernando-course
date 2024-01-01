import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [count, setCount] = useState(value);

  const handleClick = () => setCount(count + 1);

  const handleReset = () => setCount(value);

  const handleSubtract = () => setCount(count - 1);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>+</button>
      <button aria-label='btn-reset' onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};

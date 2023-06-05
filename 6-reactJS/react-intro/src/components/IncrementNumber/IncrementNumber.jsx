import { useState } from "react";
import "./incrementNumber.css";

const IncrementNumber = () => {
  let [value, setValue] = useState(0);
  // let value = 44;
  const increment = () => {
    // console.log(`Increement button clicked!`);
    // value++;
    // console.log(value);
    // setValue(++value);
    setValue((pre) => {
      return (value = pre + 1);
    });
  };
  return (
    <>
      <h1>{value}</h1>
      <button onClick={increment}>+</button>
      <button style={{ marginLeft: "50px" }}>-</button>
    </>
  );
};

export default IncrementNumber;

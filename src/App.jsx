
import React from "react";
import { useState } from "react";

const App = () => {
  let [count, setCount] = useState(0);

  const AddNum = () => {
    if (count === 20) {
      return 20;
    }
    setCount(count + 1);
  };
  const RemoveNum = () => {
    if (count === 0) {
      return 0;
    }
    setCount(count - 1);
  };
  return (
    <>
      <h1>Counter : {count}</h1>
      <br />
      <button onClick={AddNum}>Add</button>
      <br />
      <br />
      <button onClick={RemoveNum}>Remove</button>
    </>
  );
};

export default App;

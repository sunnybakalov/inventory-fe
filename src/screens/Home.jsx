import React, { useState } from 'react';
import ItemInput from '../components/ItemInput';

const Home = () => {
  const [rows, setRows] = useState([]);
  const [inputs, setInputs] = useState({
    name: '',
    category: '',
    price: '',
    source: '',
    quantity: '',
    comments: '',
    breakeven: '',
    asin: ''
  });

  const handleInput = (e, key) => {
    setInputs({ ...inputs, [key]: e.target.value });
    console.log("INPUTS", inputs)
  };

  const handleSubmit = () => {
    setRows(inputs);
    console.log("ROWS", rows)
  };

  return (
    <>
      <h1>Add New</h1>
      <ItemInput
        handleInput={handleInput}
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
      {rows.length > 0 &&
        <div>
          {rows}
        </div>
      }
    </>
  );
};

export default Home;

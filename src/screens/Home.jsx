import React, { useState } from 'react';
import ItemInput from '../components/ItemInput';
import ItemsTable from '../components/ItemsTable';

const Home = () => {
  const [rows, setRows] = useState([{ name: "hello", category: "asdf", price: "$12.12", source: "walmart", quantity: "4", comments: "Hello my name is", breakeven: "$15.14", asin: "1236345" }]);
  // const [rows, setRows] = useState();
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
    let inventory = [];
    inventory = inventory.push(inputs);
    setRows(inventory);
    console.log("ROWS", rows)
  };

  return (
    <>
      <nav>
        <h1>Inventory</h1>
      </nav>
      <h3>Add New Item</h3>
      <ItemInput
        handleInput={handleInput}
      />
      <button onClick={handleSubmit}>
        Submit
      </button>
      <ItemsTable rows={rows}/>
    </>
  );
};

export default Home;

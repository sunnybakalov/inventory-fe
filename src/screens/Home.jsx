import React, { useState } from 'react';
import ItemInput from '../components/ItemInput';
import ItemsTable from '../components/ItemsTable';

const Home = () => {
  // const [rows, setRows] = useState([
  //   { name: "hello", category: "asdf", price: "$12.12", source: "walmart", quantity: "4", comments: "Hello my name is", breakeven: "$15.14", asin: "1236345" },
  //   { name: "hello", category: "asdf", price: "$12.12", source: "walmart", quantity: "4", comments: "Hello my name is", breakeven: "$15.14", asin: "1236345" },
  //   { name: "hello", category: "asdf", price: "$12.12", source: "walmart", quantity: "4", comments: "Hello my name is", breakeven: "$15.14", asin: "1236345" },
  //   { name: "hello", category: "asdf", price: "$12.12", source: "walmart", quantity: "4", comments: "Hello my name is", breakeven: "$15.14", asin: "1236345" }
  // ]);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    addRow(inputs);
    console.log("ROWS", rows)
  };

  const addRow = (input) => {
    const newRows = [...rows, input];
    setRows(newRows);
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
      <button onClick={e => handleSubmit(e)}>
        Submit
      </button>
      <ItemsTable rows={rows}/>
    </>
  );
};

export default Home;

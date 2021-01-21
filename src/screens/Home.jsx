import React, { useState } from 'react';
import styled from 'styled-components';
import ItemInput from '../components/ItemInput';
import ItemsTable from '../components/ItemsTable';
import { SubmitButton } from '../components/Buttons';

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
  const [errors, setErrors] = useState({});

  const handleInput = (e, key) => {
    setInputs({ ...inputs, [key]: e.target.value });
    console.log("INPUTS", inputs)
  };

  const handleValidation = inputs => {
    const inputErrors = {};
    const numberRegex = /^[0-9\b]+$/;

    if (inputs.name === '') {
      inputErrors.name = 'Please enter an item name.';
    }
    if (inputs.category === '') {
      inputErrors.category = 'Please enter a category.';
    }
    if (inputs.price === '') {
      inputErrors.price = 'Please enter an item price.';
    }
    if (inputs.source === '') {
      inputErrors.source = 'Please enter a source.';
    }
    if (inputs.quantity === '') {
      inputErrors.quantity = 'Please enter a quantity.';
    }

    // if (!inputs.xEmbedId) {
    //   inputErrors.xEmbedId = 'Please enter a Domo Embed ID.';
    // } else if (!domoEmbedIdRegex.test(inputs.xEmbedId)) {
    //   inputErrors.xEmbedId = 'Invalid Domo Embed ID.';
    // }

    // if (!inputs.order) {
    //   inputErrors.order = 'Please enter an order.';
    // } else if (!numberRegex.test(inputs.order)) {
    //   inputErrors.order = 'Invalid order number.';
    // }
    return inputErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputErrors = handleValidation(inputs);
    const hasErrors = Object.keys(inputErrors).length !== 0;

    if (hasErrors) {
      setErrors(inputErrors);
    } else {
      setErrors({});
      addRow(inputs);
    }
    console.log("ERRORS", inputErrors)
    console.log("HAS ERRORS", hasErrors)
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
      <ButtonContainer>
        <SubmitButton onClick={e => handleSubmit(e)}>
          Submit
        </SubmitButton>
      </ButtonContainer>
      <ItemsTable rows={rows}/>
    </>
  );
};

export default Home;

const ButtonContainer = styled.div`
  margin: auto;
  width: 50%;
  text-align: center;
`;
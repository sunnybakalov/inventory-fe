import React, { useState } from 'react';
import styled from 'styled-components';

const ItemInput = () => {
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

  return (
    <InputContainer>
      <p>Name</p>
      <input onChange={e => handleInput(e, 'name')} />
      <p>Category</p>
      <input onChange={e => handleInput(e, 'category')} />
      <p>Price</p>
      <input onChange={e => handleInput(e, 'price')} />
      <p>Source</p>
      <input onChange={e => handleInput(e, 'source')} />
      <p>Quantity</p>
      <input onChange={e => handleInput(e, 'quantity')} />
      <p>Comments</p>
      <input onChange={e => handleInput(e, 'comments')} />
      <p>Breakeven (eBay)</p>
      <input onChange={e => handleInput(e, 'breakeven')} />
      <p>ASIN</p>
      <input onChange={e => handleInput(e, 'asin')} />
    </InputContainer>
  )
};

export default ItemInput;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;
import React from 'react';
import styled from 'styled-components';

const ItemInput = ({ handleInput }) => {

  return (
    <InputContainer>
      <div>
        <p>Name</p>
        <input onChange={e => handleInput(e, 'name')} />
      </div>
      <div>
        <p>Category</p>
        <input onChange={e => handleInput(e, 'category')} />
      </div>
      <div>
        <p>Price</p>
        <input onChange={e => handleInput(e, 'price')} />
      </div>
      <div>
        <p>Source</p>
        <input onChange={e => handleInput(e, 'source')} />
      </div>
      <div>
        <p>Quantity</p>
        <input onChange={e => handleInput(e, 'quantity')} />
      </div>
      <div>
        <p>Comments</p>
        <input onChange={e => handleInput(e, 'comments')} />
      </div>
      <div>
        <p>Breakeven (eBay)</p>
        <input onChange={e => handleInput(e, 'breakeven')} />
      </div>
      <div>
        <p>ASIN</p>
        <input onChange={e => handleInput(e, 'asin')} />
      </div>
    </InputContainer>
  )
};

export default ItemInput;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  margin: auto;

  p {
    margin: 0;
    text-align: center;
  }
`;
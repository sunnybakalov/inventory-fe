import React from 'react';
import styled from 'styled-components';
import { SubmitButton } from '../components/Buttons';

const ItemsTable = ({ errors, handleDelete, handleInput, handleSubmit, rows }) => {
  return (
    <Table>
      <Row>
        <TableHeading>Name</TableHeading>
        <TableHeading>Category</TableHeading>
        <TableHeading>Price</TableHeading>
        <TableHeading>Source</TableHeading>
        <TableHeading>Quantity</TableHeading>
        <TableHeading>Comments</TableHeading>
        <TableHeading>Breakeven</TableHeading>
        <TableHeading>ASIN</TableHeading>
        <TableHeading></TableHeading>
      </Row>
      <Row>
        <TableData>
          <InputDiv>
            <Input
              onChange={e => handleInput(e, 'name')}
              error={ errors.name ? true : false }
            />
            {errors.name &&
              <span>{errors.name}</span>
            }
          </InputDiv>
        </TableData>
        <TableData>
          <InputDiv>
            <Input
              onChange={e => handleInput(e, 'category')}
              error={ errors.category ? true : false }
              />
            {errors.category &&
              <span>{errors.category}</span>
            }
          </InputDiv>
        </TableData>
        <TableData>
          <InputDiv>
            <Input
              onChange={e => handleInput(e, 'price')}
              error={ errors.price ? true : false }
              />
            {errors.price &&
              <span>{errors.price}</span>
            }
          </InputDiv>
        </TableData>
        <TableData>
          <InputDiv>
            <Input
              onChange={e => handleInput(e, 'source')}
              error={ errors.source ? true : false }
            />
            {errors.source &&
              <span>{errors.source}</span>
            }
          </InputDiv>
        </TableData>
        <TableData>
          <InputDiv>
            <Input
              onChange={e => handleInput(e, 'quantity')}
              error={ errors.quantity ? true : false }
            />
            {errors.quantity &&
              <span>{errors.quantity}</span>
            }
          </InputDiv>
        </TableData>
        <TableData>
          <InputDiv>
            <Input onChange={e => handleInput(e, 'comments')} />
          </InputDiv>
        </TableData>
        <TableData>
          <InputDiv>
            <Input onChange={e => handleInput(e, 'breakeven')} />
          </InputDiv>
        </TableData>
        <TableData>
          <InputDiv>
            <Input onChange={e => handleInput(e, 'asin')} />
          </InputDiv>
        </TableData>
        <TableData>
          <SubmitButton onClick={handleSubmit}>
            Submit
          </SubmitButton>
        </TableData>
      </Row>
      {rows ? rows.map(item => {
        return (
          <Row>
            <TableData>{item.name}</TableData>
            <TableData>{item.category}</TableData>
            <TableData>{item.price}</TableData>
            <TableData>{item.source}</TableData>
            <TableData>{item.quantity}</TableData>
            <TableData>{item.comments}</TableData>
            <TableData>{item.breakeven}</TableData>
            <TableData>{item.asin}</TableData>
            <TableData><button onClick={(() => handleDelete(item))}>Delete</button></TableData>
          </Row>
        );
      }) : '' }
    </Table>
  )
};

export default ItemsTable;

const inputBorderColor = props => {
  if (props.error) {
    return '2px solid red';
  }
  return '2px solid #e4e9f0';
};

const Table = styled.table`
  width: 80%;
  margin: auto;
`;

const Row = styled.tr`
  text-align: center;
`;

const TableHeading = styled.th`
  padding: 12px 0;
  text-align: center;
  background-color: #4C76E0;
  color: white;
  border: 1px solid #ddd;
`;

const TableData = styled.td`
  border: 1px solid grey;
`;

const Input = styled.input`
  height: 30px;
  max-width: 150px;
  border: ${props => inputBorderColor(props)};
  border-radius: 4px;
  background-color: #ffffff;

  &:focus {
    outline: 0;
    border-color: #4C76E0;
  }
  &::placeholder {
    color: #333;
  }
`;

const InputDiv = styled.div`
  display: grid;
  margin: 15px;

  span {
    color: red;
    font-style: italic;
    font-size: 10px;
  }
`;

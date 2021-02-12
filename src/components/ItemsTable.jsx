import React, { useState } from 'react';
import { SubmitButton } from '../components/Buttons';
import TableRow from '../components/ItemTableRow';
import {
  Input,
  InputDiv,
  Row,
  Table,
  TableData,
  TableHeading
} from '../components/styles';

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
          <TableRow
            item={item}
            handleDelete={handleDelete}
          />
        );
      }) : '' }
    </Table>
  )
};

export default ItemsTable;

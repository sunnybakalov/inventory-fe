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

const ItemsTable = ({ errors, handleDelete, handleEdit, handleInput, handleSubmit, rows }) => {
  const [edit, setEdit] = useState(false);
  const [disabled, setDisabled]= useState(true);

  const handleedit = item => {
    setDisabled(false);
    setEdit(!edit);
    console.log("ITEM", item)
  };

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
            handleedit={handleedit}
            disabled={disabled}
          />
          // <Row>
          //   <TableData>
          //     <Input
          //       value={item.name}
          //       disabled={disabled}
          //       id="input"
          //     />
          //   </TableData>
          //   <TableData>
          //     <Input
          //       value={item.category}
          //       disabled={disabled}
          //       id="input"
          //     />
          //   </TableData>
          //   <TableData>
          //     <Input
          //       value={item.price}
          //       disabled={disabled}
          //       id="input"
          //     />
          //   </TableData>
          //   <TableData>
          //     <Input
          //       value={item.source}
          //       disabled={disabled}
          //       id="input"
          //     />
          //   </TableData>
          //   <TableData>
          //     <Input
          //       value={item.quantity}
          //       disabled={disabled}
          //       id="input"
          //     />
          //   </TableData>
          //   <TableData>
          //     <Input
          //       value={item.comments}
          //       disabled={disabled}
          //       id="input"
          //     />
          //   </TableData>
          //   <TableData>
          //     <Input
          //       value={item.breakeven}
          //       disabled={disabled}
          //       id="input"
          //     />
          //   </TableData>
          //   <TableData>
          //     <Input
          //       value={item.asin}
          //       disabled={disabled}
          //       id="input"
          //     />
          //   </TableData>
          //   <TableData><button onClick={(() => handleDelete(item))}>Delete</button></TableData>
          //   <TableData><button onClick={(() => handleedit(item))}>Edit</button></TableData>
          // </Row>
        );
      }) : '' }
    </Table>
  )
};

export default ItemsTable;

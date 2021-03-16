import React, { useState } from 'react';
import { Input, Row, Select, TableData } from '../components/styles';
import { updateItem } from '../lib/client';

const TableRow = ({ categories, error, handleDelete, handleUpdate, item }) => {
  const [disabled, setDisabled]= useState(true);
  const [editing, setEditing] = useState(false);

  const handleEdit = item => {
    setDisabled(!disabled);
    setEditing(!editing);
  };

  const handleSubmitUpdatedItem = async (theItem) => {
    await updateItem(theItem);
    setEditing(!editing);
  };

  return (
    <Row>
      <TableData>
        <Input
          value={item.name}
          disabled={disabled}
          id={item.id}
          onChange={e => handleUpdate(e, 'name', item.id)}
          error={ error.name ? true : false }
        />
        </TableData>
        <TableData>
          <Select
            value={item.category}
            disabled={disabled}
            id={item.id}
            onChange={e => handleUpdate(e, 'category', item.id)}
            error={ error.category ? true : false }
          >
            {categories.map(cat => {
              <option>{cat}</option>
            })}
          </Select>
        </TableData>
        <TableData>
          <Input
            value={item.price}
            disabled={disabled}
            id={item.id}
            onChange={e => handleUpdate(e, 'price', item.id)}
            error={ error.price ? true : false }
          />
        </TableData>
        <TableData>
          <Input
            value={item.source}
            disabled={disabled}
            id={item.id}
            onChange={e => handleUpdate(e, 'source', item.id)}
            error={ error.source ? true : false }
          />
        </TableData>
        <TableData>
          <Input
            value={item.quantity}
            disabled={disabled}
            id={item.id}
            onChange={e => handleUpdate(e, 'quantity', item.id)}
            error={ error.quantity ? true : false }
          />
        </TableData>
        <TableData>
          <Input
            value={item.comments}
            disabled={disabled}
            id={item.id}
            onChange={e => handleUpdate(e, 'comments', item.id)}
          />
        </TableData>
        <TableData>
          <Input
            value={item.breakeven}
            disabled={disabled}
            id={item.id}
            onChange={e => handleUpdate(e, 'breakeven', item.id)}
          />
        </TableData>
        <TableData>
          <Input
            value={item.asin}
            disabled={disabled}
            id={item.id}
            onChange={e => handleUpdate(e, 'asin', item.id)}
          />
        </TableData>
        <TableData>
          <button
            onClick={((e) => handleDelete(item.id))}
          >
            Delete
          </button>
        </TableData>
        <TableData>
          {!editing &&
            <button onClick={(() => handleEdit())}>
              Edit
            </button>
          }
          {editing &&
            <button onClick={(() => handleSubmitUpdatedItem(item))}>
              Update
            </button>
          }
        </TableData>
    </Row>
  )
};

export default TableRow;

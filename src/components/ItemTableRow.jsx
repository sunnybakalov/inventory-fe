import React, { useState } from 'react';
import { Input, Row, TableData } from '../components/styles';

const TableRow = ({ handleDelete, item }) => {
  const [disabled, setDisabled]= useState(true);
  const [editing, setEditing] = useState(false);

  const handleEdit = item => {
    setDisabled(false);
    setEditing(!editing);
  };
  return (
    <Row>
      <TableData>
        <Input
          value={item.name}
          disabled={disabled}
          id="input"
        />
        </TableData>
        <TableData>
          <Input
            value={item.category}
            disabled={disabled}
            id="input"
          />
        </TableData>
        <TableData>
          <Input
            value={item.price}
            disabled={disabled}
            id="input"
          />
        </TableData>
        <TableData>
          <Input
            value={item.source}
            disabled={disabled}
            id="input"
          />
        </TableData>
        <TableData>
          <Input
            value={item.quantity}
            disabled={disabled}
            id="input"
          />
        </TableData>
        <TableData>
          <Input
            value={item.comments}
            disabled={disabled}
            id="input"
          />
        </TableData>
        <TableData>
          <Input
            value={item.breakeven}
            disabled={disabled}
            id="input"
          />
        </TableData>
        <TableData>
          <Input
            value={item.asin}
            disabled={disabled}
            id="input"
          />
        </TableData>
        <TableData>
          <button onClick={(() => handleDelete(item))}>
            Delete
          </button>
        </TableData>
        <TableData>
          <button onClick={(() => handleEdit(item))}>
            Edit
          </button>
        </TableData>
    </Row>
  )
};

export default TableRow;

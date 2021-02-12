import React from 'react';
import { Input, Row, TableData } from '../components/styles';

const TableRow = ({ disabled, handleDelete, handleedit, item }) => {
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
          <button onClick={(() => handleedit(item))}>
            Edit
          </button>
        </TableData>
    </Row>
  )
};

export default TableRow;

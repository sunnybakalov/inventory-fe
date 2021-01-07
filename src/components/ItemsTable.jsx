import React from 'react';

const ItemsTable = (props) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Category</th>
        <th>Price</th>
        <th>Source</th>
        <th>Quantity</th>
        <th>Comments</th>
        <th>Breakeven</th>
        <th>ASIN</th>
      </tr>
      {props.rows.map(item => {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>{item.source}</td>
            <td>{item.quantity}</td>
            <td>{item.comments}</td>
            <td>{item.breakeven}</td>
            <td>{item.asin}</td>
          </tr>
        );
      })}
    </table>
  )
};

export default ItemsTable;

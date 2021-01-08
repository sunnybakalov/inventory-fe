import React from 'react';
import styled from 'styled-components';

const ItemsTable = (props) => {
  return (
    <Table>
      {props.rows.length > 0 &&
        <Row>
          <TableHeading>Name</TableHeading>
          <TableHeading>Category</TableHeading>
          <TableHeading>Price</TableHeading>
          <TableHeading>Source</TableHeading>
          <TableHeading>Quantity</TableHeading>
          <TableHeading>Comments</TableHeading>
          <TableHeading>Breakeven</TableHeading>
          <TableHeading>ASIN</TableHeading>
        </Row>
      }
      {props.rows ? props.rows.map(item => {
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
          </Row>
        );
      }) : '' }
    </Table>
  )
};

export default ItemsTable;

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

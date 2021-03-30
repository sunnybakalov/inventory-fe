import styled from 'styled-components';

export const inputBorderColor = props => {
  if (props.error) {
    return '2px solid red';
  }
  return '2px solid #e4e9f0';
};

export const buttonColor = props => {
  if (props.status === 'delete') {
    return '#E73E51';
  } else if (props.status === 'submit') {
    return '#00e676';
  }
  return '#2196f3';
};

export const Table = styled.table`
  // width: 80%;
  margin: auto;
`;

export const Row = styled.tr`
  text-align: center;
`;

export const TableHeading = styled.th`
  padding: 12px 0;
  text-align: center;
  background-color: #2196f3;
  color: white;
  border: 1px solid #ddd;
`;

export const TableData = styled.td`
  border: 1px solid grey;
  padding: 4px;
`;

export const Input = styled.input`
  height: 30px;
  // max-width: 150px;
  border: ${props => inputBorderColor(props)};
  border-radius: 4px;
  background-color: #ffffff;

  &:focus {
    outline: 0;
    border-color: #2196f3;
  }
  &::placeholder {
    color: #333;
  }
`;

export const InputDiv = styled.div`
  display: grid;
  margin: 15px;

  span {
    color: red;
    font-style: italic;
    font-size: 10px;
  }
`;

export const Select = styled.select`
  height: 30px;
  max-width: 150px;
  border: ${props => inputBorderColor(props)};
  border-radius: 4px;
  background-color: #ffffff;
  
  &:focus {
    outline: 0;
    border-color: #2196f3;
  }
  &::placeholder {
    color: #333;
  }
`;

export const Button = styled.button`
  height: 30px;
  width: 80px;
  background-color: ${props => buttonColor(props)};
  color: white;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 14px;
`;

export const Heading = styled.h1`
  font-size: xxx-large;
  font-family: monospace;
  text-align: center;
`;

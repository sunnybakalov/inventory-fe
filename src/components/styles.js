import styled from 'styled-components';

export const inputBorderColor = props => {
  if (props.error) {
    return '2px solid red';
  }
  return '2px solid #e4e9f0';
};

export const Table = styled.table`
  width: 80%;
  margin: auto;
`;

export const Row = styled.tr`
  text-align: center;
`;

export const TableHeading = styled.th`
  padding: 12px 0;
  text-align: center;
  background-color: #4C76E0;
  color: white;
  border: 1px solid #ddd;
`;

export const TableData = styled.td`
  border: 1px solid grey;
`;

export const Input = styled.input`
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
    border-color: #4C76E0;
  }
  &::placeholder {
    color: #333;
  }
`;

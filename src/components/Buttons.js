import styled from 'styled-components';

export const SubmitButton = styled.button`
  background-color: #8996A0;
  cursor: pointer;
  align-items: center;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  outline: none;
  font-weight: 600;
  line-height: 1;
  height: 30px;
  min-width: 90px;
  display: inline;
  margin: 10px 0;
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  color: white;
  &:hover, &:focus {
    background-color: #626562;
  }
`;
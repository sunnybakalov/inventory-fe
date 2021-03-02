import React, { useState } from 'react';
import ItemsTable from '../components/ItemsTable';
import { fetchAll } from '../lib/client';

const Home = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      name: 'hello',
      category: 'asdf',
      price: '$12.12',
      source: 'walmart',
      quantity: '4',
      comments: 'Hello my name is',
      breakeven: '$15.14',
      asin: '1236345',
    },
    {
      id: 2,
      name: 'world',
      category: 'asdf',
      price: '$12.12',
      source: 'walmart',
      quantity: '4',
      comments: 'Hello my name is',
      breakeven: '$15.14',
      asin: '1236345',
    },
    {
      id: 3,
      name: 'my',
      category: 'asdf',
      price: '$12.12',
      source: 'walmart',
      quantity: '4',
      comments: 'Hello my name is',
      breakeven: '$15.14',
      asin: '1236345',
    },
    {
      id: 4,
      name: 'name',
      category: 'asdf',
      price: '$12.12',
      source: 'walmart',
      quantity: '4',
      comments: 'Hello my name is',
      breakeven: '$15.14',
      asin: '1236345',
    },
  ]);
  const [inputs, setInputs] = useState({
    name: '',
    category: '',
    price: '',
    source: '',
    quantity: '',
    comments: '',
    breakeven: '',
    asin: '',
  });
  const [errors, setErrors] = useState({});

  async function getAll() {
    return await fetchAll();
  };

  const handleInput = (e, key) => {
    setInputs({ ...inputs, [key]: e.target.value });
  };

  const handleUpdate = (e, key, id) => {
    let newRows = Array.from(rows);

    const newData = newRows.map(row => {
      if (row.id !== id) {
        return row;
      }

      return { ...row, [key]: e.target.value };
    });

    setRows(newData)
  };

  const handleValidation = (inputs) => {
    const numberRegex = /^[0-9\b]+$/;
    const inputErrors = {};

    if (!inputs.name) {
      inputErrors.name = 'Please enter an item name.';
    }
    if (!inputs.category) {
      inputErrors.category = 'Please enter a category.';
    }
    if (!inputs.price) {
      inputErrors.price = 'Please enter an item price.';
    }
    if (!inputs.source) {
      inputErrors.source = 'Please enter a source.';
    }
    if (!inputs.quantity) {
      inputErrors.quantity = 'Please enter a quantity.';
    } else if (!numberRegex.test(inputs.quantity)) {
      inputErrors.quantity = 'Invalid quantity.';
    }
    return inputErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputErrors = handleValidation(inputs);
    const hasErrors = Object.keys(inputErrors).length !== 0;

    console.log('INPUT ERRORS', inputErrors);
    if (hasErrors) {
      setErrors(inputErrors);
    } else {
      setErrors({
        name: '',
        category: '',
        price: '',
        source: '',
        quantity: '',
      });
      addRow(inputs);
      setInputs({
        name: '',
        category: '',
        price: '',
        source: '',
        quantity: '',
        comments: '',
        breakeven: '',
        asin: '',
      });
    }
  };

  const handleDelete = (item) => {
    const filtered = rows.filter((row) => row.id !== item.id);
    setRows(filtered);
  };

  const addRow = (input) => {
    const newRows = [...rows, input];
    setRows(newRows);
  };

  return (
    <>
      <nav>
        <h1>Inventory</h1>
      </nav>
      <h3>Add New Item</h3>
      {getAll()}
      <ItemsTable
        rows={rows}
        handleInput={handleInput}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        errors={errors}
      />
    </>
  );
};

export default Home;

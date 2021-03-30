import React, { useEffect, useState } from 'react';
import ItemsTable from '../components/ItemsTable';
import { createItem, deleteItem, fetchAll, fetchCategories } from '../lib/client';
import { Heading } from '../components/styles';

const Home = () => {
  const [rows, setRows] = useState([]);
  const [categories, setCategories] = useState([]);
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

  useEffect(() => {
    async function fetch() {
      return await fetchAll();
    }
    fetch().then((res) => {
      let sorted = res.sort((item1, item2) => {
        return item1.category > item2.category ? 1 : -1
      });
      setRows(sorted);
    });
  }, []);

  useEffect(() => {
    async function fetch() {
      return await fetchCategories();
    }
    fetch().then((res) => {
      const categoryNames = res.map(cat => cat.name)
      setCategories(categoryNames);
    });
  }, []);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputErrors = handleValidation(inputs);
    const hasErrors = Object.keys(inputErrors).length !== 0;

    if (hasErrors) {
      setErrors(inputErrors);
    } else {
      setErrors({
        name: '',
        price: '',
        source: '',
        quantity: '',
      });
      addRow(inputs);
      await createItem(inputs);
      setInputs({
      });
    }
  };

  const handleDelete = async (id) => {
    const del = await deleteItem(id);
    const filtered = rows.filter((row) => row.id !== id);
    setRows(filtered);
  };

  const addRow = (input) => {
    const newRows = [...rows, input];
    setRows(newRows);
  };

  return (
    <>
      <nav>
        <Heading>Inventory Management</Heading>
      </nav> 
      <ItemsTable
        categories={categories}
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

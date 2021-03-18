const API_HOST = 'http://localhost:4005';
const API_KEY = process.env.API_KEY;

const getHeaders = () => ({
  // Authorization: API_KEY,
  'Content-Type': 'application/json'
})

const get = async (endpoint) => {
  try {
    const response = await fetch(`${API_HOST}/api${endpoint}`, {
      method: 'GET',
      'Content-Type': 'application/json'
    });
    return response.json();
  } catch (err) {
    return err;
  }
};

const post = async (endpoint, payload) => {
  console.log("POSTendpoint", endpoint)
  console.log("POSTitem", payload)
  try {
    const response = await fetch(`${API_HOST}/api${endpoint}`, {
      method: 'POST',
      headers: getHeaders(),
      body: JSON.stringify(payload)
    });
    return response.json();
  } catch (err) {
    return err;
  }
}

export const fetchAll = async () => {
  try {
    const response = await get('/fetch-all');
    return response;
  } catch (err) {
    return { error: err };
  };
};

export const fetchCategories = async () => {
  try {
    const response = await get('/fetch-categories');
    console.log("CATEGORIES", response)
    return response;
  } catch (err) {
    return { error: err };
  };
};

export const createItem = async (item) => {
  try {
    console.log("ITEM", item)
    const response = await post('/create-item', item);
    return response;
  } catch (err) {
    return { error: err }
  };
};

export const updateItem = async (item) => {
  try {
    console.log("ITEM", item)
    const response = await post('/update-item', item);
    return response;
  } catch (err) {
    return { error: err }
  };
};

export const deleteItem = async (id) => {
  try {
    const response = await post('/delete-item', { id });
    return response;
  } catch (err) {
    return { error: err }
  };
};

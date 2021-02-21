const API_HOST = 'http://localhost:4000';

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

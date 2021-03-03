const API_HOST = 'http://localhost:4005';

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

export const fetchAll = async () => {
  try {
    const response = await get('/fetch-all');
    return response;
  } catch (err) {
    return { error: err };
  };
};

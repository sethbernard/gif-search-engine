const BASE_URL = 'https://api.giphy.com/';
const API_KEY = process.env.REACT_APP_API_KEY;

const buildUrl = (endpoint, params) => {
  const paramsAsString = Object.entries(params)
    .map(value => {
      return `${value[0]}=${value[1]}`;
    })
    .join('&');
  return `${BASE_URL}${endpoint}?${paramsAsString}&api_key=${API_KEY}`;
};

const apiSearch = async (endpoint, params) => {
  const url = buildUrl(endpoint, params);

  try {
    const response = await fetch(url);
    const info = await response.json();
    return info.data;
  } catch (error) {
    return console.error(error);
  }
};

export { apiSearch };

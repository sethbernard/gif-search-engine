const apiSearch = url => {
  return fetch(url)
    .then(response => response.json())
    .then(info => info.data)
    .catch(error => console.error(error));
};

export { apiSearch };

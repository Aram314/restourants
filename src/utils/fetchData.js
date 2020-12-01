const cache = new Map();

function fetchData(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url));
  } else {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        cache.set(url, data);
        return data;
      });
  }
}

export default fetchData

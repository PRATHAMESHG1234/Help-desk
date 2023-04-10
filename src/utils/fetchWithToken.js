export const fetchWithToken = (url, method, token, body) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers['x-auth-token'] = token;
  }

  const options = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }
  return fetch(url, options).then((response) => {
    return response.json();
  });
};
export default fetchWithToken;

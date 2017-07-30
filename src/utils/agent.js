const API_ROOT = 'https://public.je-apis.com/restaurants';

const responseJSON = res => res.json();

const headers = new Headers({
  'Accept-Tenant': 'uk',
  'Accept-Language': 'en-GB',
  Authorization: 'Basic VGVjaFRlc3RBUEk6dXNlcjI=',
  Host: 'public.je-apis.com'
});

const getRestaurants = query => {
  return fetch(`${API_ROOT}?q=${query}`, { headers: headers })
    .then(checkStatus)
    .then(responseJSON);
};

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  console.log(error);
  throw error;
}

export default {
  getRestaurants
};

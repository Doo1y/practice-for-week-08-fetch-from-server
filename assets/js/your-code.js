export function getAllDogs() {
  const url = '/dogs';
  const headers = { 'Content-Type': 'html/text' };
  let body;
  
  const options = {
    method: 'GET',
    headers: headers,
    body: body
  };

  return fetch(url, options);
};

export function getDogNumberTwo() {
    const url = '/dogs/2'
    const headers = {'Content-Type': 'html/text'};
    let body;

    const options = {
      method: 'GET',
      headers: headers,
      body: body
    };

    return fetch(url, options);
};

export function postNewDog() {
  const url = '/dogs';
  const headers = { 'Location': `application/x-www-form-urlencoded` };
  let body = new URLSearchParams({
    name: 'opal',
    age: 4
  });

  const options = {
    method: 'POST',
    headers: headers,
    body: body
  }

  return fetch(url, options)
};

export function postNewDogV2(name, age) {
  const url = '/dogs';
  const headers = { 'Location': `application/x-www-form-urlencoded` };
  let body = new URLSearchParams({
    name: name,
    age: age
  });

  const options = {
    method: 'POST',
    headers: headers,
    body: body
  }

  return fetch(url, options)
};

export function deleteDog(id) {
  const url = `/dogs/${id}/delete`;
  const headers = { 'AUTH': 'ckyut5wau0000jyv5bsrud90y' };
  let body = new URLSearchParams({
    name: id.name,
    age: id.age
  })

  const options = {
    method: 'POST',
    headers: headers,
    body: body
  }

  return fetch(url, options);
}

// const url = "/endpoint";
// const headers = { "Content-Type": "Request body's Content-Type" };
// // Use the URLSearchParams API to format your body as shown below
// const body = new URLSearchParams({
//   key: "value"
// });

// const options = {
//   method: "GET|POST|PUT|DELETE",
//   headers: headers,
//   body: body
// };

// fetch(url, options);

import axios from 'axios';

export const getTasks = (userId) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
    .then(response => response.data)
    .catch(error => { throw error; });
};

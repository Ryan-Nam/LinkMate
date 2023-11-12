import axios from 'axios';

export async function search(keyword) {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      //   console.log(response);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data || error.message);
    }
  };

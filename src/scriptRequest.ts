import axios from "axios";

const sendPostRequest = async( url:string, data: {} ) => {
    await axios.post(url, data);
}

export const executeRequests = async () => {
    const url = 'http://localhost:3000/api';
    const data = { 
        first_input: 'A',
        second_input: "B"
     };

    // Modifique este numero para indicar el nro de request que quiere realizar.
    const numberOfRequests = 10;
  
    for (let i = 0; i < numberOfRequests; i++) {
      await sendPostRequest(url, data);
    }
  }
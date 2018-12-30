import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID f3eda5b677385a8a1428720d8f2299c9d6ffe801418cbec142eb1bd040654588'
    }
})
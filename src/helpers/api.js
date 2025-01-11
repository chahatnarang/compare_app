import axios from 'axios';

const movieList = axios.create({
    baseURL: 'https://localhost:7238',
});

export default movieList;
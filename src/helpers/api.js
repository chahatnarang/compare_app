import axios from 'axios';

const movieList = axios.create({
    baseURL: 'https://compare-c5gdahcsgeehfjde.australiaeast-01.azurewebsites.net',
});

export default movieList;
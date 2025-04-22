import axios from "axios";

const CostumAxios = axios.create({
    baseURL: 'http://localhost:3001',
});

export default CostumAxios;
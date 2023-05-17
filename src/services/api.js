import axios from "axios";

const api = axios.create({
    baseURL: "https://extranet.cebraspe.org.br/",
});

export default api;
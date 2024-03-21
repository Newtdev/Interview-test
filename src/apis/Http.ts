import axios from "axios";
const Http = axios.create({
  baseURL: process.env.REACT_APP_KREXT_BASE_URL,
});

export default Http;

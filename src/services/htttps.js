import axios from "axios";

// import axios from "axios";

const baseURL = "https://fe21-db.vercel.app";
const httpsRequre = axios.create({
  baseURL: baseURL,
});

export default httpsRequre;

import axios from "axios";
import { Config } from "config/constants";

const axiosRequestConfiguration = {
  baseURL: Config.API_URL,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache",
  },
};

const APICall = axios.create(axiosRequestConfiguration);

export default APICall;

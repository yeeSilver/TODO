import axios from "axios";
import { baseURL } from "../constants/axios/axios";
import { ACCESS_TOKEN_KEY, REQUEST_KEY } from "../constants/token";
import token from "./localStorage";

//axios instance 생성
export const api = axios.create({ baseURL });
export const todoAxios = axios.create({
  baseURL: baseURL,
  headers: { [REQUEST_KEY]: token.getToken(ACCESS_TOKEN_KEY) },
});

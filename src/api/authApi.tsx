import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { baseURL } from "../constants/api";

//axios instance 생성
export const apiRequest = axios.create({ baseURL });

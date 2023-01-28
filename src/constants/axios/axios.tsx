import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { config } from "process";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/instance";
import token from "../../utils/localStorage";
import { ACCESS_TOKEN_KEY, REQUEST_KEY } from "../token";
//인터셉터 : 통신이 모종이 이유로 실패할 경우 재시도할 수 있게 설정.
//인터셉터 관리자에 핸들러 등록하면 인스턴스가 요청 보내기 직전, 응답을 받은 직후에 핸들러를 실행

export const baseURL: string = process.env.REACT_APP_BASE_URL as string;

interface IIntError {
  details: string;
}

//요청 타임아웃 설정
api.defaults.timeout = 2500;

//요청 인터셉터 추가
api.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    config.headers = config.headers ?? {};
    //요청을 보내기 전에 수행할 로직
    const accessToken = token.getToken(ACCESS_TOKEN_KEY);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  (error) => {
    //요청 에러가 발생했을 때 수행할 로직
    console.log(error); //디버깅
    return Promise.reject(error);
  }
);

//응답 인터셉터 추가
api.interceptors.response.use(
  (response: AxiosResponse) => {
    //응답에 대한 로직 작성
    const res = response.data;
    return res;
  },

  (error: AxiosError<IIntError>) => {
    //응답 에러가 발생했을 때 수행할 로직
    // const isTokenAvaliable = error.response?.data.details === "Token is missing"
    console.log(error); //디버깅
    alert("토큰이 유효하지 않아, 로그인 페이지로 돌아갑니다.");
    const navigate = useNavigate();
    navigate(`/auth`);
    return Promise.reject(error);
  }
);

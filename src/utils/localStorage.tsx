import { ACCESS_TOKEN_KEY } from "../constants/token";

class Token {
  public getToken(key: string): string | null {
    return localStorage.getItem(key); //key item 값 받아옴
  }

  public setToken(key: string, token: any) {
    localStorage.setItem(key, token); //key item 보관
  }

  public clearToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }
}

export default new Token();

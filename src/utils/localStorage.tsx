import { ACCESS_TOKEN_KEY, USERNAME } from "../constants/token";

class Token {
  public getToken(key: string): string | null {
    return localStorage.getItem(key); //key item 값 받아옴
  }

  public setToken(key: string, token: string) {
    localStorage.setItem(key, token); //key item 보관
  }

  public clearToken() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
  }

  public getUsername(key: string): string | null {
    return localStorage.getItem(key);
  }

  public setUsername(key: string, username: string) {
    localStorage.setItem(key, username); //key item 보관
  }

  public clearUsername() {
    localStorage.removeItem(USERNAME);
  }
}

export default new Token();

export const setLocalStorage = (key: string, item: any) => {
  localStorage.setItem(key, item); //key item 보관
};

export const getLocalStorage = (key: string) => {
  return localStorage.getItem(key); //key item 값 받아옴
};

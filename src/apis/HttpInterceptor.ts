import { store } from "store/store";
import { logoutAction } from "store/StoreActions";
import Http from "./Http";
Http.interceptors.request.use((config) => {
  const token = store.getState().global.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
Http.interceptors.response.use(undefined, (error) => {
  console.log("first", error);
  if (error.response.status === 401) {
    store.dispatch(logoutAction());
  }
  return Promise.reject(error);
});

// import Router from "next/router";
import axios from "axios";

export const createAxiosInstance = (
  customConfig = {},
  { hasAuthToken = true } = {},
) => {
  const defaultConfig = {};
  const axiosIns = axios.create({ ...defaultConfig, ...customConfig });

  // request interceptor
  if (hasAuthToken) {
    axiosIns.interceptors.request.use(
      (config) => {
        const token = window.localStorage.getItem("token");

        if (token) {
          config.headers = { Authorization: JSON.parse(itemToken), };
        }

        return config;
      },
      (error) => Promise.reject(error),
    );
  }

  // response interceptor
  axiosIns.interceptors.response.use(
    (response) => {
      // const resp = { ...response };
      return response.data;
    },
    (error) => {
      // const err = { ...error };
      return Promise.reject(error.response.data);
    }
  );

  return axiosIns;
}

const getAxiosIns = (baseURL, hasAuthToken = true) => {
  return createAxiosInstance({ baseURL, }, { hasAuthToken });
}

export default getAxiosIns;

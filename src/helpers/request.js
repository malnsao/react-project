import axios from "axios";
import { Toast } from "@/components/Ui";

let isRefreshing = false;
// 重试队列，每一项将是一个待执行的函数形式
let requests = [];
// 创建一个axios实例
const instance = axios.create({
  baseURL: "/api",
  timeout: 300000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.setToken = (access_token) => {
  instance.defaults.headers["Authorization"] = access_token;
};

instance.interceptors.request.use((config) => {
  if (config.isCurrency) {
    config.url = `${config.url}/${localStorage.getItem("currency")}`;
  }
  if (localStorage.getItem("access_token"))
    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "access_token",
    )}`;

  return config;
});

// 拦截返回的数据
instance.interceptors.response.use(
  (response) => {
    // if (response?.data?.code && response?.data?.code !== 20000) {
    //   Toast.info(intl.$t({ id: `Error_${response.data.code}` }));
    //   throw Error(response?.data);
    // }
    return response.data.data;
  },
  (error) => {
    if (error.response.status === 401) {
      const config = error.response.config;
      // if (!isRefreshing) {
      // isRefreshing = true;
      return refreshToken()
        .then((res) => {
          instance.setToken(res.data.access_token);
          localStorage.setItem("refresh_token", res.data.refresh_token);
          localStorage.setItem("access_token", res.data.access_token);
          config.headers["Authorization"] = `Bearer ${res.data.access_token}`;
          config.baseURL = "";
          // requests.forEach((cb) => cb(res.data.access_token));
          // requests = [];
          return instance(config);
        })
        .catch((res) => {
          console.error("refreshtoken error =>", res);
        });
      // .finally(() => {
      //   isRefreshing = false;
      // });
      // } else {
      // return new Promise((resolve) => {
      //   requests.push((access_token) => {
      //     config.baseURL = "";
      //     config.headers["Authorization"] = `Bearer ${access_token}`;
      //     config.headers["Content-Type"] = "application/json";
      //     console.log(config, 999999999);
      //     resolve(instance(config));
      //   });
      // });
      // }
    }

    return Promise.reject(error);
  },
);

export default (
  url,
  params = {},
  method = "GET",
  _headers = {},
  isCurrency = false,
) => {
  if (method === "POST") {
    return instance({
      url,
      data: params,
      method,
      _headers,
      isCurrency,
    });
  }
  return instance({ url, params, method, _headers, isCurrency });
};

function refreshToken() {
  return axios.post(
    `/api/oauth/token?currency=${localStorage.getItem("currency")}`,
    {
      client_id: "T1SBE-player",
      client_secret: "T1SBE-rocks",
      grant_type: "refresh_token",
      refresh_token: localStorage.getItem("refresh_token"),
    },
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    },
  );
}

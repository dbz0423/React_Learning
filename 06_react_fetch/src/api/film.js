import axios from "axios";

const request_film = axios.create({
  baseURL: "https://apis.tianapi.com",
  timeout: 5000,
});

export const getFilms = (params) => {
  return request_film({
    method: "get",
    url: "/film/index",
    params: {
      ...params,
      // key: "fa98a5ae81f45b1da40e660b8220a32d",
      key: "73cc2df513ef9bad40bcc55b9e8c68c3",
    },
  });
};

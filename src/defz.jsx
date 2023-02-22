import axios from "axios";

export const mainAddress = "https://laboratory-usa.iran.liara.run";

export const axiosApi = async (url, body, token) => {
  let lastResult;
  if (body) {
    await axios(`${mainAddress}/${url}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Auth-token": token,
        "auth-token": token,
      },
      data: body,
    })
      .then((response) => (lastResult = response))
      .catch((err) => (lastResult = err));
  } else {
    await axios(`${mainAddress}/${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Auth-token": token,
        "auth-token": token,
      },
    })
      .then((response) => (lastResult = response))
      .catch((err) => (lastResult = err));
  }
  return lastResult;
};

import axios from "axios";

export const mainAddress = "https://laboratory-usa.iran.liara.run";

export const axiosApi = async (url, body, token) => {
  let lastResult;
  if (body) {
    await axios(`${mainAddress}/${url}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
            "Auth-Token": token
        },
        data: body,
      })
      .then((response) => (lastResult = response))
      .catch((err) => (lastResult = err));
  } else {
    await axios(`${mainAddress}/${url}`, {
      method: "GET",
      headers: {
        "Auth-Token": token,
      },
    })
      .then((response) => (lastResult = response))
      .catch((err) => (lastResult = err));
  }
  return lastResult;
};

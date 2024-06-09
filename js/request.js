import { loading } from "./loading.js";

export const getData = async (url) => {
  try {
    loading(true);
    const request = await fetch(url);
    if (!request.ok) {
      throw new Error("Something went wrong :(");
    }
    const response = await request.json();
    loading(false);
    return response;
  } catch (error) {
    loading(false);
    console.log(error.message);
    return null;
  }
};

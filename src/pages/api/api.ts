import { BASE_URL } from "@/config";
import XHR from "@/utils/XHR";

export const loadImagesAPI = (data: any) => {
  let param = data?.length ? `?tags=${data}` : "";
  let URL = `${BASE_URL}/images${param}`;
  const options = {
    method: "GET",
  };

  return XHR(URL, options);
};

export const deleteImagesAPI = (id: any) => {
  let URL = `${BASE_URL}/images/${id}`;
  const options = {
    method: "DELETE",
  };

  return XHR(URL, options);
};

export const imageUpdateAPI = (id: number, payload: any) => {
  let URL = `${BASE_URL}/images/${id}`;
  const options = {
    method: "PATCH",
    data: payload,
  };

  return XHR(URL, options);
};

export const uploadNewImageAPI = (payload: any) => {
  let URL = `${BASE_URL}/images/`;
  const options = {
    method: "POST",
    data: payload,
  };

  return XHR(URL, options);
};

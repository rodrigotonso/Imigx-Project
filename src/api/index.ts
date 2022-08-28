import { Imigx } from "src/interfaces/Imigx";
import { AxiosResponse } from "axios";
import axiosHelper, { axiosError, axiosResponse } from "../utils/axiosHelper";
import AxiosBase from "./config";
//"http://127.0.0.1:5173/server/imgix-samples-list.json"

export const getImages = async (): Promise<
  axiosResponse<Imigx[]> | axiosError
> => {
  let response: AxiosResponse;
  let result;
  try {
    response = await AxiosBase.get(`/server/imgix-samples-list.json`);
    result = axiosHelper.handleResponse(response);
  } catch (err: any) {
    result = axiosHelper.handleError(err);
  }
  return result;
};
import axios from "axios";
import { API_TIMEOUT, BASE_URL } from "./constants/global.constants";
import type { Language } from "../types/global.types";

const harryPotterApiClient = axios.create({
  baseURL: BASE_URL,
  timeout: API_TIMEOUT,
});

async function fetcher<T>(endpoint: string, lang: Language = "en"): Promise<T> {
  try {
    const response = await harryPotterApiClient.get<T>(`${lang}/${endpoint}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("API Error:", error.response?.status, error.message);
    } else {
      console.error("Unknown Error:", error);
    }
    throw error;
  }
}

export { fetcher, harryPotterApiClient };

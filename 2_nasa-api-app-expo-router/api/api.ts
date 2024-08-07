import defData from "../model/mockData";
import { NASAData } from "../model/NASAData";
import api_key from "../apiKey";

const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const api = {
  getAllMockData: async (): Promise<NASAData[]> => {
    await sleep(750);
    return defData;
  },
  getAll: async (): Promise<NASAData[]> => {
    try {
      const date = new Date();
      const todayDate = formatDate(date);
      const since5DaysDate = new Date();
      since5DaysDate.setDate(date.getDate() - 5);
      const sSince5DaysDate = formatDate(since5DaysDate);

      const URL = `https://api.nasa.gov/planetary/apod?api_key=${api_key}`;
      const request = await fetch(
        `${URL}&start_date=${sSince5DaysDate}&end_date=${todayDate}`,
      );
      if (!request.ok) throw new Error();

      return request.json();
    } catch (error) {
      return [];
    }
  }
};

export default api;

// src/services/weatherApi.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_KEY = "da6cb31951624d861e8e8b91c44ac011";

export const weatherApi = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.openweathermap.org/data/2.5/",
  }),
  endpoints: (builder) => ({
    getWeatherByCity: builder.query({
      query: (city) => `weather?q=${city}&appid=${API_KEY}&units=metric`,
    }),
  }),
});
// creating hook to use on the ui.
export const { useGetWeatherByCityQuery } = weatherApi;

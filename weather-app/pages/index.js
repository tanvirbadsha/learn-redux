import { useState } from "react";
import { useGetWeatherByCityQuery } from "../src/services/weatherApi";

export default function Home() {
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("California");
  const { data, error, isLoading } = useGetWeatherByCityQuery(searchCity);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(data);
    if (city.trim() !== "") {
      setSearchCity(city);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-400 to-indigo-600">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Weather App</h1>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="flex flex-col items-center gap-4"
        >
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
          >
            Search
          </button>
        </form>

        {/* Weather Data */}
        <div className="mt-6">
          {isLoading && <p className="text-gray-600">Loading...</p>}
          {error && <p className="text-red-500">Error fetching data.</p>}
          {data && (
            <div className="mt-4 p-4 bg-gray-100 rounded-md shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800">
                {data.name}
              </h2>
              <p className="text-lg text-gray-600">
                Temperature:{" "}
                <span className="font-bold">{data.main.temp}°C</span>
              </p>
              <p className="text-lg text-gray-600">
                Feels Like:{" "}
                <span className="font-bold">{data.main.feels_like}°C</span>
              </p>
              <p className="text-lg text-gray-600">
                Humidity:{" "}
                <span className="font-bold">{data.main.humidity}%</span>
              </p>
              <p className="text-lg text-gray-600">
                Weather:{" "}
                <span className="font-bold capitalize">
                  {data.weather[0].description}
                </span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

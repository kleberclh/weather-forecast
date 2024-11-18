import axios from "axios";

// URL base da API OpenWeatherMap para consultar o tempo
const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const KEY = "5b42af90f7416dbbd5e04525c617fec7"; 

const api = axios.create({
  baseURL: API_URL,
});

export async function getWeather(city) {
  try {
    const response = await api.get("", {
      params: {
        q: city,
        appid: KEY,
        units: "metric", 
        lang: "pt", 
      },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar clima:", error);
    throw error;
  }
}

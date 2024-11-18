import { useState } from "react";
import { Search } from "../icons/Search";
import Dados from "./Dados";
import { getWeather } from "../config/api"; // Função que faz a requisição para a API

export default function Menu() {
  const [city, setCity] = useState(""); // Armazena o nome da cidade
  const [weatherData, setWeatherData] = useState(null); // Armazena os dados do clima
  const [loading, setLoading] = useState(false); // Estado para controle de carregamento

  const handleSearch = async (event) => {
    event.preventDefault();
    setLoading(true); // Inicia o carregamento
    try {
      const data = await getWeather(city); // Obtém os dados do clima
      setWeatherData(data); // Atualiza o estado com os dados recebidos
    } catch (error) {
      console.error("Erro ao buscar o clima:", error);
    } finally {
      setLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 text-white ">
      <h3 className="text-2xl font-semibold mb-6">
        Confira o clima de uma cidade:
      </h3>
      <div className="w-full max-w-md">
        <form
          className="flex items-center space-x-2 bg-white rounded-lg shadow-lg p-4"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Digite o nome da cidade"
            className="flex-1 border-none outline-none text-gray-700 placeholder-gray-400 p-2 rounded-md focus:ring-2 focus:ring-blue-500"
            value={city}
            onChange={(e) => setCity(e.target.value)} // Atualiza o valor da cidade
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md flex items-center justify-center transition duration-300"
          >
            <Search />
          </button>
        </form>
        {loading ? (
          <p className="text-white mt-4">Carregando...</p>
        ) : (
          weatherData && <Dados weather={weatherData} />
        )}
      </div>
    </div>
  );
}
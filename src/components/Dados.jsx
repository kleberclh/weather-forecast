/* eslint-disable react/prop-types */
import { DropLet } from "../icons/DropLet";
import { Pin } from "../icons/Pin";
import { Wind } from "../icons/Wind";

export default function Dados({ weather }) {
  const { name, main, weather: weatherDescription, wind } = weather; // Desestrutura os dados da resposta

  return (
    <div className="mt-8 p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
      <h2 className="text-xl font-semibold flex items-center space-x-2 mb-4 text-gray-700">
        <Pin className="text-blue-500" />
        <span>{name}</span>
      </h2>
      <p className="text-3xl font-bold text-gray-800 mb-2">
        <span>{main.temp}</span>&deg;C
      </p>
      <div className="mb-4">
        <p className="text-gray-600">{weatherDescription[0].description}</p>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <p className="text-gray-700 flex items-center">
          <DropLet className="text-blue-500 mr-2" />

          <span> {main.humidity}%</span>
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <p className="text-gray-700 flex items-center">
          <Wind className="text-blue-500 mr-2" />
          <span>{wind.speed} km/h</span>
        </p>
      </div>
    </div>
  );
}

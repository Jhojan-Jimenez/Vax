import React, { useState } from "react";
import { recomendarVacunas } from "../utils/recomendaciones";
import CONDICIONES from "../utils/condiciones";
import { useNavigate } from "react-router-dom";

export default function MainForms() {
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const [ageValue, setAgeValue] = useState("");
  const [ageUnit, setAgeUnit] = useState("años");
  const [condicionSeleccionada, setCondicionSeleccionada] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const edad = `${ageValue} ${ageUnit}`;
    const condiciones = [condicionSeleccionada];
    const genero = gender === "Hombre" ? "M" : "F";

    const resultado = recomendarVacunas(edad, condiciones, genero);
    const parametros = { edad: edad, condiciones: condiciones, gender: gender };

    navigate("/vaccines", { state: { resultado, parametros } });
  };
  const condicionesFiltradas = () => {
    if (gender === "Hombre") {
      return CONDICIONES.filter(
        (cond) => cond !== "Embarazo" && cond !== "Mujer"
      );
    } else if (gender === "Mujer") {
      return CONDICIONES.filter(
        (cond) => cond !== "Hombres que tienen relaciones sexuales con hombres"
      );
    }
    return CONDICIONES;
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg space-y-6 border border-green-300"
      >
        <h2 className="text-2xl font-semibold text-green-700 text-center">
          Formulario
        </h2>

        {/* Género */}
        <div>
          <label className="block text-green-800 font-medium mb-2">
            Género
          </label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Hombre"
                checked={gender === "Hombre"}
                onChange={(e) => setGender(e.target.value)}
                className="accent-green-600"
              />
              <span className="text-green-700">Hombre</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="gender"
                value="Mujer"
                checked={gender === "Mujer"}
                onChange={(e) => setGender(e.target.value)}
                className="accent-green-600"
              />
              <span className="text-green-700">Mujer</span>
            </label>
          </div>
        </div>

        {/* Edad (valor + unidad) */}
        <div>
          <label className="block text-green-800 font-medium mb-2">Edad</label>
          <div className="flex gap-3">
            <input
              type="number"
              value={ageValue}
              onChange={(e) => setAgeValue(e.target.value)}
              placeholder="Edad"
              min={0}
              max={120}
              className="w-1/2 p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <select
              value={ageUnit}
              onChange={(e) => setAgeUnit(e.target.value)}
              className="w-1/2 p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="años">Años</option>
              <option value="meses">Meses</option>
            </select>
          </div>
        </div>

        {/* Condiciones médicas */}
        <div>
          <label className="block text-green-800 font-medium mb-2">
            Condición médica
          </label>
          <select
            value={condicionSeleccionada}
            onChange={(e) => setCondicionSeleccionada(e.target.value)}
            className="w-full p-2 border border-green-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="">Seleccione una condición</option>
            {condicionesFiltradas().map((cond, i) => (
              <option key={i} value={cond}>
                {cond}
              </option>
            ))}
          </select>
        </div>

        {/* Botón enviar */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

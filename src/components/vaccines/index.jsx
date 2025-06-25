import React, { useState } from "react";
import { Shield } from "lucide-react";
import VaccineModal from "./VaccineModal";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Mapeo de categorías
const categories = [
  { level: 7, label: "Nuevo", color: "bg-gray-200 text-gray-800" },
  { level: 6, label: "Recomendada", color: "bg-green-600 text-white" },
  { level: 5, label: "Catch-Up", color: "bg-purple-600 text-white" },
  {
    level: 4,
    label: "Recomendada para adultos con riesgo adicional",
    color: "bg-green-300 text-green-900",
  },
  {
    level: 3,
    label: "Recomendada por criterio médico",
    color: "bg-blue-200 text-blue-900",
  },
  { level: 2, label: "Precaución", color: "bg-orange-300 text-orange-900" },
  { level: -1, label: "No recomendada", color: "bg-red-500 text-white" },
];

export default function Vaccines() {
  const location = useLocation();
  const [selectedVaccine, setSelectedVaccine] = useState(null);
  const resultado = location.state?.resultado || [];
  const parametros = location.state?.parametros || {};
  const navigate = useNavigate();
  console.log("Resultado de vacunas:", resultado);

  // Organizar vacunas por categoría según puntaje
  const vacunasPorCategoria = {};
  categories.forEach((cat) => {
    vacunasPorCategoria[cat.level] = [];
  });

  resultado.forEach((v) => {
    if (vacunasPorCategoria[v.puntaje]) {
      vacunasPorCategoria[v.puntaje].push(v);
    }
  });

  const handleClick = (vaccine) => {
    setSelectedVaccine(vaccine);
  };

  const handleClose = () => {
    setSelectedVaccine(null);
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <div className="mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition"
        >
          ← Volver
        </button>
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Lista de Vacunas
        </h1>
      </div>

      <div className="text-center mb-6">
        <h2 className="text-lg text-green-800 font-medium mb-3">
          Parámetros utilizados:
        </h2>
        <p className="text-gray-700">
          <b>Edad:</b> {parametros.edad || "N/A"} — <b>Condiciones:</b>{" "}
          {parametros.condiciones?.length
            ? parametros.condiciones.join(", ")
            : "Ninguna"}{" "}
          — <b>Género:</b> {parametros.gender || "N/A"}
        </p>
      </div>

      <div className="space-y-10 max-w-3xl mx-auto">
        {categories.map(({ level, label, color }) => {
          const vacunas = vacunasPorCategoria[level] || [];
          if (vacunas.length === 0) return null;

          return (
            <div key={level}>
              <h2
                className={`text-xl font-semibold px-4 py-2 rounded-lg ${color}`}
              >
                {label}
              </h2>

              <div className="flex flex-wrap gap-3 mt-4">
                {vacunas.map((vacuna, i) => (
                  <button
                    key={i}
                    onClick={() => handleClick(vacuna)}
                    className="flex items-center justify-between gap-2 px-4 py-2 bg-white rounded-full shadow hover:shadow-md border border-gray-200 min-w-[200px]"
                  >
                    <span className="text-green-800 font-medium text-left">
                      {vacuna.nombre} - {vacuna.codigo}
                    </span>
                    {vacuna.cubierto_pai && (
                      <Shield size={18} className="text-green-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <VaccineModal vaccine={selectedVaccine} onClose={handleClose} />
    </div>
  );
}

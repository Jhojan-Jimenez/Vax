import React from "react";
import { X } from "lucide-react";
import DETALLES_VACUNAS from "../../data/info_vacunas.json";

export default function VaccineModal({ vaccine, onClose }) {
  if (!vaccine) return null;

  const data = DETALLES_VACUNAS[vaccine.codigo];

  const renderList = (title, items, color = "text-gray-800") => (
    <div className="mb-4">
      <h3 className={`text-lg font-semibold mb-1 ${color}`}>{title}</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-3xl max-h-[90vh] p-6 relative rounded-xl shadow-lg overflow-y-auto">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={28} />
        </button>

        {/* Título */}
        <h2 className="text-2xl font-bold text-green-700 mb-2">
          {vaccine.nombre}
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Código: {vaccine.codigo} • Cubierto por PAI:{" "}
          {vaccine.cubierto_pai ? "Sí" : "No"}
        </p>
        {data ? (
          <>
            {/* Aplicaciones */}
            {data.appliance?.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  Población objetivo
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-green-200 rounded-md overflow-hidden">
                    <thead className="bg-green-100 text-green-900 text-sm">
                      <tr>
                        <th className="px-4 py-2 text-left border-b">
                          Grupo objetivo
                        </th>
                        <th className="px-4 py-2 text-left border-b">Dosis</th>
                        <th className="px-4 py-2 text-left border-b">
                          Intervalo
                        </th>
                        <th className="px-4 py-2 text-left border-b">
                          Refuerzo
                        </th>
                        <th className="px-4 py-2 text-left border-b">Total</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-gray-700">
                      {data.appliance.map((a, idx) => (
                        <tr key={idx} className="even:bg-green-50">
                          <td className="px-4 py-2 border-b">{a.target}</td>
                          <td className="px-4 py-2 border-b">{a.numDose}</td>
                          <td className="px-4 py-2 border-b">
                            {a.doseInterval}
                          </td>
                          <td className="px-4 py-2 border-b">
                            {a.reinforcement}
                          </td>
                          <td className="px-4 py-2 border-b">{a.totalDose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Listas informativas */}
            {renderList(
              "Recomendada para:",
              data.recommended,
              "text-green-800"
            )}
            {renderList(
              "No recomendada para:",
              data.notRecommended,
              "text-red-700"
            )}
            {renderList("Precauciones:", data.precautions, "text-orange-700")}
            {renderList("Observaciones:", data.observations)}
            {renderList("Coadministración:", data.coadministration)}
          </>
        ) : (
          <div className="text-center text-red-600 font-semibold">
            No hay información actual de esta vacuna.
          </div>
        )}
      </div>
    </div>
  );
}

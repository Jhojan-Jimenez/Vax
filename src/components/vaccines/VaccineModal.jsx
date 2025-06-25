import React from "react";
import { X } from "lucide-react";
import DETALLES_VACUNAS from "../../data/vacinneList";

export default function VaccineModal({ vaccine, onClose }) {
  if (!vaccine) return null;

  const data = DETALLES_VACUNAS[vaccine.codigo];

  const renderList = (title, items, color = "text-gray-800") =>
    items?.length > 0 && (
      <div className="mb-4">
        <h3 className={`text-lg font-semibold mb-1 ${color}`}>{title}</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );

  const renderApplianceTable = (appliance) =>
    appliance?.length > 0 && (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-green-700 mb-2">
          Población objetivo
        </h3>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-green-200 rounded-md overflow-hidden">
            <thead className="bg-green-100 text-green-900 text-sm">
              <tr>
                <th className="px-4 py-2 text-left border-b">Grupo objetivo</th>
                <th className="px-4 py-2 text-left border-b">Dosis</th>
                <th className="px-4 py-2 text-left border-b">Intervalo</th>
                <th className="px-4 py-2 text-left border-b">Refuerzo</th>
                <th className="px-4 py-2 text-left border-b">Total</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700">
              {appliance.map((a, idx) => (
                <tr key={idx} className="even:bg-green-50">
                  <td className="px-4 py-2 border-b">{a.target}</td>
                  <td className="px-4 py-2 border-b">{a.numDose}</td>
                  <td className="px-4 py-2 border-b">{a.doseInterval}</td>
                  <td className="px-4 py-2 border-b">{a.reinforcement}</td>
                  <td className="px-4 py-2 border-b">{a.totalDose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );

  const renderEntry = (entry, idx) => (
    <div key={idx} className="mb-8 border-b pb-4 last:border-b-0">
      {renderApplianceTable(entry.appliance)}
      {renderList("Recomendada para:", entry.recommended, "text-green-800")}
      {renderList("No recomendada para:", entry.notRecommended, "text-red-700")}
      {renderList("Precauciones:", entry.precautions, "text-orange-700")}
      {renderList("Observaciones:", entry.observations)}
      {renderList("Coadministración:", entry.coadministration)}
    </div>
  );
  const renderEntryArray = (entry, idx) => (
    <div key={idx} className="mb-8 border-b pb-4 last:border-b-0">
      {entry.name && (
        <h3 className="text-xl font-semibold text-blue-700 mb-2">
          {entry.name}
        </h3>
      )}
      {renderApplianceTable(entry.appliance)}
      {renderList("Recomendada para:", entry.recommended, "text-green-800")}
      {renderList("No recomendada para:", entry.notRecommended, "text-red-700")}
      {renderList("Precauciones:", entry.precautions, "text-orange-700")}
      {renderList("Observaciones:", entry.observations)}
      {renderList("Coadministración:", entry.coadministration)}
    </div>
  );

  return (
    <div
      className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-3xl max-h-[90vh] p-6 relative rounded-xl shadow-lg overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
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
          Código: {vaccine.codigo} • Cubierto por PAI: {data.pai}
        </p>

        {data ? (
          Array.isArray(data) ? (
            data.map(renderEntryArray)
          ) : (
            renderEntry(data)
          )
        ) : (
          <div className="text-center text-red-600 font-semibold">
            No hay información actual de esta vacuna.
          </div>
        )}
      </div>
    </div>
  );
}

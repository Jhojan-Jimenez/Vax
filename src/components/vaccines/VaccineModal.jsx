import React from "react";
import { X } from "lucide-react";

export default function VaccineModal({ vaccine, onClose }) {
  if (!vaccine) return null;

  return (
    <div className="fixed inset-0 bg-white/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-2xl max-h-[90vh] p-6 relative rounded-xl shadow-lg overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
        >
          <X size={28} />
        </button>

        <h2 className="text-2xl font-bold text-green-700 mb-4">{vaccine}</h2>
        <p className="text-gray-700 leading-relaxed">
          Aquí iría la descripción detallada de la vacuna <b>{vaccine}</b>,
          incluyendo indicaciones, contraindicaciones, edades recomendadas y
          más. Puedes extender este contenido para probar cómo se comporta con
          mucho texto. <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vulputate
          turpis vel pulvinar dictum. Nulla facilisi. Vestibulum imperdiet eu
          lorem nec sollicitudin. Integer vitae accumsan magna.
        </p>
      </div>
    </div>
  );
}

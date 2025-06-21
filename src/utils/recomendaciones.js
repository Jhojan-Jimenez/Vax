// 1. Cargar el JSON (puede ser una importación o fetch si estás en el navegador)
import recomendaciones from "../data/recomendaciones_vacunas.json";
import { edadATotalMeses, obtenerEtiquetaEdad } from "../utils/edad";

/**
 * Recomienda vacunas según edad, condiciones médicas y género
 * @param {string} edadTexto - edad libre en texto, ej: "4 meses", "1 año"
 * @param {string[]} condicionesMedicas - array de condiciones, ej: ["Embarazo"]
 * @param {string} genero - "F" o "M"
 * @returns {Array} Lista de vacunas recomendadas con puntaje mínimo y cobertura PAI
 */
export function recomendarVacunas(
  edadTexto,
  condicionesMedicas = [],
  genero = "F"
) {
  const edadEnMeses = edadATotalMeses(edadTexto);
  if (edadEnMeses == null) throw new Error("Edad no reconocida");

  const edadesDisponibles = Object.keys(recomendaciones[0].edad_recomendacion);
  const edad = obtenerEtiquetaEdad(edadTexto, edadesDisponibles);

  if (!edad)
    throw new Error("No se encontró una edad equivalente válida en el sistema");

  const vacunasRecomendadas = [];

  recomendaciones.forEach((vacuna) => {
    const puntajeEdad = vacuna.edad_recomendacion[edad] ?? -1;

    const condicionesValidas = (condicionesMedicas || [])
      .filter((cond) => cond && cond.trim() !== "")
      .filter(
        (cond) => genero === "F" || (cond !== "Embarazo" && cond !== "Mujer")
      );

    let puntajeFinal = puntajeEdad;

    if (condicionesValidas.length > 0) {
      const puntajesCondiciones = condicionesValidas.map(
        (cond) => vacuna.condiciones_medicas[cond] ?? -1
      );
      const puntajeCondicion = Math.min(...puntajesCondiciones);
      puntajeFinal = Math.min(puntajeEdad, puntajeCondicion);
    }

    const coberturaValor = vacuna.cobertura_pai[edad] ?? 0;
    const cubiertoPorPAI = coberturaValor === 1 || coberturaValor === 5;

    if (puntajeFinal === 10) return;

    vacunasRecomendadas.push({
      codigo: vacuna.codigo,
      nombre: vacuna.nombre,
      puntaje: puntajeFinal,
      cubierto_pai: cubiertoPorPAI,
    });
  });

  vacunasRecomendadas.sort((a, b) => a.puntaje - b.puntaje);

  return vacunasRecomendadas;
}

export function edadATotalMeses(edadTexto) {
  console.log(`Procesando edad: ${edadTexto}`);

  const regex = /(\d+)\s*(mes(es)?|año(s)?)/i;
  const match = edadTexto.match(regex);
  if (!match) return null;

  const valor = parseInt(match[1]);
  const unidad = match[2].toLowerCase();

  if (unidad.startsWith("mes")) return valor;
  if (unidad.startsWith("año")) return valor * 12;

  return null;
}
export function obtenerEtiquetaEdad(edadTexto, edadesDisponibles) {
  const edadEnMeses = edadATotalMeses(edadTexto);
  if (edadEnMeses == null) return null;

  const edadEnAnios = edadEnMeses / 12;

  const etiquetasConvertidas = edadesDisponibles
    .map((etiqueta) => {
      if (etiqueta === "Recien nacido") {
        return { etiqueta, min: 0, max: 0, unidad: "mes" };
      }

      const matchMes = etiqueta.match(/^(\d+)\s*mes/);
      if (matchMes) {
        const val = parseInt(matchMes[1]);
        return { etiqueta, min: val, max: val, unidad: "mes" };
      }

      const matchRangoAnios = etiqueta.match(/^(\d+)-(\d+)\s*años?/);
      if (matchRangoAnios) {
        return {
          etiqueta,
          min: parseInt(matchRangoAnios[1]),
          max: parseInt(matchRangoAnios[2]),
          unidad: "año",
        };
      }

      const matchExactoAnio = etiqueta.match(/^(\d+)\s*años?/);
      if (matchExactoAnio) {
        const val = parseInt(matchExactoAnio[1]);
        return { etiqueta, min: val, max: val, unidad: "año" };
      }

      const matchMayorA = etiqueta.match(/^>\s*(\d+)\s*años?/);
      if (matchMayorA) {
        return {
          etiqueta,
          min: parseInt(matchMayorA[1]) + 1,
          max: Infinity,
          unidad: "año",
        };
      }

      return null;
    })
    .filter(Boolean);

  // 1. Buscar coincidencia directa en el rango
  const matchExacto = etiquetasConvertidas.find((e) => {
    if (e.unidad === "mes") {
      return edadEnMeses >= e.min && edadEnMeses <= e.max;
    }
    if (e.unidad === "año") {
      return edadEnAnios >= e.min && edadEnAnios <= e.max;
    }
    return false;
  });

  if (matchExacto) {
    console.log(
      `Edad ${edadTexto} coincide directamente con: ${matchExacto.etiqueta}`
    );
    return matchExacto.etiqueta;
  }

  // 2. Si no hay match exacto, buscar el rango más cercano (por centro)
  const calculoDiferencia = etiquetasConvertidas.map((e) => {
    const referencia = e.unidad === "mes" ? edadEnMeses : edadEnAnios;
    const rangoCentral = (e.min + e.max) / 2;
    return {
      etiqueta: e.etiqueta,
      diferencia: Math.abs(referencia - rangoCentral),
    };
  });

  const másCercano = calculoDiferencia.reduce((prev, curr) =>
    curr.diferencia < prev.diferencia ? curr : prev
  );

  console.warn(
    `Edad ${edadTexto} no coincidió exactamente. Usando el más cercano: ${másCercano.etiqueta}`
  );
  return másCercano.etiqueta;
}

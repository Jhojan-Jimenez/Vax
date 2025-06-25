let vaccineList = {
  0: [
    {
      name: "Moderna",
      pai: "Si",
      appliance: [
        {
          target: "Lactantes >6 meses, niños, adolescentes y adultos",
          numDose: "2",
          doseInterval: "4-8 semanas",
          reinforcement: "Si, personas que ha recibido dosis monovalentes",
          totalDose: "3",
        },
      ],
      recommended: [
        "Todos los pacientes que estén en posible contacto con el virus.",
        "Pacientes con VIH los beneficios superan los riesgos.",
      ],
      notRecommended: [
        "Anafilaxia a una dosis previa de una vacuna COVID-19 de ARNm.",
        "Anafilaxia a cualquier componente de la vacuna, incluyendo polietilenglicol (PEG).",
        "Cualquier otro evento adverso grave atribuido a una dosis previa de Pfizer o Moderna (y sin otra causa identificada).",
      ],
      precautions: ["Ninguna"],
      observations: [
        "* >65 años: aptos para dosis de refuerzo bivalente, al menos 4 meses después de la primera dosis",
      ],
      coadministration: ["Puede administrarse al tiempo que otras vacunas."],
    },
    {
      name: "Novavax, Pfizer-BioNTech",
      pai: "Si",
      appliance: [
        {
          target: "Lactantes > 6 meses, niños, adolescentes y adultos",
          numDose: "2",
          doseInterval: "3-8 semanas",
          reinforcement: "Si, personas que ha recibido dosis monovalentes",
          totalDose: "3",
        },
      ],
      recommended: [
        "Todos los pacientes que estén en posible contacto con el virus. ",
        "Pacientes con VIH los beneficios superan los riesgos.",
      ],
      notRecommended: [
        "Anafilaxia a una dosis previa de una vacuna COVID-19 de ARNm.",
        "Anafilaxia a cualquier componente de la vacuna, incluyendo polietilenglicol (PEG).",
        "Cualquier otro evento adverso grave atribuido a una dosis previa de Pfizer o Moderna (y sin otra causa identificada).",
      ],
      precautions: ["Ninguna"],
      observations: [
        "* >65 años: aptos para dosis de refuerzo bivalente, al menos 4 meses después de la primera dosis",
      ],
      coadministration: ["Puede administrarse al tiempo que otras vacunas."],
    },
  ],
  1: {
    name: "Vacuna antituberculosa (BCG)",
    pai: "Si, únicamente recién nacidos",
    appliance: [
      {
        target: "Recién nacidos y trabajadores de la salud",
        numDose: "1",
        doseInterval: "NA",
        reinforcement: "No",
        totalDose: "1",
      },
    ],

    recommended: [
      "Pacientes con llegadas recientes (< de 5 años) de países de alta prevalencia.",
      "Usuarios de drogas inyectables.",
      "Residentes y empleados de entornos congregados de alto riesgo.",
      "Personal del laboratorio de microbacteriología.",
      "Personas con afecciones clínicas (diabetes).",
      "Niños < de 4 años de edad, o niños y adolescentes expuestos a adultos en categorías de alto riesgo",
    ],
    notRecommended: [
      "Personas inmunocomprometidas (VIH o candidatas para transplante de órganos).",
      "Embarazadas",
    ],
    precautions: ["Ninguna"],
    observations: [
      "Consideración individual:",
      "Un alto porcentaje de pacientes con tuberculosis esté infectado con cepas resistentes tanto a la isoniacida como a la rifampicina.",
      "Transmisión continua a trabajadores de salud de cepas de tuberculosis resistentes a medicamentos, probabilidad de infecciones posteriores.",

      "Se hayan implementado medidas integrales de precaución para controlar la infección por tuberculosis, pero sin éxito.",
    ],
    coadministration: [
      "Puede ser administrada al mismo tiempo que vacunas vivas, incluyendo las combinadas (sarampión, paperas y rubéola), teniendo especial precaución para no administrarlas en el mismo brazo.",
    ],
  },
  2: {
    name: "<em className='text-white'>Haemophilus influenzae</em> tipo b (Hib)",
    pai: "Si, hasta los 6 meses",
    appliance: [
      {
        target: "Lactantes de 2, 4 y 6 meses, adultos",
        numDose: "3",
        doseInterval: "4 semanas",
        reinforcement: "No",
        totalDose: "3",
      },
    ],

    recommended: [
      "Lactantes y niños menores de 5 años.",
      "Personas después de un trasplante de médula ósea.",

      "Adultos cuyo bazo está dañado o se ha extirpado",
      "Enfermedad de células falciformes",
      "Pacientes de 5 a 18 años de edad con VIH",
    ],
    notRecommended: [
      "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      "Edad <6 semanas.",
      "Solo para Hiberix, ActHib y PedvaxHIB: antecedentes de reacción alérgica grave al látex natural seco.",
    ],
    precautions: ["Enfermedad aguda moderada o grave con o sin fiebre."],
    observations: [
      "Menores de 5 años no inmunizados contra Haemophilus influenza B deben completar el esquema según su edad.",
      "Para asplenia anatómica o funcional: 1 dosis si previamente no recibió Hib.",
      "Esplenectomía electiva: 1 dosis, preferiblemente al menos 14 días antes de la esplenectomía.",
      "Trasplante de células madre hematopoyéticas: serie de 3 dosis con 4 semanas de diferencia a partir de 6 a 12 meses después del trasplante exitoso.",
    ],
    coadministration: ["Puede administrarse al tiempo que otras vacunas."],
  },
  3: {
    name: "Hepatitis B (HepB)",
    pai: "Si, hasta los 6 meses",
    appliance: [
      {
        target: "Recién nacido, 2 meses, 6 meses y adulto <59 años",
        numDose: "3",
        doseInterval: "4 semanas",
        reinforcement: "No",
        totalDose: "3",
      },
      {
        target:
          "Adultos de 60 años o más sin mayor riesgo (no vacunados previamente)",
        numDose: "2, 3 o 4",
        doseInterval: "—",
        reinforcement: "No",
        totalDose: "2,3 o 4",
      },
    ],

    recommended: [
      "Para >60 años con un mayor riesgo de exposición y viajes con fines médicos a países extranjeros.",
      "Postexposición- Si el paciente no tiene vacunación previa específica administrar gammaglobulina hiperinmune 0.03 ml/kg peso",
      "Intramuscular dentro de la dos primeras semanas de exposición y aplicar esquema de vacunación acortado para hepatitis B (0, 1, 4 meses),",
      "Iniciarlo en las primeras 48 horas.",
      "Pre exposición- Esquema de vacunación completo para hepatitis B.",
    ],
    notRecommended: [
      "Reacción alérgica grave (por ejemplo, anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      "Hipersensibilidad a la levadura.",
      "Embarazo: Heplisav-B y PreHevbrio no se recomiendan durante el embarazo.",
    ],
    precautions: ["Enfermedad aguda moderada o grave con o sin fiebre."],
    observations: [
      "En niños que inician vacunación después de los 2 meses: intervalo mínimo entre 1o y 3o dosis debe ser de 4 meses.",
      "Pacientes en diálisis: Serie de 3 o 4 dosis",
      "Serie de 3 dosis de Recombivax HB a los 0, 1, 6 meses.",
      "Serie de 4 dosis de Engerix-B a los 0, 1, 2 y 6 meses.",
      "La vacuna contra la hepatitis B puede administrarse como vacuna independiente o como parte de una vacuna combinada.",
    ],
    coadministration: ["Puede administrarse al tiempo que otras vacunas."],
  },
  4: {
    name: "Difteria tosferina Tétanos (DPT)",
    pai: "Si, hasta los 5 años",
    appliance: [
      {
        target: "Lactantes de 2, 4 y 6 meses",
        numDose: "3",
        doseInterval: "4 semanas",
        reinforcement: "Si, a los 15-18 meses de edad, 4-6 años de edad",
        totalDose: "5",
      },
    ],
    recommended: [
      "DPT es solo para niños < 7 años. Hay diferentes vacunas contra el tétanos, la difteria y la tos ferina (Tdap y Td) disponibles para niños mayores, adolescentes y adultos.",
    ],
    notRecommended: [
      "Reacción alérgica grave (por ejemplo, anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      "Encefalopatía no atribuible a otra causa identificable, dentro de los 7 días de la administración de la dosis previa de DTP o DtaP.",
      "Personas que hayan tenido coma, disminución del nivel de conciencia o convulsiones prolongadas dentro de los 7 días posteriores a una dosis previa de cualquier vacuna contra la tos ferina (DTP o DTaP).",
    ],
    precautions: [
      "Trastorno neurológico progresivo, incluyendo espasmos infantiles, epilepsia no controlada, encefalopatía progresiva.",
      "Síndrome de Guillain-Barré (SGB) en las 6 semanas siguientes a la vacunación con toxoide tetánico.",
      "Antecedentes de reacciones de hipersensibilidad tipo Arthus",
      "Enfermedad aguda, moderada o grave con o sin fiebre.",
    ],
    observations: [
      "Se puede administrar como una vacuna independiente o como parte de una vacuna combinada.",
    ],
    coadministration: ["Puede administrarse al tiempo que otras vacunas."],
  },
  5: {
    name: "Toxoide tetánico y diftérico del adulto (TD)",
    pai: "Si, únicamente para mujeres en edad fértil (10-49 años)",
    appliance: [
      {
        target: "Personas de 7-64 años",
        numDose: "1",
        doseInterval: "NA",
        reinforcement: "Sí, cada 10 años",
        totalDose: "NA",
      },
    ],

    recommended: [
      "Se puede la vacuna “Tdap”, en lugar de la vacuna Td.",
      "Los adultos deben recibir una dosis de refuerzo TdaP/Td cada 10 años",
      "Después de 5 años en caso de una herida o quemadura grave",
    ],
    notRecommended: [
      "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
    ],
    precautions: [
      "Síndrome de Guillain-Barré (SGB) en las 6 semanas siguientes a la vacunación con toxoide tetánico.",
      "Antecedentes de reacciones de hipersensibilidad tipo Arthus",
      "Personas con enfermedades moderadas o graves deben esperar a recuperarse antes de recibir la vacuna Td.",
      "Personas con enfermedades leves, como un resfriado, pueden vacunarse.",
    ],
    observations: ["Adultos no vacunados deben recibir una dosis."],
    coadministration: ["Puede administrarse al tiempo que otras vacunas."],
  },
  6: {
    name: "Tétanos Difteria-Tosferina Acelular (TdaP)",
    pai: "Sí, para mujeres gestantes.",
    appliance: [
      {
        target: "Mujeres gestantes de 26 semanas",
        numDose: "1",
        doseInterval: "NA",
        reinforcement: "No",
        totalDose: "1",
      },
      {
        target: "Adolescentes (preferiblemente entre 11 y 12 años)",
        numDose: "1",
        doseInterval: "NA",
        reinforcement: "No",
        totalDose: "1",
      },
    ],

    recommended: [
      "Niños de 7 años o más.",
      "Adolescentes, preferiblemente entre 11 y 12 años.",

      "Adultos que no han recibido la vacuna Tdap deben recibir una dosis de la vacuna Tdap.",
      "Los adultos deben recibir una dosis de refuerzo Tdap o Td cada 10 años o después de 5 años en caso de una herida o quemadura grave o contaminada.",
      "Mujeres embarazadas deben recibir una vacuna en el primer trimestre del embarazo.",
    ],
    notRecommended: [
      "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      "Encefalopatía (ej: coma, disminución del nivel de conciencia, convulsiones prolongadas), no atribuible a otra causa identificable, dentro de los 7 días de la administración de la dosis previa de DTP, DTaP o Tdap.",
    ],
    precautions: [
      "Síndrome de Guillain-Barré (SGB) en las 6 semanas siguientes a la vacunación con toxoide tetánico.",
      "Trastorno neurológico progresivo e inestable, convulsiones troleadas, o encefalopatía progresiva.",
      "Antecedentes de reacciones de hipersensibilidad tipo Arthus",
      "Personas con enfermedades moderadas o graves deben esperar a recuperarse antes de recibir la vacuna Tdap.",
      "Personas con enfermedades leves, como un resfriado, pueden vacunarse.",
    ],
    observations: [
      "Adolescentes no vacunados deben recibir una dosis entre los 11 o 12 años.",
      "Adultos no vacunados deben recibir una dosis.",
    ],
    coadministration: ["Puede administrarse al tiempo que otras vacunas."],
  },
  7: {
    name: "SRP (Sarampión - Rubela - paperas)",
    pai: "Si, hasta los 5 años",
    appliance: [
      {
        target: "Lactantes de 12 meses",
        numDose: "1",
        doseInterval: "NA",
        reinforcement: "Sí, a los 5 años de edad",
        totalDose: "2",
      },
    ],
    recommended: [
      "Se calcula que aproximadamente un 5% de los pacientes vacunados no desarrollan anticuerpos contra sarampión, de allí que se prefiera la aplicación de una segunda dosis a los 5 años.",
      "Recomendada para portadores sintomáticos de VIH.",
      "Niños a partir de los 12 meses de edad.",
      "Ciertas personas en situaciones de brotes de paperas.",
    ],
    notRecommended: [
      "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      "Embarazo",
      "Inmunodeficiencia grave conocida (ej: tumores hematológicos y sólidos, recepción de quimioterapia, inmunodeficiencia congénita, terapia inmunosupresora a largo plazo o pacientes con infección por VIH  que están gravemente inmunocomprometidos).",
      "Antecedentes familiares de inmunocompetencia alterada.",
      "Personas que hayan tenido una afección que les provoque moretones o sangrados fácilmente.",
      "Personas con tuberculosis.",
      "Personas que hayan recibido otras vacunas en las últimas 4 semanas.",
    ],
    precautions: [
      "Persona que haya sido transfundida con sangre total, plasma o administración de gammaglobulina; se deberá posponer la vacunación 3 meses.",
      "Personas con enfermedades moderadas o graves deben esperar a recuperarse antes de recibir la vacuna MMR.",
    ],
    observations: [
      "Pacientes que han recibió inmunoglobulinas o derivados sanguíneos esperar 3-6 meses para aplicación de vacuna.",
      "En ocasiones, pueden ocurrir hinchazón de las glándulas en las mejillas o el cuello, o dolor y rigidez temporales en las articulaciones (principalmente en mujeres adolescentes o adultas).",
    ],
    coadministration: [
      "Puede administrarse al tiempo que otras vacunas.",
      "En niños de 12 meses a 12 años, puede administrarse junto con la vacuna contra la varicela como MMRV.",
    ],
  },
  8: {
    name: "Varicela (VAR)",
    pai: "Si, hasta los 5 años ",
    appliance: [
      {
        target: "Niños",
        numDose: "2",
        doseInterval:
          "Primera dosis a los 12-15 meses; Segunda dosis a los 4-6 años",
        reinforcement: "No",
        totalDose: "2",
      },

      {
        target: "Adultos y personal sanitario",
        numDose: "2",
        doseInterval: "4 a 8 semanas",
        reinforcement: "No",
        totalDose: "1",
      },
    ],
    recommended: [
      "Niños a partir de los 12 meses de edad.",

      "Niños mayores, adolescentes y adultos, también se necesitan 2 dosis de la vacuna si no tienen inmunidad contra la varicela.",
    ],
    notRecommended: [
      "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      "Embarazo",
      "Inmunodeficiencia grave conocida (ej: tumores hematológicos y sólidos, recepción de quimioterapia, inmunodeficiencia congénita, terapia inmunosupresora a largo plazo o pacientes con infección por VIH que están gravemente inmunocomprometidos).",
      "Antecedentes familiares de inmunocompetencia alterada.",
      "Personas que estén tomando salicilatos (como aspirina).",
    ],
    precautions: [
      "Recepción reciente (antes de 11 meses) de un hemoderivado que contenga anticuerpos. ",
      "Recepción de antivirales específicos (es decir, aciclovir, famciclovir o valaciclovir) 24 horas antes de la vacunación; evitar el uso de estos antivirales durante 14 días después de la vacunación.",
      "Enfermedad aguda moderada o grave con o sin fiebre.",
      "Si una persona vacunada desarrolla una erupción, debe mantenerse alejada de lactantes y personas con un sistema inmunológico debilitado hasta que la erupción desaparezca, ya que el virus de la vacuna podría transmitirse.",
    ],
    observations: [
      "Sin evidencia de inmunidad: 2 dosis con intervalo de 4-8 semanas si no se ha recibido previamente, si se ha recibido previamente, una dosis al menos 4 semanas después de la primera dosis.",
      "Con evidencia de inmunidad: 2 dosis con intervalo de 4 semanas y diagnóstico de antecedentes de varicela o herpes zoster por un profesional sanitario, pruebas de laboratorio de inmunidad o enfermedad.",
      "Personal sanitario sin evidencia de inmunidad: 1 dosis si ha recibido previamente; 2 dosis con intervalo de 4-8 semanas si no ha recibido previamente.",
      "VIH CD4 ≥15% y recuento de CD4 ≥200 células/mm3 sin evidencia de inmunidad: 2 dosis con 3 meses de intervalo.",
      "VAR contraindicada para VIH con porcentaje de CD4 <15% o recuento de CD4 <200 células/mm3.",
      "Niños de 12 meses a 12 años podrían recibir la vacuna contra la varicela junto con la vacuna MMR (sarampión, paperas y rubéola [measles, mumps, and rubella]) en una sola inyección, conocida como vacuna MMRV.",
    ],
    coadministration: [
      "Puede administrarse al tiempo que otras vacunas.",
      "En niños de 12 meses a 12 años, puede administrarse junto con la vacuna MMR como MMRV.",
    ],
  },
  9: {
    name: "Zoster recombinante (RZV)",
    pai: "No",
    appliance: [
      {
        target: "Adultos de 50 años o más",
        numDose: "2",
        doseInterval: "4 semanas",
        reinforcement: "No",
        totalDose: "2",
      },
    ],

    recommended: [
      "Adultos > de 18 años que tienen o estarán en mayor riesgo de HZ debido a inmunodeficiencia o inmunosupresión causada por enfermedad o terapia conocida.",
      "Personas que han recibido la vacuna contra la varicela (chickenpox).",
      "Personas que ya han recibido otro tipo de vacuna contra la culebrilla (la vacuna viva contra la culebrilla).",
    ],
    notRecommended: [
      "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      "Considere retrasar el uso hasta después del embarazo.",
      "Personas que estén experimentando un episodio de culebrilla actualmente.",
    ],
    precautions: [
      "Enfermedad aguda moderada o grave con o sin fiebre.",
      "Infección actual por herpes zóster.",
    ],
    observations: [
      "Condiciones inmunocomprometidas (incluidas personas con VIH): 2 dosis con intervalo de 2 a 6 meses.",
      "Repetir dosis si se administra demasiado pronto.",
    ],
    coadministration: ["Puede administrarse al tiempo que otras vacunas."],
  },
  10: {
    name: "Virus del papiloma humano (VPH)",
    pai: "Si, para mujeres desde los 9 hasta los 17 años",
    appliance: [
      {
        target: "Niñas de 9 años de edad no inmunocomprometidas",
        numDose: "2",
        doseInterval: `6 meses`,
        reinforcement: "No",
        totalDose: "2",
      },
      {
        target: "Niñas de 9 años de edad inmunocomprometidas",
        numDose: "3",
        doseInterval: `
                  Dosis 1 a dosis 2: 2 meses 
                  Dosis 2 a dosis 3: 6 meses 
                  `,
        reinforcement: "No",
        totalDose: "3",
      },
      {
        target: "Niñas y adolescentes de 9 a 14 años",
        numDose: "2",
        doseInterval: `5 meses`,
        reinforcement: "No",
        totalDose: "2",
      },
      {
        target: "Adolescentes desde los 15 años y mujeres adultas",
        numDose: "3",
        doseInterval: `
                  Dosis 1 a dosis 2: 4 semanas
                  Dosis 2 a dosis 3: 12 semanas
                  Dosis 1 a dosis 3: 5 meses
                  `,
        reinforcement: "No",
        totalDose: "3",
      },
    ],
    recommended: [
      "De forma rutinaria",
      "Se puede administrar a partir de los 9 años y recomendada en todas las personas hasta los 26 años.",
      "Se puede administrar a adultos de 27 a 45 años, basándose en conversaciones entre el paciente y el proveedor de atención médica.",
    ],
    notRecommended: [
      "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      "Vacunación contra el VPH hasta después del embarazo.",
    ],
    precautions: ["Enfermedad aguda moderada o grave con o sin fiebre."],
    observations: [
      "Repetir dosis si se administra demasiado pronto.",
      "No se recomienda ninguna dosis adicional después de completar esquema.",
    ],
    coadministration: ["Puede administrarse al tiempo que otras vacunas."],
  },
  11: [
    {
      name: "Neumococo Vacuna conjugada  (PCV7/PCV10/PCV13/PCV15/PCV20)",
      pai: "Si, hasta los 12 meses y mayores de 60 años en Bogotá. Cobertura población migrante. Aplica para PCV10 y PCV13.",
      appliance: [
        {
          target: "Lactantes entre 2 y 11 meses de edad ",
          numDose: "2",
          doseInterval: `
                  1ra dosis: 2 meses
  
                  2da dosis: 4 meses
  
                  Mínimo 2 meses entre cada dosis
                  `,
          reinforcement: "12 meses",
          totalDose: "3",
        },
        {
          target: "Entre 12 y 24 meses de edad",
          numDose: "2",
          doseInterval: `
                  Sin vacunación previa, a la edad que se encuentre. 
  
                  2da dosis: 2 meses después de vacunación
                  `,
          reinforcement: "NA",
          totalDose: "2",
        },
        {
          target: "Entre 24 y 72 meses",
          numDose: "1",
          doseInterval: "Sin vacunación previa, a la edad que se encuentre.",
          reinforcement: "NA",
          totalDose: "1",
        },
        {
          target: "Adultos de 19 a 64 años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
        {
          target: "Adultos mayores de 65 años",
          numDose: "1",
          doseInterval: "1 año",
          reinforcement: "Anual",
          totalDose: "1",
        },
      ],

      recommended: [
        "Niños menores de 2 años.",
        "Personas con ciertas condiciones médicas o factores de riesgo.",

        "Para personas entre 18 y 59 años fumadores o pacientes asmáticos y personas con alto riesgo de infección.",
        "Pacientes que recibieron PCV10, no se recomienda uso PCV13. Terminar esquema de vacunación con PCV10.",
        "El esquema de vacunación debe ser completado con el mismo biológico en cualquiera de los casos.",
      ],
      notRecommended: [
        "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
        "Reacción alérgica grave (Ej:anafilaxia) a cualquier vacuna que contenga toxoide diftérico o a su componente vacunal.",
      ],
      precautions: ["Enfermedad aguda moderada o grave con o sin fiebre."],
      observations: [
        "Pacientes que no hayan recibido previamente una PCV13, PCV15 o PCV20 o cuyo historial de vacunación previa se desconozca: 1 dosis de PCV15 O 1 dosis de PCV20. Si se utiliza la PCV15, ésta debe ir seguida de una dosis de PPSV23 administrada al menos 1 año después de la dosis de PCV15. Se puede considerar un intervalo mínimo de 8 semanas entre PCV15 y PPSV23 para adultos con una enfermedad inmunocomprometida, implante coclear o fuga de líquido cefalorraquídeo.",
        "Haber recibido previamente sólo PCV7: seguir la recomendación anterior.",
        "Anteriormente recibió sólo PCV13: 1 dosis de PCV20 al menos 1 año después de la dosis de PCV13.",
        "Ha recibido previamente PCV13 y PPSV23 pero no ha completado la serie recomendada: 1 dosis de PCV20 al menos 5 años después de su última dosis de vacuna antineumocócica.",
        "Para más información visitar: www.cdc.gov/vaccines/vpd/pneumo/downloads/pne umo-vaccine-timing.pdf",
        "Para pacientes con VIH:",
        "Iniciar con PCV13 seguido de la PPSV23 (refuerzo según grupo etario). El refuerzo no está recomendado en personas con más de 65 años, si el paciente y el médico tratante deciden administrar la PCV13 ( 65 años o más) se debe seguir lo siguiente:",
        "Administre 1 dosis de PPSV23 entre los 19 y los 64 años.",
        "Administre 1 dosis de PCV13 a los 65 años o más. Esta dosis debe ser administrada al menos 1 año después de la PPSV23.",
        "Administre 1 dosis final de PPSV23 a los 65 años o más. Esta dosis debe administrarse al menos 1 año después de la PCV13 y al menos 5 años después de la dosis más reciente de PPSV23.",
        "Si el paciente y el médico deciden que la PCV13 no se administrará en pacientes con 65 años o más, se debe tener en cuenta lo siguiente:",
        "Administre 1 dosis de PPSV23 entre los 19 y los 64 años.",
        "Administrar 1 dosis final de PPSV23 a los 65 años o más. Esta dosis debe administrarse al menos 5 años después de la dosis más reciente de PPSV23.",
      ],
      coadministration: [
        "Puede administrarse de forma simultánea con los siguientes antígenos, tanto como vacunas monovalentes como combinadas: difteria, tétanos, tosferina acelular o células enteras, H. influenzae tipo b, poliomielitis inactivada, hepatitis B, ",
        "meningococo C, sarampión, rubeola, parotiditis, varicela y rotavirus. ",
        "También puede administrarse con la vacuna meningocócica de polisacáridos ACYW conjugada con toxoide tetánico (NIMENRIX®) y con la vacuna trivalente inactivada frente a gripe estacional",
      ],
    },
    {
      name: "Neumococo Vacuna polisacárida (PPSV23)",
      pai: "No",
      appliance: [
        {
          target: "Adultos de 65 años o más",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
      ],

      recommended: [
        "Para cualquier persona de 2 años o mayor con ciertos padecimientos médicos que pueden provocar un aumento de riesgo de contraer alguna enfermedad neumocócica.",
        "La mayoría de las personas necesitan solo una dosis de PPSV23. Una segunda dosis de PPSV23 y otro tipo de vacuna neumocócica denominada PCV13 se recomiendan para ciertos grupos de alto riesgo.",
        "Fumadores de cigarrillos.",
      ],
      notRecommended: [
        "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      ],
      precautions: ["Enfermedad aguda moderada o grave con o sin fiebre."],
      observations: [
        "Si ha recibido anteriormente sólo la PPSV23: 1 dosis de PCV15 O 1 dosis de PCV20 al menos 1 año después de la dosis de PPSV23. Si se utiliza PCV15, no es necesario que vaya seguida de otra dosis de PPSV23",
        "Recibió previamente tanto la PCV13 como la PPSV23, Y la PPSV23 se recibió a la edad de 65 años o más: Basándose en la toma de decisiones clínicas compartidas, 1 dosis de PCV20 al menos 5 años después de la última dosis de vacuna antineumocócica.",
        "Recibió previamente PCV13 y PPSV23 pero NO recibió PPSV23 a la edad de 65 años o más: 1 dosis de PCV20 al menos 5 años después de su última dosis de vacuna antineumocócica",
      ],
      coadministration: [
        "Puede administrarse en el mismo acto vacunal con la vacuna frente a la gripe y con cualquier otra vacuna, excepto con ZOSTAVAX® (vacuna de virus vivos atenuados frente a herpes zoster). La administración concomitante de ambas vacunas proporcionó una reducción de la inmunogenicidad de Zostavax®, en este caso se debe asegurar un intervalo de 4 semanas entre ambas.",
      ],
    },
  ],
  12: [
    {
      name: "Neumococo Vacuna conjugada  (PCV7/PCV10/PCV13/PCV15/PCV20)",
      pai: "Si, hasta los 12 meses y mayores de 60 años en Bogotá. Cobertura población migrante. Aplica para PCV10 y PCV13.",
      appliance: [
        {
          target: "Lactantes entre 2 y 11 meses de edad ",
          numDose: "2",
          doseInterval: `
                  1ra dosis: 2 meses
  
                  2da dosis: 4 meses
  
                  Mínimo 2 meses entre cada dosis
                  `,
          reinforcement: "12 meses",
          totalDose: "3",
        },
        {
          target: "Entre 12 y 24 meses de edad",
          numDose: "2",
          doseInterval: `
                  Sin vacunación previa, a la edad que se encuentre. 
  
                  2da dosis: 2 meses después de vacunación
                  `,
          reinforcement: "NA",
          totalDose: "2",
        },
        {
          target: "Entre 24 y 72 meses",
          numDose: "1",
          doseInterval: "Sin vacunación previa, a la edad que se encuentre.",
          reinforcement: "NA",
          totalDose: "1",
        },
        {
          target: "Adultos de 19 a 64 años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
        {
          target: "Adultos mayores de 65 años",
          numDose: "1",
          doseInterval: "1 año",
          reinforcement: "Anual",
          totalDose: "1",
        },
      ],

      recommended: [
        "Niños menores de 2 años.",
        "Personas con ciertas condiciones médicas o factores de riesgo.",

        "Para personas entre 18 y 59 años fumadores o pacientes asmáticos y personas con alto riesgo de infección.",
        "Pacientes que recibieron PCV10, no se recomienda uso PCV13. Terminar esquema de vacunación con PCV10.",
        "El esquema de vacunación debe ser completado con el mismo biológico en cualquiera de los casos.",
      ],
      notRecommended: [
        "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
        "Reacción alérgica grave (Ej:anafilaxia) a cualquier vacuna que contenga toxoide diftérico o a su componente vacunal.",
      ],
      precautions: ["Enfermedad aguda moderada o grave con o sin fiebre."],
      observations: [
        "Pacientes que no hayan recibido previamente una PCV13, PCV15 o PCV20 o cuyo historial de vacunación previa se desconozca: 1 dosis de PCV15 O 1 dosis de PCV20. Si se utiliza la PCV15, ésta debe ir seguida de una dosis de PPSV23 administrada al menos 1 año después de la dosis de PCV15. Se puede considerar un intervalo mínimo de 8 semanas entre PCV15 y PPSV23 para adultos con una enfermedad inmunocomprometida, implante coclear o fuga de líquido cefalorraquídeo.",
        "Haber recibido previamente sólo PCV7: seguir la recomendación anterior.",
        "Anteriormente recibió sólo PCV13: 1 dosis de PCV20 al menos 1 año después de la dosis de PCV13.",
        "Ha recibido previamente PCV13 y PPSV23 pero no ha completado la serie recomendada: 1 dosis de PCV20 al menos 5 años después de su última dosis de vacuna antineumocócica.",
        "Para más información visitar: www.cdc.gov/vaccines/vpd/pneumo/downloads/pne umo-vaccine-timing.pdf",
        "Para pacientes con VIH:",
        "Iniciar con PCV13 seguido de la PPSV23 (refuerzo según grupo etario). El refuerzo no está recomendado en personas con más de 65 años, si el paciente y el médico tratante deciden administrar la PCV13 ( 65 años o más) se debe seguir lo siguiente:",
        "Administre 1 dosis de PPSV23 entre los 19 y los 64 años.",
        "Administre 1 dosis de PCV13 a los 65 años o más. Esta dosis debe ser administrada al menos 1 año después de la PPSV23.",
        "Administre 1 dosis final de PPSV23 a los 65 años o más. Esta dosis debe administrarse al menos 1 año después de la PCV13 y al menos 5 años después de la dosis más reciente de PPSV23.",
        "Si el paciente y el médico deciden que la PCV13 no se administrará en pacientes con 65 años o más, se debe tener en cuenta lo siguiente:",
        "Administre 1 dosis de PPSV23 entre los 19 y los 64 años.",
        "Administrar 1 dosis final de PPSV23 a los 65 años o más. Esta dosis debe administrarse al menos 5 años después de la dosis más reciente de PPSV23.",
      ],
      coadministration: [
        "Puede administrarse de forma simultánea con los siguientes antígenos, tanto como vacunas monovalentes como combinadas: difteria, tétanos, tosferina acelular o células enteras, H. influenzae tipo b, poliomielitis inactivada, hepatitis B, ",
        "meningococo C, sarampión, rubeola, parotiditis, varicela y rotavirus. ",
        "También puede administrarse con la vacuna meningocócica de polisacáridos ACYW conjugada con toxoide tetánico (NIMENRIX®) y con la vacuna trivalente inactivada frente a gripe estacional",
      ],
    },
    {
      name: "Neumococo Vacuna polisacárida (PPSV23)",
      pai: "No",
      appliance: [
        {
          target: "Adultos de 65 años o más",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
      ],

      recommended: [
        "Para cualquier persona de 2 años o mayor con ciertos padecimientos médicos que pueden provocar un aumento de riesgo de contraer alguna enfermedad neumocócica.",
        "La mayoría de las personas necesitan solo una dosis de PPSV23. Una segunda dosis de PPSV23 y otro tipo de vacuna neumocócica denominada PCV13 se recomiendan para ciertos grupos de alto riesgo.",
        "Fumadores de cigarrillos.",
      ],
      notRecommended: [
        "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      ],
      precautions: ["Enfermedad aguda moderada o grave con o sin fiebre."],
      observations: [
        "Si ha recibido anteriormente sólo la PPSV23: 1 dosis de PCV15 O 1 dosis de PCV20 al menos 1 año después de la dosis de PPSV23. Si se utiliza PCV15, no es necesario que vaya seguida de otra dosis de PPSV23",
        "Recibió previamente tanto la PCV13 como la PPSV23, Y la PPSV23 se recibió a la edad de 65 años o más: Basándose en la toma de decisiones clínicas compartidas, 1 dosis de PCV20 al menos 5 años después de la última dosis de vacuna antineumocócica.",
        "Recibió previamente PCV13 y PPSV23 pero NO recibió PPSV23 a la edad de 65 años o más: 1 dosis de PCV20 al menos 5 años después de su última dosis de vacuna antineumocócica",
      ],
      coadministration: [
        "Puede administrarse en el mismo acto vacunal con la vacuna frente a la gripe y con cualquier otra vacuna, excepto con ZOSTAVAX® (vacuna de virus vivos atenuados frente a herpes zoster). La administración concomitante de ambas vacunas proporcionó una reducción de la inmunogenicidad de Zostavax®, en este caso se debe asegurar un intervalo de 4 semanas entre ambas.",
      ],
    },
  ],
  13: {
    name: "Hepatitis A (HepA)",
    pai: "Si, hasta los 23 meses y en zonas endémicas",
    appliance: [
      {
        target: "Niños de 12 a 23 meses",
        numDose: "1",
        doseInterval: "6 meses",
        reinforcement: "1",
        totalDose: "2",
      },
    ],
    recommended: [
      "Viajeros internacionales.",
      "Hombres que tienen contacto sexual con otros hombres.",
      "Personas que usan drogas inyectables o no inyectables.",
      "Personas que tienen riesgo ocupacional de infección.",
      "Personas sin hogar.",
      "Personas con enfermedad hepática crónica.",
      "Personas con VIH.",

      "Niños mayores y adolescentes que no se hayan vacunado.",
      "Toda persona con infección crónica por VHB y VHC y/o con cualquier hepatopatía debe ser vacunada para VHA.",
    ],
    notRecommended: [
      "Reacción alérgica grave (por ejemplo, anafilaxia) después de una dosis previa o a un componente de la vacuna incluida la neomicina.",
    ],
    precautions: ["Enfermedad aguda moderada o grave con o sin fiebre."],
    observations: [
      "Las personas embarazadas o en período de lactancia deben ser vacunadas si están en riesgo de contraer hepatitis A.",
      "El embarazo o la lactancia no son motivos para evitar la vacunación contra la hepatitis A.",
      "Se puede vacunar a personas con enfermedades leves, como el catarro común. Las personas con enfermedad moderada o severa usualmente deben esperar hasta recuperarse.",
    ],
    coadministration: ["Puede administrarse al tiempo que otras vacunas."],
  },
  14: {
    name: "Meningococo A, C, W, Y (MenACWY)",
    pai: "No",
    appliance: [
      {
        target: "Lactantes de 12 meses",
        numDose: "1",
        doseInterval: "NA",
        reinforcement:
          "Sí, a los 16 años, actualización vacuna saltada de los 13-18 años.",
        totalDose: "2",
      },
      {
        target: "Adolescentes de 11 o 12 años",
        numDose: "1",
        doseInterval: "NA",
        reinforcement:
          "Sí, a los 16 años, actualización vacuna saltada de los 13-18 años.",
        totalDose: "2",
      },
    ],
    recommended: [
      "Personas en riesgo a causa de un brote de enfermedad meningocócica de los serogrupos A, C, W o Y.",
      "Personas con el VIH.",
      "Personas cuyo bazo sufrió daños o fue extirpado, incluidas las personas con enfermedad drepanocítica.",
      "Que tengan el trastorno del sistema inmunitario 'deficiencia del componente del complemento'.",
      "Que reciba un tipo de medicamento llamado 'inhibidor del complemento'.",
      "Microbiólogos que trabajan rutinariamente con aislados de N.meningitidis.",
      "Toda persona que viaje a partes del mundo donde la enfermedad meningocócica sea frecuente, como en algunas partes de África, o viva en ellas.",
      "Estudiantes universitarios de primer año que vivan en dormitorios y no se hayan vacunado por completo con la vacuna meningocócica ACWY.",
      "Reclutas militares de EE. UU.",
      "Para MenACWY-TT(MenQuadfi), se recomienda la inmunización para individuos a partir de 12 meses de edad.",
    ],
    notRecommended: [
      "Reacción alérgica grave (ej: anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      "Sólo para MenACWY-D (Menactra) y MenACWYCRM (Menveo): reacción alérgica grave a una vacuna que contenga toxoide diftérico o CRM197.",
      "Sólo para MenACWY-TT (MenQuadfi): reacción alérgica grave a una vacuna que contenga toxoide tetánico.",
    ],
    precautions: [
      "Enfermedad aguda moderada o grave con o sin fiebre.",
      "El intervalo mínimo entre dosis de Menactra o Menveo es de 8 semanas.",
    ],
    observations: ["Dosis única: 0,5 ml (IM)."],
    coadministration: [
      "Puede administrarse el mismo día que se reciben otras vacunas habituales en la adolescencia, como refuerzo de tétanos, virus del papiloma humano y las vacunas de los viajeros. También Bexsero y ",
      "Trumenba (meningococo B) tienen autorizada la administración simultánea con MenACWY.",
    ],
  },
  15: [
    {
      name: "Meningococo B - Trumenba",
      pai: "No",
      appliance: [
        {
          target: "A partir de los 10 años",
          numDose: "2",
          doseInterval: "6 meses",
          reinforcement: "No",
          totalDose: "2",
        },
      ],
      recommended: [
        "Hay dos vacunas meningocócicas B disponibles. Se debe usar la misma vacuna en todas las dosis.",
        "Se recomiendan en personas de 10 años o más que tienen mayor riesgo de contraer la enfermedad meningocócica del serogrupo B, lo que incluye:",
        "Personas en riesgo a causa de un brote de enfermedad por meningococos del serogrupo B",
        "Personas cuyo bazo sufrió daños o fue extirpado, incluidas las personas con enfermedad drepanocítica",
        "Que tengan el trastorno del sistema inmunitario 'deficiencia del componente del complemento'",
        "Que reciba un tipo de medicamento llamado 'inhibidor del complemento'",
        "Microbiólogos que trabajan rutinariamente con aislados de N. meningitidis.",
        "Personas de 16 a 23 años (especialmente de 16 a 18 años) que deseen protección a corto plazo contra la mayoría de las cepas del serogrupo B.",
      ],
      notRecommended: [
        "Dolor, enrojecimiento o hinchazón en el sitio de administración de la inyección, cansancio, dolor de cabeza, dolor muscular o articular, fiebre o náusea después de recibir la vacuna meningocócica B.",
        "Reacción alérgica grave (por ejemplo, anafilaxia) después de una dosis anterior o a un componente de la vacuna.",
        "Mujeres embarazadas (a menos que el riesgo supere los beneficios, según consulta médica).",
      ],
      precautions: ["Enfermedad aguda moderada o grave con o sin fiebre."],
      observations: [
        "Edad preferida para la vacunación: de 16 a 18 años.",
        "También se pueden administrar a cualquier persona de 16 a 23 años para proporcionar protección a corto plazo contra la mayoría de las cepas de la enfermedad meningocócica del serogrupo B",
      ],
      coadministration: [
        "La vacuna MenB se puede administrar al mismo tiempo que las vacunas DTaP, IPV, Hib, Hep B, PCV, MenC, MenACWY, MMR y Varicela.",
      ],
    },
    {
      name: "Meningococo B - Bexsero",
      pai: "No",
      appliance: [
        {
          target: "Lactantes de 2 a 5 meses (a)",
          numDose: "2 o 3",
          doseInterval: "2 dosis: 2 meses | 3 dosis: 1 mes",
          reinforcement:
            "Entre los 12 y 15 meses de edad (al menos 6 meses después de la última dosis de la inmunización primaria) (b)",
          totalDose: "3 dosis: 4 | 2 dosis: 3",
        },
        {
          target: "Lactantes de 6 a 11 meses",
          numDose: "2",
          doseInterval: "2 meses",
          reinforcement:
            "En el 2.º año de vida (12-23 meses de edad) con un intervalo de, al menos, 2 meses entre la segunda dosis de la primovacunación y la dosis de refuerzo.",
          totalDose: "3",
        },
        {
          target: "Lactantes de 12 a 23 meses",
          numDose: "2",
          doseInterval: "2 meses",
          reinforcement:
            "Sí con un intervalo de 12 a 23 meses entre la segunda dosis de la primovacunación y la dosis de refuerzo",
          totalDose: "3",
        },
        {
          target: "Niños de 2 a 10 años, adolescentes y adultos (c)",
          numDose: "2",
          doseInterval: "1 mes",
          reinforcement: "No (d)",
          totalDose: "2",
        },
      ],
      recommended: [
        "La primera dosis no antes de los 2 meses de edad. La seguridad y eficacia de Bexsero en lactantes de menos de 8 semanas no se ha establecido.",
        "La dosis de refuerzo preferentemente antes de los 24 meses de edad (pero siguiendo el axioma de que no hay intervalos máximos entre dosis de vacunas, se puede administrar en cualquier momento a partir de los 24 meses de edad).",
        "No hay información en adultos de más de 50 años de edad.",
        "La necesidad de nuevas dosis de refuerzo no ha sido establecida.",
      ],
      notRecommended: [
        "Trastornos de la alimentación, somnolencia, llanto inusual, dolor de cabeza, diarrea, vómitos, erupción cutánea, artralgia (dolor de las articulaciones), fiebre e irritabilidad, así como hipersensibilidad, hinchazón, endurecimiento y enrojecimiento de la piel en el lugar de la inyección.",
        "Reacción alérgica grave (por ejemplo, anafilaxia) después de una dosis anterior o a un componente de la vacuna.",
      ],
      precautions: [
        "Embarazo",
        "Enfermedad aguda moderada o grave con o sin fiebre.",
        "Sensibilidad al latex",
      ],
      observations: [
        "El número de inyecciones aplicadas, y el intervalo entre ellas, varía en función de la edad del paciente",
      ],
      coadministration: [
        "La vacuna MenB se puede administrar al mismo tiempo que las vacunas DTaP, IPV, Hib, Hep B, PCV, MenC, MenACWY, MMR y Varicela.",
      ],
    },
  ],
  16: {
    name: "Polio",
    pai: "Si, hasta los 5 años.",
    appliance: [
      {
        target: "Lactantes de 2,4 y 6 meses",
        numDose: "3",
        doseInterval: "4 semanas",
        reinforcement: "A los 18 meses y a los 5 años",
        totalDose: "5",
      },
    ],
    recommended: [
      "Niños, normalmente deben recibir 4 dosis de la vacuna de la poliomielitis a los 2 meses, 4 meses, 6 a 18 meses y 4 a 6 años.",
      "Personas que viajan a ciertas partes del mundo",
      "Trabajadores de laboratorio que podrían manipular el poliovirus",
      "Trabajadores de la salud que tratan a pacientes que podrían tener poliomielitis",
      "Personas no vacunadas cuyos hijos recibirán la vacuna oral contra el virus de la poliomielitis",
      "Mujeres embarazadas con alto riesgo de infección que requieren protección inmediata.",

      "Las dosis de refuerzo corresponden al tipo de vacuna oral bivalente VOPb y tiene como edad máxima de aplicación hasta los 5 años 11 meses y 29 días, desde el 1 de Octubre de 2023 se va a implementar en Colombia la 5 vacunación de polio inactivado - VIP en lugar de la Vacuna de Polio Oral.",
    ],
    notRecommended: [
      "Reacción alérgica grave (por ejemplo, anafilaxia) después de una dosis previa o a un componente de la vacuna.",
    ],
    precautions: [
      "Para mujeres embarazadas, solo se administra si el riesgo de infección es alto y se requiere protección inmediata, ya que se conoce poco sobre los riesgos.",
      "Enfermedad aguda moderada o grave con o sin fiebre.",
    ],
    observations: [
      "Se puede vacunar a personas con enfermedades leves, como el catarro común.",
      "Se puede administrar si una embarazada está en riesgo alto de contraer la infección y requiere protección inmediata.",
    ],
    coadministration: ["Puede administrarse al tiempo que otras vacunas."],
  },
  17: {
    name: "Rotavirus",
    pai: "Si, hasta los 4 meses",
    appliance: [
      {
        target: "Lactantes 2 y 4 meses",
        numDose: "2",
        doseInterval: "2 meses",
        reinforcement: "No",
        totalDose: "2",
      },
      {
        target: "Bebés",
        numDose: "2 o 3 (dependiendo de la marca)",
        doseInterval:
          "Primera dosis antes de las 15 semanas de edad; última dosis antes de los 8 meses de edad.",
        reinforcement: "No",
        totalDose: "2 o 3",
      },
    ],
    recommended: [
      "Se administra poniendo gotas en la boca del niño.",
      "Los bebés deben recibir 2 o 3 dosis de la vacuna contra el rotavirus, dependiendo de la marca de vacuna utilizada:",
      "Antes de las 15 semanas de edad.",
      "A los 8 meses de edad.",
      "La vacuna contra el rotavirus puede administrarse al mismo tiempo que otras vacunas.",
    ],
    notRecommended: [
      "Se puede presentar irritabilidad o diarrea o vómitos temporales leves después de la vacuna.",
      "Prematuridad.",
      "Contactos domésticos inmunodeprimidos.",
      "Contactos domésticos embarazadas.",
      "Reacción alérgica grave (por ejemplo, anafilaxia) después de una dosis previa o a un componente de la vacuna.",
      "SCID (Severe Combined Immunodeficiency).",
      "Antecedentes de invaginación intestinal.",
    ],
    precautions: [
      "Inmunocompetencia alterada distinta de la SCID. Enfermedad gastrointestinal crónica.",
      "Espina bífida o extrofia vesical.",
      "Enfermedad aguda moderada o grave con o sin fiebre.",
    ],
    observations: [
      "Precaución en pacientes con:",
      "Sistema inmunitario debilitado -Inmunodeficiencia combinada grave (IDCG) ",
      "Obstrucción intestinal 'invaginación intestinal'",
    ],
    coadministration: ["Puede administrarse al tiempo que otras vacunas."],
  },
  18: [
    {
      name: "Influenza estacional - Fluzone de dosis alta",
      pai: "No",
      appliance: [
        {
          target: "Adultos >65años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
      ],
      recommended: [
        "Está indicada para su uso exclusivamente en personas de 65 años o más.",
      ],
      notRecommended: [
        "Reacción alérgica grave a cualquier componente de la vacuna, incluida la proteína del huevo, o después de la dosis anterior de cualquier vacuna contra la gripe.",
      ],
      precautions: [
        "Si se ha producido síndrome de Guillain-Barré (SGB) en las 6 semanas siguientes a la vacunación anterior contra la gripe.",
      ],
      observations: ["Ninguna."],
      coadministration: [
        "No debe combinarse mediante reconstitución ni mezclarse con ninguna otra vacuna.",
      ],
    },
    {
      name: "Influenza estacional- Vacuna Recombinante",
      pai: "No",
      appliance: [
        {
          target: "Adultos <18 años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
      ],
      recommended: [
        "Está indicada para su uso exclusivamente en personas de 18 años o más.",
      ],
      notRecommended: [
        "Edad <18 años.",
        "Personas que hayan tenido una reacción alérgica grave (como anafilaxia) a cualquier vacuna RIV4, más ",
        "allá de la cantidad de componentes, o a alguno de los componentes de la vacuna.",
      ],
      precautions: [
        "Si se ha producido síndrome de Guillain-Barré (SGB) en las 6 semanas siguientes a la vacunación anterior contra la gripe.",
        "Presencia de alguna enfermedad aguda grave o moderada con o sin fiebre.",
      ],
      observations: ["Ninguna"],
      coadministration: [
        "Se puede administrar de manera simultánea o posterior a otras vacunas con virus vivo o inactivado.",
      ],
    },
    {
      name: "Influenza estacional - Vacuna contra la influenza con coadyuvante",
      pai: "No",
      appliance: [
        {
          target: "Adultos >65años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
      ],
      recommended: [
        "Aprobada para usar en personas de 65 años de edad o más que a menudo presentan una respuesta inmunitaria de protección inferior luego de la vacunación contra la influenza en comparación con personas más jóvenes.",
      ],
      notRecommended: [
        "Reacción alérgica grave a cualquier componente de la vacuna, incluida la proteína del huevo, o después de una dosis previa de cualquier vacuna contra la influenza.",
      ],
      precautions: [
        "Si se ha producido síndrome de Guillain-Barré (SGB) en las 6 semanas siguientes a la vacunación anterior contra la gripe.",
      ],
      observations: ["Ninguna."],
      coadministration: [
        "Se puede administrar de manera simultánea o posterior a otras vacunas con virus vivo o inactivado",
      ],
    },
    {
      name: "Influenza estacional - Vacuna contra la influenza con virus vivos atenuados, intranasal",
      pai: "No",
      appliance: [
        {
          target:
            "Lactantes, Niños, Adolescentes y Adultos entre los 2-49 años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
      ],
      recommended: [
        "Todas las personas de 6 meses o más que se vacunen en cada temporada de gripe.",
        "Niños de 6 meses a 8 años podrían necesitar 2 dosis durante 1 temprada de gripe, los demás necesitan únicamente 1 dósis.",
      ],
      notRecommended: [
        "Reacción alérgica grave (por ejemplo, anafilaxia) después de una dosis previa de cualquier IIV, LAIV, ccIIV o ",
        "RIV a base de huevo de cualquier valencia o a cualquier componente de la vacuna (excluyendo huevo).",
        "Toma de medicamentos antivirales contra la influenza.",
        "Tamivir o zanamivir en las 48 horas anteriores, peramivir en los 5 días anteriores o baloxavir en los 17 días anteriores",
        "Adultos >50 años.",
        "Asplenia anatómica o funcional.",
        "Embarazo.",
        "Inmunocomprometidos.",
        "Implante coclear.",
      ],
      precautions: [
        "Si se ha producido síndomre de Guillain-Barré (SGB) en las 6 semanas siguientes a la vacunación anterior contra la gripe.",
        "Asma en mayores de 5 años.",
        "Personas con alergia al huevo con síntomas distintos a la urticaria.",
        "Afecciones medicas subyacentes (Trastornos pulmonares, Cardiovasculares, hepáticos...)",
        "Enfermedad aguda moderada o grave con o sin fiebre.",
      ],
      observations: ["Ninguna."],
      coadministration: [
        "Puede administrarse simultáneamente con otras vacunas con virus vivos o inactivadas. Si no se administran simultáneamente, se deberían dejar pasar ≥4 semanas entre la LAIV4 y otra vacuna con virus vivos.",
      ],
    },
    {
      name: "Influenza estacional - Vacuna trivalente cepa Sur",
      pai: "Si, hasta 7 meses y para mayores de 65 años",
      appliance: [
        {
          target: "Lactantes de 6 meses",
          numDose: "2",
          doseInterval: "1 mes",
          reinforcement: "No",
          totalDose: "2",
        },
        {
          target: "Mujeres gestantes de 14 semanas",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
        {
          target: "Adultos mayores de 60 años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "Si, anual",
          totalDose: "1",
        },
      ],
      recommended: [
        "Familiares convivientes de menores de 18 años con cáncer.",
        "THS: urgencias, hospitalización pediátrica, UCI adulto y pediátrica (18) ",
        "Población con diagnóstico de riesgo a partir de los 9 años se debe aplicar una dosis anual.",
      ],
      notRecommended: [
        "Alergia a antibióticos como neomicina, formaldehido u octoxinol-9. Pacientes con hipersensibilidad al huevo.",
        "Personas que han presentado convulsiones en el año anterior de la vacunación.",
        "Lactantes menores de 6 meses.",
        " Primer trimestre del embarazo.",
      ],
      precautions: [
        "Pacientes que alguna vez han tenido el síndrome de Guillain-Barré.",
        "Enfermedad aguda moderada o grave con o sin fiebre.",
      ],
      observations: [
        "Entre los 12 y 23 meses de edad: aplicar una dosis si tiene primo-vacunación con dos dosis.",
        "Si no hay vacunación previa con dos dosis, se administran dos dosis con intervalo de 4 semanas.",
      ],
      coadministration: [
        "Se puede administrar de manera simultánea o posterior a otras vacunas con virus vivo o inactivado.",
      ],
    },
  ],
  19: [
    {
      name: "Influenza estacional - Fluzone de dosis alta",
      pai: "No",
      appliance: [
        {
          target: "Adultos >65años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
      ],
      recommended: [
        "Está indicada para su uso exclusivamente en personas de 65 años o más.",
      ],
      notRecommended: [
        "Reacción alérgica grave a cualquier componente de la vacuna, incluida la proteína del huevo, o después de la dosis anterior de cualquier vacuna contra la gripe.",
      ],
      precautions: [
        "Si se ha producido síndrome de Guillain-Barré (SGB) en las 6 semanas siguientes a la vacunación anterior contra la gripe.",
      ],
      observations: ["Ninguna."],
      coadministration: [
        "No debe combinarse mediante reconstitución ni mezclarse con ninguna otra vacuna.",
      ],
    },
    {
      name: "Influenza estacional- Vacuna Recombinante",
      pai: "No",
      appliance: [
        {
          target: "Adultos <18 años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
      ],
      recommended: [
        "Está indicada para su uso exclusivamente en personas de 18 años o más.",
      ],
      notRecommended: [
        "Edad <18 años.",
        "Personas que hayan tenido una reacción alérgica grave (como anafilaxia) a cualquier vacuna RIV4, más ",
        "allá de la cantidad de componentes, o a alguno de los componentes de la vacuna.",
      ],
      precautions: [
        "Si se ha producido síndrome de Guillain-Barré (SGB) en las 6 semanas siguientes a la vacunación anterior contra la gripe.",
        "Presencia de alguna enfermedad aguda grave o moderada con o sin fiebre.",
      ],
      observations: ["Ninguna"],
      coadministration: [
        "Se puede administrar de manera simultánea o posterior a otras vacunas con virus vivo o inactivado.",
      ],
    },
    {
      name: "Influenza estacional - Vacuna contra la influenza con coadyuvante",
      pai: "No",
      appliance: [
        {
          target: "Adultos >65años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
      ],
      recommended: [
        "Aprobada para usar en personas de 65 años de edad o más que a menudo presentan una respuesta inmunitaria de protección inferior luego de la vacunación contra la influenza en comparación con personas más jóvenes.",
      ],
      notRecommended: [
        "Reacción alérgica grave a cualquier componente de la vacuna, incluida la proteína del huevo, o después de una dosis previa de cualquier vacuna contra la influenza.",
      ],
      precautions: [
        "Si se ha producido síndrome de Guillain-Barré (SGB) en las 6 semanas siguientes a la vacunación anterior contra la gripe.",
      ],
      observations: ["Ninguna."],
      coadministration: [
        "Se puede administrar de manera simultánea o posterior a otras vacunas con virus vivo o inactivado",
      ],
    },
    {
      name: "Influenza estacional - Vacuna contra la influenza con virus vivos atenuados, intranasal",
      pai: "No",
      appliance: [
        {
          target:
            "Lactantes, Niños, Adolescentes y Adultos entre los 2-49 años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
      ],
      recommended: [
        "Todas las personas de 6 meses o más que se vacunen en cada temporada de gripe.",
        "Niños de 6 meses a 8 años podrían necesitar 2 dosis durante 1 temprada de gripe, los demás necesitan únicamente 1 dósis.",
      ],
      notRecommended: [
        "Reacción alérgica grave (por ejemplo, anafilaxia) después de una dosis previa de cualquier IIV, LAIV, ccIIV o ",
        "RIV a base de huevo de cualquier valencia o a cualquier componente de la vacuna (excluyendo huevo).",
        "Toma de medicamentos antivirales contra la influenza.",
        "Tamivir o zanamivir en las 48 horas anteriores, peramivir en los 5 días anteriores o baloxavir en los 17 días anteriores",
        "Adultos >50 años.",
        "Asplenia anatómica o funcional.",
        "Embarazo.",
        "Inmunocomprometidos.",
        "Implante coclear.",
      ],
      precautions: [
        "Si se ha producido síndomre de Guillain-Barré (SGB) en las 6 semanas siguientes a la vacunación anterior contra la gripe.",
        "Asma en mayores de 5 años.",
        "Personas con alergia al huevo con síntomas distintos a la urticaria.",
        "Afecciones medicas subyacentes (Trastornos pulmonares, Cardiovasculares, hepáticos...)",
        "Enfermedad aguda moderada o grave con o sin fiebre.",
      ],
      observations: ["Ninguna."],
      coadministration: [
        "Puede administrarse simultáneamente con otras vacunas con virus vivos o inactivadas. Si no se administran simultáneamente, se deberían dejar pasar ≥4 semanas entre la LAIV4 y otra vacuna con virus vivos.",
      ],
    },
    {
      name: "Influenza estacional - Vacuna trivalente cepa Sur",
      pai: "Si, hasta 7 meses y para mayores de 65 años",
      appliance: [
        {
          target: "Lactantes de 6 meses",
          numDose: "2",
          doseInterval: "1 mes",
          reinforcement: "No",
          totalDose: "2",
        },
        {
          target: "Mujeres gestantes de 14 semanas",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "No",
          totalDose: "1",
        },
        {
          target: "Adultos mayores de 60 años",
          numDose: "1",
          doseInterval: "NA",
          reinforcement: "Si, anual",
          totalDose: "1",
        },
      ],
      recommended: [
        "Familiares convivientes de menores de 18 años con cáncer.",
        "THS: urgencias, hospitalización pediátrica, UCI adulto y pediátrica (18) ",
        "Población con diagnóstico de riesgo a partir de los 9 años se debe aplicar una dosis anual.",
      ],
      notRecommended: [
        "Alergia a antibióticos como neomicina, formaldehido u octoxinol-9. Pacientes con hipersensibilidad al huevo.",
        "Personas que han presentado convulsiones en el año anterior de la vacunación.",
        "Lactantes menores de 6 meses.",
        " Primer trimestre del embarazo.",
      ],
      precautions: [
        "Pacientes que alguna vez han tenido el síndrome de Guillain-Barré.",
        "Enfermedad aguda moderada o grave con o sin fiebre.",
      ],
      observations: [
        "Entre los 12 y 23 meses de edad: aplicar una dosis si tiene primo-vacunación con dos dosis.",
        "Si no hay vacunación previa con dos dosis, se administran dos dosis con intervalo de 4 semanas.",
      ],
      coadministration: [
        "Se puede administrar de manera simultánea o posterior a otras vacunas con virus vivo o inactivado.",
      ],
    },
  ],
  20: {
    name: "Fiebre Amarilla",
    pai: "Si, desde 1 año hasta 11 años y para zonas endémicas.",
    appliance: [
      {
        target: "Lactantes de 18 meses",
        numDose: "1",
        doseInterval: "NA",
        reinforcement: "No",
        totalDose: "1",
      },
    ],
    recommended: [
      "Recomendada para:",
      "Personas de 9 meses a 59 años que viajan a o viven en áreas de riesgo de actividad del virus de la fiebre amarilla.",
      "Trabajadores de laboratorios en los que puedan estar expuestos al virus.",
      "No debe donar sangre por 14 días después de haberse vacunado.",
      "Para personas con VIH dependerá del recuento de CD4 en el individuo, así como del riesgo inminente de exposición donde el beneficio es mayor que el riesgo. Esta vacuna solo es requerida en situaciones específicas, como el desplazamiento a zonas de alta prevalencia de la enfermedad",
      "Personas menores de 9 meses o mayores de 59 años que se encuentran en mayor riesgo (en situaciones específicas, previa consulta con el médico).",
    ],
    notRecommended: [
      "Antecedentes de reacción de hipersensibilidad aguda a una dosis previa de la vacuna contra la fiebre amarilla.",
      "Antecedentes de reacción de hipersensibilidad aguda a cualquier componente de la vacuna (incluyendo gelatina, huevos, productos de huevo o pollo proteína).",
      "Trastorno del timo asociado con una función anormal de las células inmunitarias.",
      "Infección sintomática por VIH o SIDA, Neoplasias malignas, Inmunodeficiencias primarias, Trasplante, Inmunosupresor o Terapia inmunomodulador, Radioterapia.",
      "Mujeres embarazadas o en período de lactancia (a menos que el riesgo de infección sea alto y los beneficios de la vacunación superen los riesgos potenciales, previa consulta médica).",
    ],
    precautions: [
      "Inmunización menos efectiva a personas con VIH asintomático infección con CD4+ valor de 200/mm3 –500/mm3 (15%-24% de linfocitos totales en niños < 6 años).",
      "Embarazo y Lactancia.",
      "Administración condicional para adultos ≥ 60 años.",
    ],
    observations: [
      "Basar la decisión en una cuidadosa consideración de la edad, las condiciones médicas, los medicamentos y los tratamientos, el itinerario específico planificado y la dosis de la vacuna (dosis primaria o de refuerzo).",
      "No donar sangre durante 14 días después de la vacunación para evitar la transmisión del virus de la vacuna.",
    ],
    coadministration: [
      "Puede administrarse al tiempo que otras vacunas. En el caso de vacunas de virus vivos atenuados (varicela, triple viral y fiebre amarilla), si no se aplican simultáneamente debe respetarse un intervalo de al menos 28 días entre una y otra aplicación.",
    ],
  },

  21: {
    name: "RSV-mAB",
    pai: "No",
    appliance: [
      {
        target:
          "Lactantes menores de 6 meses (mediante vacuna materna durante el embarazo)",
        numDose: "1",
        doseInterval: "—",
        reinforcement: "No",
        totalDose: "1",
      },
      {
        target: "Adultos de 75 años o más",
        numDose: "1",
        doseInterval: "—",
        reinforcement: "No",
        totalDose: "1",
      },
      {
        target: "Adultos de 60-74 años con factores de riesgo",
        numDose: "1",
        doseInterval: "—",
        reinforcement: "No",
        totalDose: "1",
      },
    ],
    recommended: [
      "Mujeres embarazadas entre las semanas 32 y 36 de gestación, especialmente durante los meses de circulación de RSV.",
      "Adultos mayores de 75 años.",
      "Adultos de 60 a 74 años con enfermedades crónicas cardíacas o pulmonares, inmunosupresión, u otras condiciones médicas crónicas.",
      "Personas mayores que viven en hogares geriátricos.",
    ],
    notRecommended: [
      "Personas con antecedentes de reacción alérgica grave a una dosis previa o a un componente de la vacuna.",
    ],
    precautions: [
      "Personas con enfermedades agudas moderadas o graves deben esperar a recuperarse.",
      "Mujeres embarazadas fuera del rango recomendado (antes de la semana 32 o después de la 36).",
    ],
    observations: [
      "La vacuna puede administrarse al mismo tiempo que otras vacunas.",
      "En adultos mayores se ha reportado síndrome de Guillain-Barré, aunque no se ha confirmado una relación directa.",
      "En embarazadas se han reportado casos de preeclampsia y parto prematuro, sin que se haya establecido causalidad.",
      "La infección por RSV puede causar enfermedades graves como bronquiolitis y neumonía en lactantes y adultos mayores.",
      "La inmunización puede realizarse mediante vacuna a la madre o anticuerpos monoclonales administrados directamente al bebé, pero no se necesitan ambos.",
    ],
    coadministration: [
      "Puede administrarse al mismo tiempo que otras vacunas.",
    ],
  },

  22: {
    name: "Viruela Símica (Mpox)",
    pai: "No",
    appliance: [
      {
        target:
          "Adultos mayores de 18 años en riesgo alto de exposición a viruela o viruela símica",
        numDose: "2",
        doseInterval: "4 semanas",
        reinforcement: "Cada 2 o 10 años si el riesgo persiste",
        totalDose: "2",
      },
      {
        target:
          "Personas que ya recibieron vacuna contra la viruela anteriormente",
        numDose: "1",
        doseInterval: "—",
        reinforcement: "Cada 2 o 10 años si el riesgo persiste",
        totalDose: "1",
      },
    ],
    recommended: [
      "Trabajadores de laboratorio que manipulan ortopoxvirus.",
      "Miembros de equipos de respuesta a emergencias en riesgo de exposición a viruela o viruela símica.",
      "Personas que administran la vacuna ACAM2000® o cuidan a pacientes con infecciones por ortopoxvirus.",
      "Personas expuestas recientemente al virus de la viruela símica (post-exposición).",
    ],
    notRecommended: [
      "Personas con antecedentes de reacción alérgica grave (anafilaxia) a una dosis previa de vacuna contra la viruela o a un componente de la vacuna.",
    ],
    precautions: [
      "Personas con inmunosupresión.",
      "Embarazo o lactancia (en vacunación rutinaria, no post-exposición).",
      "Enfermedad moderada o grave: posponer vacunación rutinaria hasta la recuperación.",
    ],
    observations: [
      "JYNNEOS™ no puede causar viruela, viruela símica ni otras enfermedades infecciosas.",
      "Puede administrarse junto con otras vacunas, aunque se recomienda esperar 4 semanas para vacunas COVID-19 en adolescentes y adultos jóvenes con riesgo de miocarditis.",
      "En caso de exposición al virus, se debe aplicar la vacuna incluso si la persona está enferma, embarazada o inmunocomprometida.",
      "Los efectos secundarios comunes incluyen dolor, enrojecimiento, picazón, fatiga, dolor de cabeza y muscular.",
      "Casos graves o reacciones adversas deben reportarse a VAERS o pueden estar cubiertos por el Programa de Compensación por Lesiones por Contramedidas.",
    ],
    coadministration: [
      "Puede administrarse al tiempo con otras vacunas, con precaución específica respecto a ciertas vacunas COVID-19.",
    ],
  },
  23: {
    name: "Dengue",
    pai: "No",
    appliance: [
      {
        target:
          "Niños de 9 a 16 años con antecedente confirmado de infección previa por dengue",
        numDose: "3",
        doseInterval: "Cada 6 meses",
        reinforcement: "No",
        totalDose: "3",
      },
    ],
    recommended: [
      "Niños entre 9 y 16 años con prueba de laboratorio que confirme infección previa por dengue.",
      "Residentes de zonas endémicas de dengue como Puerto Rico, Samoa Americana, Islas Vírgenes de EE.UU., Estados Federados de Micronesia, Islas Marshall y Palaos.",
    ],
    notRecommended: [
      "Viajeros a zonas endémicas sin antecedentes de infección por dengue.",
      "Niños sin infección previa por dengue confirmada por laboratorio, ya que el riesgo de dengue grave aumenta tras la vacunación en estos casos.",
    ],
    precautions: [
      "Personas con antecedentes de reacción alérgica grave a una dosis anterior o a un componente de la vacuna.",
      "Sistema inmune debilitado.",
      "Embarazo o lactancia: deben discutir los beneficios y riesgos con su proveedor.",
      "Enfermedad moderada o grave: posponer la vacunación hasta la recuperación.",
    ],
    observations: [
      "La vacuna puede administrarse al mismo tiempo que otras vacunas.",
      "La mayoría de las infecciones por dengue son leves o asintomáticas, pero algunas pueden causar enfermedad grave, hospitalización o incluso la muerte.",
      "Los signos de advertencia de dengue grave suelen aparecer entre 12 y 24 horas después de que desaparece la fiebre.",
      "La vacunación en personas sin infección previa por dengue puede aumentar el riesgo de dengue grave en caso de infección posterior.",
    ],
    coadministration: ["Puede administrarse al tiempo con otras vacunas."],
  },
  24: {
    name: "Pentavalente (DPT-HB-Hib)",
    pai: "Sí",
    appliance: [
      {
        target: "Niños menores de 1 año",
        numDose: "3",
        doseInterval: "2 meses entre cada dosis",
        reinforcement: "Sí, a los 18 meses",
        totalDose: "4",
      },
    ],
    recommended: [
      "Ver detalles en DPT (difteria, tétanos y tos ferina)",
      "Ver detalles en Haemophilus influenzae tipo b",
      "Ver detalles en Hepatitis B",
    ],
    notRecommended: [
      "Ver detalles en DPT (difteria, tétanos y tos ferina)",
      "Ver detalles en Haemophilus influenzae tipo b",
      "Ver detalles en Hepatitis B",
    ],
    precautions: [
      "Ver detalles en DPT (difteria, tétanos y tos ferina)",
      "Ver detalles en Haemophilus influenzae tipo b",
      "Ver detalles en Hepatitis B",
    ],
    observations: [
      "Ver detalles en DPT (difteria, tétanos y tos ferina)",
      "Ver detalles en Haemophilus influenzae tipo b",
      "Ver detalles en Hepatitis B",
    ],
    coadministration: [
      "Ver detalles en DPT (difteria, tétanos y tos ferina)",
      "Ver detalles en Haemophilus influenzae tipo b",
      "Ver detalles en Hepatitis B",
    ],
  },
  25: {
    name: "RSV-mAB",
    pai: "No",
    appliance: [
      {
        target:
          "Lactantes menores de 6 meses (mediante vacuna materna durante el embarazo)",
        numDose: "1",
        doseInterval: "—",
        reinforcement: "No",
        totalDose: "1",
      },
      {
        target: "Adultos de 75 años o más",
        numDose: "1",
        doseInterval: "—",
        reinforcement: "No",
        totalDose: "1",
      },
      {
        target: "Adultos de 60-74 años con factores de riesgo",
        numDose: "1",
        doseInterval: "—",
        reinforcement: "No",
        totalDose: "1",
      },
    ],
    recommended: [
      "Mujeres embarazadas entre las semanas 32 y 36 de gestación, especialmente durante los meses de circulación de RSV.",
      "Adultos mayores de 75 años.",
      "Adultos de 60 a 74 años con enfermedades crónicas cardíacas o pulmonares, inmunosupresión, u otras condiciones médicas crónicas.",
      "Personas mayores que viven en hogares geriátricos.",
    ],
    notRecommended: [
      "Personas con antecedentes de reacción alérgica grave a una dosis previa o a un componente de la vacuna.",
    ],
    precautions: [
      "Personas con enfermedades agudas moderadas o graves deben esperar a recuperarse.",
      "Mujeres embarazadas fuera del rango recomendado (antes de la semana 32 o después de la 36).",
    ],
    observations: [
      "La vacuna puede administrarse al mismo tiempo que otras vacunas.",
      "En adultos mayores se ha reportado síndrome de Guillain-Barré, aunque no se ha confirmado una relación directa.",
      "En embarazadas se han reportado casos de preeclampsia y parto prematuro, sin que se haya establecido causalidad.",
      "La infección por RSV puede causar enfermedades graves como bronquiolitis y neumonía en lactantes y adultos mayores.",
      "La inmunización puede realizarse mediante vacuna a la madre o anticuerpos monoclonales administrados directamente al bebé, pero no se necesitan ambos.",
    ],
    coadministration: [
      "Puede administrarse al mismo tiempo que otras vacunas.",
    ],
  },
};

export default vaccineList;

export const areas = [
  {
    "id": "fisica",
    "name": "Física nuclear y partículas",
    "short": "Física nuclear",
    "icon": "atom",
    "description": "Comprende la materia, sus interacciones y la estructura del núcleo."
  },
  {
    "id": "energia",
    "name": "Energía y reactores",
    "short": "Energía nuclear",
    "icon": "reactor",
    "description": "Del comportamiento del neutrón a los sistemas que producen energía."
  },
  {
    "id": "medicina",
    "name": "Física médica e imagenología",
    "short": "Física médica",
    "icon": "scan",
    "description": "Explora la física detrás del diagnóstico, la imagen y el tratamiento."
  },
  {
    "id": "proteccion",
    "name": "Protección radiológica",
    "short": "Protección radiológica",
    "icon": "shield",
    "description": "Desarrolla criterio para una cultura de seguridad y protección."
  },
  {
    "id": "instrumentacion",
    "name": "Metrología e instrumentación",
    "short": "Instrumentación",
    "icon": "wave",
    "description": "Mide con confianza. Conecta detectores, señales e incertidumbre."
  },
  {
    "id": "investigacion",
    "name": "Computación e investigación",
    "short": "Investigación",
    "icon": "chart",
    "description": "Convierte datos y modelos en nuevas preguntas y conocimiento."
  },
  {
    "id": "fundamentos",
    "name": "Fundamentos de ingeniería",
    "short": "Fundamentos",
    "icon": "grid",
    "description": "Construye una base sólida en materiales, electrónica y termofluidos."
  }
];
export const courses = [
  {
    "id": 1,
    "title": "Seguridad y Protección Radiológica",
    "area": "proteccion",
    "provider": "Politécnico de Suramérica",
    "level": "Inicial",
    "language": "Español",
    "url": "https://www.polisura.edu.co/diplomado-virtual-gratis/curso-diplomado-seguridad-y-proteccion-radiologica",
    "description": "Introduce las bases de la protección frente a radiaciones ionizantes y su aplicación responsable.",
    "topics": [
      "Magnitudes radiológicas",
      "Principios de protección",
      "Responsabilidad y prevención"
    ],
    "cost": "certificado-pago",
    "certificate": "De pago",
    "availability": "A tu ritmo",
    "format": "Diplomado",
    "hours": 120,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "ALARA",
      "dosimetría"
    ],
    "certificatePrice": "Certificado opcional: consultar tarifa vigente."
  },
  {
    "id": 2,
    "title": "Metrología Básica",
    "area": "instrumentacion",
    "provider": "Inmetro / Enap",
    "level": "Inicial",
    "language": "Portugués",
    "url": "https://www.escolavirtual.gov.br/curso/386",
    "description": "Una base para comprender las mediciones, las unidades y la calidad de los resultados experimentales.",
    "topics": [
      "Sistema Internacional de Unidades",
      "Trazabilidad de las mediciones",
      "Fundamentos de metrología"
    ],
    "cost": "gratis",
    "certificate": "Incluido",
    "availability": "A tu ritmo",
    "format": "Autoestudio",
    "hours": 20,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 3,
    "title": "Programación en Python",
    "area": "investigacion",
    "provider": "Universidad Nacional de San Martín",
    "level": "Inicial",
    "language": "Español",
    "url": "https://github.com/python-unsam/Programacion_en_Python",
    "description": "Aprende a programar y a trabajar con datos; una herramienta esencial para la investigación científica.",
    "topics": [
      "Estructuras de datos",
      "Programación y archivos",
      "Análisis de datos"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Autoestudio",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Material abierto",
    "checkedAt": "2026-11-21",
    "tags": [
      "código",
      "datos"
    ]
  },
  {
    "id": 4,
    "title": "Introducción a la Física Moderna",
    "area": "fisica",
    "provider": "Universidad de la República · OpenFing",
    "level": "Inicial",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/fm/",
    "description": "Acércate a los fenómenos que conectan la física clásica con la física nuclear.",
    "topics": [
      "Efecto fotoeléctrico",
      "Radiación y materia",
      "Introducción a la física cuántica"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 5,
    "title": "Métodos Numéricos",
    "area": "investigacion",
    "provider": "Universidad de la República · OpenFing",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/metn-2023/",
    "description": "Resuelve problemas mediante aproximaciones computacionales cuando una solución analítica resulta difícil.",
    "topics": [
      "Aproximación numérica",
      "Resolución de ecuaciones",
      "Errores y convergencia"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 6,
    "title": "Probabilidad y Estadística",
    "area": "investigacion",
    "provider": "Universidad de la República · OpenFing",
    "level": "Inicial",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/pye-2022/",
    "description": "Interpreta la dispersión de las mediciones y fundamenta tus conclusiones experimentales.",
    "topics": [
      "Variables aleatorias",
      "Distribuciones de probabilidad",
      "Inferencia estadística"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 7,
    "title": "Electromagnetismo",
    "area": "fundamentos",
    "provider": "Universidad de la República · OpenFing",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/em-2024/",
    "description": "Comprende los campos que intervienen en detectores, instrumentación y aceleradores.",
    "topics": [
      "Campos eléctricos",
      "Campos magnéticos",
      "Inducción electromagnética"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 8,
    "title": "Electrónica 1",
    "area": "instrumentacion",
    "provider": "Universidad de la República · OpenFing",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/e1/",
    "description": "Construye una base de electrónica analógica para comprender el tratamiento de señales.",
    "topics": [
      "Componentes electrónicos",
      "Amplificación",
      "Circuitos analógicos"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 9,
    "title": "Señales y Sistemas",
    "area": "instrumentacion",
    "provider": "Universidad de la República · OpenFing",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/seys/",
    "description": "Estudia cómo una señal se transforma al atravesar un sistema de medición.",
    "topics": [
      "Representación de señales",
      "Sistemas lineales",
      "Análisis en frecuencia"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 10,
    "title": "Muestreo y Procesamiento Digital de Señales",
    "area": "instrumentacion",
    "provider": "Universidad de la República · OpenFing",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/mpd/",
    "description": "Conecta el mundo analógico con los datos que puedes procesar en una computadora.",
    "topics": [
      "Muestreo",
      "Transformadas discretas",
      "Filtrado digital"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 11,
    "title": "Física Térmica",
    "area": "fundamentos",
    "provider": "Universidad de la República · OpenFing",
    "level": "Inicial",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/ft/",
    "description": "Comprende el calor, la temperatura y las transformaciones de energía.",
    "topics": [
      "Termodinámica",
      "Transferencia de energía",
      "Propiedades térmicas"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 12,
    "title": "Elementos de Mecánica de los Fluidos",
    "area": "fundamentos",
    "provider": "Universidad de la República · OpenFing",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/emf/",
    "description": "Prepara las bases para estudiar circuitos de refrigeración y termohidráulica.",
    "topics": [
      "Propiedades de fluidos",
      "Balances de conservación",
      "Flujo y pérdidas"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 13,
    "title": "Comportamiento Mecánico de Materiales 1",
    "area": "fundamentos",
    "provider": "Universidad de la República · OpenFing",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/cmm1/",
    "description": "Analiza cómo responden los materiales a esfuerzos y deformaciones.",
    "topics": [
      "Tensiones",
      "Deformaciones",
      "Comportamiento elástico"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 14,
    "title": "Comportamiento Mecánico de Materiales 2",
    "area": "fundamentos",
    "provider": "Universidad de la República · OpenFing",
    "level": "Avanzado",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/cmm2/",
    "description": "Profundiza en el comportamiento de los materiales y la integridad de componentes.",
    "topics": [
      "Respuesta mecánica",
      "Modelos de materiales",
      "Integridad estructural"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 15,
    "title": "Teoría de Circuitos",
    "area": "instrumentacion",
    "provider": "Universidad de la República · OpenFing",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/tdc2020/",
    "description": "Consolida el análisis de circuitos para avanzar hacia sistemas de adquisición de datos.",
    "topics": [
      "Redes eléctricas",
      "Respuesta temporal",
      "Análisis de circuitos"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 16,
    "title": "Electrónica 2",
    "area": "instrumentacion",
    "provider": "Universidad de la República · OpenFing",
    "level": "Avanzado",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/e2/",
    "description": "Continúa la formación en electrónica a partir de los fundamentos de circuitos analógicos.",
    "topics": [
      "Circuitos electrónicos",
      "Respuesta en frecuencia",
      "Diseño y análisis"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 17,
    "title": "Electrónica de Potencia",
    "area": "fundamentos",
    "provider": "Universidad de la República · OpenFing",
    "level": "Avanzado",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/ep/",
    "description": "Explora la conversión y el control de energía eléctrica en equipos e instalaciones.",
    "topics": [
      "Convertidores",
      "Dispositivos de potencia",
      "Control de energía"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 18,
    "title": "Metalurgia Física",
    "area": "energia",
    "provider": "Universidad de la República · OpenFing",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://open.fing.edu.uy/courses/metfis-2026/",
    "description": "Relaciona la estructura de los metales con sus propiedades en aplicaciones de ingeniería.",
    "topics": [
      "Estructura de materiales",
      "Transformaciones de fase",
      "Propiedades de metales"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Videoclases",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": []
  },
  {
    "id": 19,
    "title": "Gestión de la dosis de radiación en tomografía computarizada",
    "area": "medicina",
    "provider": "OIEA / IAEA",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://www.iaea.org/resources/rpop/resources/online-training",
    "description": "Conoce el enfoque de optimización de dosis en estudios de tomografía computarizada.",
    "topics": [
      "Dosis en TC",
      "Optimización",
      "Protección del paciente"
    ],
    "cost": "gratis",
    "certificate": "Por verificar",
    "availability": "A tu ritmo",
    "format": "Autoestudio",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Acceso mediante catálogo",
    "checkedAt": null,
    "tags": [
      "TC",
      "CT",
      "tomografía",
      "dosimetría"
    ]
  },
  {
    "id": 20,
    "title": "Protección radiológica en procedimientos intervencionistas",
    "area": "proteccion",
    "provider": "OIEA / IAEA",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://www.iaea.org/resources/rpop/resources/online-training",
    "description": "Explora la protección de pacientes y personal en procedimientos guiados por imagen.",
    "topics": [
      "Radiología intervencionista",
      "Exposición ocupacional",
      "Buenas prácticas"
    ],
    "cost": "gratis",
    "certificate": "Por verificar",
    "availability": "A tu ritmo",
    "format": "Autoestudio",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Acceso mediante catálogo",
    "checkedAt": null,
    "tags": [
      "fluoroscopia"
    ]
  },
  {
    "id": 21,
    "title": "Niveles de referencia para diagnóstico en imagenología médica",
    "area": "medicina",
    "provider": "OIEA / IAEA",
    "level": "Intermedio",
    "language": "Por verificar",
    "url": "https://www.iaea.org/resources/rpop/resources/online-training",
    "description": "Comprende el papel de los niveles de referencia al comparar prácticas de diagnóstico.",
    "topics": [
      "Niveles de referencia",
      "Evaluación de dosis",
      "Optimización de prácticas"
    ],
    "cost": "gratis",
    "certificate": "Por verificar",
    "availability": "A tu ritmo",
    "format": "Autoestudio",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Acceso mediante catálogo",
    "checkedAt": null,
    "tags": [
      "NRD",
      "DRL",
      "dosimetría"
    ]
  },
  {
    "id": 22,
    "title": "Protección radiológica en radiología dental",
    "area": "proteccion",
    "provider": "OIEA / IAEA",
    "level": "Inicial",
    "language": "Español",
    "url": "https://www.iaea.org/resources/rpop/resources/online-training",
    "description": "Acércate a los principios de protección aplicados a equipos y procedimientos odontológicos.",
    "topics": [
      "Radiología dental",
      "Justificación",
      "Protección del paciente"
    ],
    "cost": "gratis",
    "certificate": "Por verificar",
    "availability": "A tu ritmo",
    "format": "Autoestudio",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Acceso mediante catálogo",
    "checkedAt": null,
    "tags": [
      "odontología"
    ]
  },
  {
    "id": 23,
    "title": "Seguridad y calidad en radioterapia",
    "area": "medicina",
    "provider": "OIEA / IAEA",
    "level": "Intermedio",
    "language": "Español",
    "url": "https://www.iaea.org/resources/rpop/resources/online-training",
    "description": "Explora la relación entre seguridad del paciente y calidad de los procedimientos de radioterapia.",
    "topics": [
      "Calidad de procesos",
      "Seguridad del paciente",
      "Cultura de seguridad"
    ],
    "cost": "gratis",
    "certificate": "Por verificar",
    "availability": "A tu ritmo",
    "format": "Autoestudio",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Acceso mediante catálogo",
    "checkedAt": null,
    "tags": [
      "oncología"
    ]
  },
  {
    "id": 24,
    "title": "Preparación y respuesta médica a emergencias radiológicas",
    "area": "proteccion",
    "provider": "OIEA / IAEA",
    "level": "Intermedio",
    "language": "Inglés",
    "url": "https://elearning.iaea.org/",
    "description": "Introduce la preparación sanitaria ante situaciones de exposición a radiación.",
    "topics": [
      "Preparación sanitaria",
      "Respuesta médica",
      "Coordinación de emergencias"
    ],
    "cost": "gratis",
    "certificate": "Por verificar",
    "availability": "A tu ritmo",
    "format": "Autoestudio",
    "hours": 3,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Acceso mediante catálogo",
    "checkedAt": null,
    "tags": [
      "emergencias"
    ]
  },
  {
    "id": 25,
    "title": "MSK Basics · Medicina nuclear musculoesquelética",
    "area": "medicina",
    "provider": "ESMIT / EANM",
    "level": "Intermedio",
    "language": "Inglés",
    "url": "https://esmit.eanm.org/nucmed-essentials/",
    "description": "Explora aplicaciones diagnósticas y terapéuticas de medicina nuclear en el sistema musculoesquelético.",
    "topics": [
      "Imagen musculoesquelética",
      "Aplicaciones diagnósticas",
      "Aplicaciones terapéuticas"
    ],
    "cost": "gratis",
    "certificate": "Créditos CME",
    "availability": "A tu ritmo",
    "format": "Autoestudio",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [],
    "note": "La institución anuncia 5 créditos CME hasta noviembre de 2027. Consulta sus condiciones."
  },
  {
    "id": 26,
    "title": "AI Basics · Inteligencia artificial en medicina nuclear",
    "area": "investigacion",
    "provider": "ESMIT / EANM",
    "level": "Inicial",
    "language": "Inglés",
    "url": "https://esmit.eanm.org/nucmed-essentials/",
    "description": "Descubre conceptos de aprendizaje automático y profundo aplicados a medicina nuclear.",
    "topics": [
      "Aprendizaje automático",
      "Aprendizaje profundo",
      "Aplicaciones en medicina nuclear"
    ],
    "cost": "gratis",
    "certificate": "Créditos CME",
    "availability": "A tu ritmo",
    "format": "Autoestudio",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "IA",
      "AI",
      "machine learning"
    ],
    "note": "La institución anuncia 2,5 créditos CME hasta agosto de 2028. Consulta sus condiciones."
  },
  {
    "id": 27,
    "title": "Introducción a la ingeniería nuclear y la radiación ionizante",
    "area": "fisica",
    "provider": "MIT OpenCourseWare",
    "level": "Inicial",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/",
    "description": "Un punto de partida para estudiar los modelos nucleares, la radiactividad y sus aplicaciones.",
    "topics": [
      "Estructura nuclear",
      "Radiación ionizante",
      "Aplicaciones nucleares"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "22.01"
    ]
  },
  {
    "id": 28,
    "title": "Introducción a la física nuclear aplicada",
    "area": "fisica",
    "provider": "MIT OpenCourseWare",
    "level": "Intermedio",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/22-02-introduction-to-applied-nuclear-physics-spring-2012/",
    "description": "Relaciona la estructura del núcleo con los procesos de decaimiento y la interacción con la materia.",
    "topics": [
      "Modelos nucleares",
      "Decaimientos radiactivos",
      "Interacción con la materia"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "22.02"
    ]
  },
  {
    "id": 29,
    "title": "Ciencia de neutrones y física de reactores",
    "area": "energia",
    "provider": "MIT OpenCourseWare",
    "level": "Intermedio",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/22-05-neutron-science-and-reactor-physics-fall-2009/",
    "description": "Avanza desde la física nuclear hacia el comportamiento de los neutrones en reactores.",
    "topics": [
      "Interacciones neutrónicas",
      "Transporte de neutrones",
      "Física de reactores"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "22.05"
    ]
  },
  {
    "id": 30,
    "title": "Materiales en ingeniería nuclear",
    "area": "energia",
    "provider": "MIT OpenCourseWare",
    "level": "Avanzado",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/22-14-materials-in-nuclear-engineering-spring-2015/",
    "description": "Estudia el comportamiento de materiales empleados en sistemas nucleares.",
    "topics": [
      "Materiales estructurales",
      "Efectos de la irradiación",
      "Propiedades y desempeño"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "22.14"
    ]
  },
  {
    "id": 31,
    "title": "Ingeniería de reactores nucleares",
    "area": "energia",
    "provider": "MIT OpenCourseWare",
    "level": "Avanzado",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/22-312-engineering-of-nuclear-reactors-fall-2015/",
    "description": "Profundiza en los fundamentos de ingeniería, termofluidos y componentes de reactores.",
    "topics": [
      "Termohidráulica",
      "Transferencia de calor",
      "Sistemas del reactor"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "22.312"
    ]
  },
  {
    "id": 32,
    "title": "Integración del diseño, operación y seguridad de reactores",
    "area": "energia",
    "provider": "MIT OpenCourseWare",
    "level": "Avanzado",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/22-39-integration-of-reactor-design-operations-and-safety-fall-2006/",
    "description": "Conecta el diseño de una central con su operación y evaluación de seguridad.",
    "topics": [
      "Diseño integrado",
      "Operación",
      "Evaluación de seguridad"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "22.39"
    ]
  },
  {
    "id": 33,
    "title": "Física Cuántica I",
    "area": "fisica",
    "provider": "MIT OpenCourseWare",
    "level": "Intermedio",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/",
    "description": "Refuerza las bases cuánticas necesarias para comprender fenómenos nucleares y de partículas.",
    "topics": [
      "Función de onda",
      "Ecuación de Schrödinger",
      "Estados cuánticos"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "8.04"
    ]
  },
  {
    "id": 34,
    "title": "Introducción a la física nuclear y de partículas",
    "area": "fisica",
    "provider": "MIT OpenCourseWare",
    "level": "Avanzado",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/8-701-introduction-to-nuclear-and-particle-physics-fall-2020/",
    "description": "Explora las partículas elementales y los fundamentos de las interacciones nucleares.",
    "topics": [
      "Partículas elementales",
      "Interacciones fundamentales",
      "Física nuclear"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "8.701"
    ]
  },
  {
    "id": 35,
    "title": "Fundamentos de detección de radiación",
    "area": "instrumentacion",
    "provider": "Texas A&M · NSSEP",
    "level": "Inicial",
    "language": "Inglés",
    "url": "https://nsspi.tamu.edu/nssep/basic-nuclear-science-courses/basic-radiation-detection/",
    "description": "Conecta los principios físicos de detección con las características de los instrumentos.",
    "topics": [
      "Interacción de la radiación",
      "Principios de detección",
      "Instrumentación"
    ],
    "cost": "por-verificar",
    "certificate": "Por verificar",
    "availability": "Consultar institución",
    "format": "Autoestudio",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "detectores",
      "espectrometría"
    ]
  },
  {
    "id": 36,
    "title": "Evaluación de la incertidumbre de medición",
    "area": "instrumentacion",
    "provider": "Inmetro / UnInmetro",
    "level": "Avanzado",
    "language": "Portugués",
    "url": "https://www.gov.br/inmetro/pt-br/centrais-de-conteudo/noticias/2026/inmetro-abre-inscricoes-para-curso-de-avaliacao-de-incerteza-de-medicao-1",
    "description": "Profundiza en la expresión de incertidumbre y la evaluación de resultados de medición.",
    "topics": [
      "Fuentes de incertidumbre",
      "Propagación de incertidumbre",
      "Expresión de resultados"
    ],
    "cost": "pago",
    "certificate": "Por verificar",
    "availability": "Inscripción cerrada",
    "format": "Clases y autoestudio",
    "hours": 40,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "GUM",
      "metrología"
    ],
    "price": "R$ 1.035",
    "note": "La convocatoria publicada cerró el 10 de noviembre de 2026. Se conserva como referencia; no se presupone una nueva edición."
  },
  {
    "id": 37,
    "title": "Principios de imagenología médica",
    "area": "medicina",
    "provider": "MIT OpenCourseWare",
    "level": "Intermedio",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/22-058-principles-of-medical-imaging-fall-2002/",
    "description": "Comprende los principios físicos detrás de distintas modalidades de imagen médica.",
    "topics": [
      "Formación de imágenes",
      "Modalidades de imagen",
      "Resolución y calidad"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "22.058"
    ]
  },
  {
    "id": 38,
    "title": "Métodos numéricos esenciales para aplicaciones nucleares",
    "area": "investigacion",
    "provider": "MIT OpenCourseWare",
    "level": "Avanzado",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/22-15-essential-numerical-methods-fall-2014/",
    "description": "Amplía tus herramientas computacionales para modelar problemas de ingeniería nuclear.",
    "topics": [
      "Métodos computacionales",
      "Solución de ecuaciones",
      "Modelización numérica"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "22.15"
    ]
  },
  {
    "id": 39,
    "title": "Introducción a la Física de Plasmas I",
    "area": "energia",
    "provider": "MIT OpenCourseWare",
    "level": "Avanzado",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/22-611j-introduction-to-plasma-physics-i-fall-2003/",
    "description": "Estudia los fundamentos de los plasmas, una base para explorar la energía de fusión.",
    "topics": [
      "Movimiento de partículas",
      "Modelos de plasma",
      "Ondas y campos"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "22.611j"
    ]
  },
  {
    "id": 40,
    "title": "Análisis de sistemas del ciclo del combustible nuclear",
    "area": "energia",
    "provider": "MIT OpenCourseWare",
    "level": "Avanzado",
    "language": "Inglés",
    "url": "https://ocw.mit.edu/courses/22-251-systems-analysis-of-the-nuclear-fuel-cycle-fall-2009/",
    "description": "Analiza el ciclo del combustible nuclear desde una perspectiva de sistemas.",
    "topics": [
      "Ciclo del combustible",
      "Evaluación de sistemas",
      "Alternativas tecnológicas"
    ],
    "cost": "gratis",
    "certificate": "No incluido",
    "availability": "A tu ritmo",
    "format": "Material universitario",
    "hours": null,
    "prerequisites": "Consulta los conocimientos previos en la institución de origen.",
    "sourceStatus": "Fuente consultada",
    "checkedAt": "2026-11-21",
    "tags": [
      "22.251"
    ]
  }
];

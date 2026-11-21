-- Original editorial study prompts; no third-party course content is reproduced.
begin;
insert into public.courses (id, metadata) values (1, '{"id":1,"title":"Seguridad y Protección Radiológica","area":"proteccion","provider":"Politécnico de Suramérica","level":"Inicial","language":"Español","url":"https://www.polisura.edu.co/diplomado-virtual-gratis/curso-diplomado-seguridad-y-proteccion-radiologica","description":"Introduce las bases de la protección frente a radiaciones ionizantes y su aplicación responsable.","topics":["Magnitudes radiológicas","Principios de protección","Responsabilidad y prevención"],"cost":"certificado-pago","certificate":"De pago","availability":"A tu ritmo","format":"Diplomado","hours":120,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["ALARA","dosimetría"],"certificatePrice":"Certificado opcional: consultar tarifa vigente."}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (1, 'Guía de estudio · Seguridad y Protección Radiológica', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Magnitudes radiológicas, Principios de protección, Responsabilidad y prevención.

Durante el estudio
Identifica qué principio de protección aborda cada ejemplo del curso. Distingue justificación, optimización y límites aplicables según la fuente. Resume el papel de la formación y la supervisión competente.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (2, '{"id":2,"title":"Metrología Básica","area":"instrumentacion","provider":"Inmetro / Enap","level":"Inicial","language":"Portugués","url":"https://www.escolavirtual.gov.br/curso/386","description":"Una base para comprender las mediciones, las unidades y la calidad de los resultados experimentales.","topics":["Sistema Internacional de Unidades","Trazabilidad de las mediciones","Fundamentos de metrología"],"cost":"gratis","certificate":"Incluido","availability":"A tu ritmo","format":"Autoestudio","hours":20,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (2, 'Guía de estudio · Metrología Básica', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Sistema Internacional de Unidades, Trazabilidad de las mediciones, Fundamentos de metrología.

Durante el estudio
Elige una magnitud del curso. Identifica su unidad, el principio de medición y posibles fuentes de incertidumbre. Distingue precisión, exactitud y trazabilidad con un ejemplo académico.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (3, '{"id":3,"title":"Programación en Python","area":"investigacion","provider":"Universidad Nacional de San Martín","level":"Inicial","language":"Español","url":"https://github.com/python-unsam/Programacion_en_Python_UNSAM","description":"Aprende a programar y a trabajar con datos; una herramienta esencial para la investigación científica.","topics":["Estructuras de datos","Programación y archivos","Análisis de datos"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Autoestudio","hours":null,"prerequisites":"Se recomienda alguna experiencia previa en programación. No se exige conocer Python.","sourceStatus":"Material abierto de una edición anterior","checkedAt":"2026-11-21","tags":["código","datos"],"note":"Material de una edición anterior disponible para autoestudio. La institución indica que esta cursada virtual no se está dictando actualmente."}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (3, 'Guía de estudio · Programación en Python', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Estructuras de datos, Programación y archivos, Análisis de datos.

Durante el estudio
Formula una pregunta que pueda responderse con datos. Define las variables y los supuestos. Piensa cómo validarías el resultado y qué fuentes de error o sesgo deberías comunicar.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (4, '{"id":4,"title":"Introducción a la Física Moderna","area":"fisica","provider":"Universidad de la República · OpenFing","level":"Inicial","language":"Español","url":"https://open.fing.edu.uy/courses/fm/","description":"Acércate a los fenómenos que conectan la física clásica con la física nuclear.","topics":["Efecto fotoeléctrico","Radiación y materia","Introducción a la física cuántica"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (4, 'Guía de estudio · Introducción a la Física Moderna', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Efecto fotoeléctrico, Radiación y materia, Introducción a la física cuántica.

Durante el estudio
Distingue entre un modelo físico y la observación que lo respalda. Identifica las magnitudes, unidades y supuestos utilizados. Explica con tus palabras una limitación del modelo.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (5, '{"id":5,"title":"Métodos Numéricos","area":"investigacion","provider":"Universidad de la República · OpenFing","level":"Intermedio","language":"Español","url":"https://open.fing.edu.uy/courses/metn-2023/","description":"Resuelve problemas mediante aproximaciones computacionales cuando una solución analítica resulta difícil.","topics":["Aproximación numérica","Resolución de ecuaciones","Errores y convergencia"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (5, 'Guía de estudio · Métodos Numéricos', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Aproximación numérica, Resolución de ecuaciones, Errores y convergencia.

Durante el estudio
Formula una pregunta que pueda responderse con datos. Define las variables y los supuestos. Piensa cómo validarías el resultado y qué fuentes de error o sesgo deberías comunicar.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (6, '{"id":6,"title":"Probabilidad y Estadística","area":"investigacion","provider":"Universidad de la República · OpenFing","level":"Inicial","language":"Español","url":"https://open.fing.edu.uy/courses/pye-2022/","description":"Interpreta la dispersión de las mediciones y fundamenta tus conclusiones experimentales.","topics":["Variables aleatorias","Distribuciones de probabilidad","Inferencia estadística"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (6, 'Guía de estudio · Probabilidad y Estadística', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Variables aleatorias, Distribuciones de probabilidad, Inferencia estadística.

Durante el estudio
Formula una pregunta que pueda responderse con datos. Define las variables y los supuestos. Piensa cómo validarías el resultado y qué fuentes de error o sesgo deberías comunicar.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (7, '{"id":7,"title":"Electromagnetismo","area":"fundamentos","provider":"Universidad de la República · OpenFing","level":"Intermedio","language":"Español","url":"https://open.fing.edu.uy/courses/em-2024/","description":"Comprende los campos que intervienen en detectores, instrumentación y aceleradores.","topics":["Campos eléctricos","Campos magnéticos","Inducción electromagnética"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (7, 'Guía de estudio · Electromagnetismo', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Campos eléctricos, Campos magnéticos, Inducción electromagnética.

Durante el estudio
Enumera las leyes o relaciones principales del tema. Revisa las unidades de cada magnitud y explicita las aproximaciones. Conecta una de estas ideas con una aplicación nuclear a nivel conceptual.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (8, '{"id":8,"title":"Electrónica 1","area":"instrumentacion","provider":"Universidad de la República · OpenFing","level":"Intermedio","language":"Español","url":"https://open.fing.edu.uy/courses/e1/","description":"Construye una base de electrónica analógica para comprender el tratamiento de señales.","topics":["Componentes electrónicos","Amplificación","Circuitos analógicos"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (8, 'Guía de estudio · Electrónica 1', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Componentes electrónicos, Amplificación, Circuitos analógicos.

Durante el estudio
Elige una magnitud del curso. Identifica su unidad, el principio de medición y posibles fuentes de incertidumbre. Distingue precisión, exactitud y trazabilidad con un ejemplo académico.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (9, '{"id":9,"title":"Señales y Sistemas","area":"instrumentacion","provider":"Universidad de la República · OpenFing","level":"Intermedio","language":"Español","url":"https://open.fing.edu.uy/courses/seys/","description":"Estudia cómo una señal se transforma al atravesar un sistema de medición.","topics":["Representación de señales","Sistemas lineales","Análisis en frecuencia"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (9, 'Guía de estudio · Señales y Sistemas', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Representación de señales, Sistemas lineales, Análisis en frecuencia.

Durante el estudio
Elige una magnitud del curso. Identifica su unidad, el principio de medición y posibles fuentes de incertidumbre. Distingue precisión, exactitud y trazabilidad con un ejemplo académico.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (10, '{"id":10,"title":"Muestreo y Procesamiento Digital de Señales","area":"instrumentacion","provider":"Universidad de la República · OpenFing","level":"Intermedio","language":"Español","url":"https://open.fing.edu.uy/courses/mpd/","description":"Conecta el mundo analógico con los datos que puedes procesar en una computadora.","topics":["Muestreo","Transformadas discretas","Filtrado digital"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (10, 'Guía de estudio · Muestreo y Procesamiento Digital de Señales', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Muestreo, Transformadas discretas, Filtrado digital.

Durante el estudio
Elige una magnitud del curso. Identifica su unidad, el principio de medición y posibles fuentes de incertidumbre. Distingue precisión, exactitud y trazabilidad con un ejemplo académico.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (11, '{"id":11,"title":"Física Térmica","area":"fundamentos","provider":"Universidad de la República · OpenFing","level":"Inicial","language":"Español","url":"https://open.fing.edu.uy/courses/ft/","description":"Comprende el calor, la temperatura y las transformaciones de energía.","topics":["Termodinámica","Transferencia de energía","Propiedades térmicas"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (11, 'Guía de estudio · Física Térmica', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Termodinámica, Transferencia de energía, Propiedades térmicas.

Durante el estudio
Enumera las leyes o relaciones principales del tema. Revisa las unidades de cada magnitud y explicita las aproximaciones. Conecta una de estas ideas con una aplicación nuclear a nivel conceptual.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (12, '{"id":12,"title":"Elementos de Mecánica de los Fluidos","area":"fundamentos","provider":"Universidad de la República · OpenFing","level":"Intermedio","language":"Español","url":"https://open.fing.edu.uy/courses/emf/","description":"Prepara las bases para estudiar circuitos de refrigeración y termohidráulica.","topics":["Propiedades de fluidos","Balances de conservación","Flujo y pérdidas"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (12, 'Guía de estudio · Elementos de Mecánica de los Fluidos', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Propiedades de fluidos, Balances de conservación, Flujo y pérdidas.

Durante el estudio
Enumera las leyes o relaciones principales del tema. Revisa las unidades de cada magnitud y explicita las aproximaciones. Conecta una de estas ideas con una aplicación nuclear a nivel conceptual.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (13, '{"id":13,"title":"Comportamiento Mecánico de Materiales 1","area":"fundamentos","provider":"Universidad de la República · OpenFing","level":"Intermedio","language":"Español","url":"https://open.fing.edu.uy/courses/cmm1/","description":"Analiza cómo responden los materiales a esfuerzos y deformaciones.","topics":["Tensiones","Deformaciones","Comportamiento elástico"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (13, 'Guía de estudio · Comportamiento Mecánico de Materiales 1', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Tensiones, Deformaciones, Comportamiento elástico.

Durante el estudio
Enumera las leyes o relaciones principales del tema. Revisa las unidades de cada magnitud y explicita las aproximaciones. Conecta una de estas ideas con una aplicación nuclear a nivel conceptual.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (14, '{"id":14,"title":"Comportamiento Mecánico de Materiales 2","area":"fundamentos","provider":"Universidad de la República · OpenFing","level":"Avanzado","language":"Español","url":"https://open.fing.edu.uy/courses/cmm2/","description":"Profundiza en el comportamiento de los materiales y la integridad de componentes.","topics":["Respuesta mecánica","Modelos de materiales","Integridad estructural"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (14, 'Guía de estudio · Comportamiento Mecánico de Materiales 2', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Respuesta mecánica, Modelos de materiales, Integridad estructural.

Durante el estudio
Enumera las leyes o relaciones principales del tema. Revisa las unidades de cada magnitud y explicita las aproximaciones. Conecta una de estas ideas con una aplicación nuclear a nivel conceptual.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (15, '{"id":15,"title":"Teoría de Circuitos","area":"instrumentacion","provider":"Universidad de la República · OpenFing","level":"Intermedio","language":"Español","url":"https://open.fing.edu.uy/courses/tdc2020/","description":"Consolida el análisis de circuitos para avanzar hacia sistemas de adquisición de datos.","topics":["Redes eléctricas","Respuesta temporal","Análisis de circuitos"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (15, 'Guía de estudio · Teoría de Circuitos', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Redes eléctricas, Respuesta temporal, Análisis de circuitos.

Durante el estudio
Elige una magnitud del curso. Identifica su unidad, el principio de medición y posibles fuentes de incertidumbre. Distingue precisión, exactitud y trazabilidad con un ejemplo académico.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (16, '{"id":16,"title":"Electrónica 2","area":"instrumentacion","provider":"Universidad de la República · OpenFing","level":"Avanzado","language":"Español","url":"https://open.fing.edu.uy/courses/e2/","description":"Continúa la formación en electrónica a partir de los fundamentos de circuitos analógicos.","topics":["Circuitos electrónicos","Respuesta en frecuencia","Diseño y análisis"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (16, 'Guía de estudio · Electrónica 2', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Circuitos electrónicos, Respuesta en frecuencia, Diseño y análisis.

Durante el estudio
Elige una magnitud del curso. Identifica su unidad, el principio de medición y posibles fuentes de incertidumbre. Distingue precisión, exactitud y trazabilidad con un ejemplo académico.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (17, '{"id":17,"title":"Electrónica de Potencia","area":"fundamentos","provider":"Universidad de la República · OpenFing","level":"Avanzado","language":"Español","url":"https://open.fing.edu.uy/courses/ep/","description":"Explora la conversión y el control de energía eléctrica en equipos e instalaciones.","topics":["Convertidores","Dispositivos de potencia","Control de energía"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (17, 'Guía de estudio · Electrónica de Potencia', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Convertidores, Dispositivos de potencia, Control de energía.

Durante el estudio
Enumera las leyes o relaciones principales del tema. Revisa las unidades de cada magnitud y explicita las aproximaciones. Conecta una de estas ideas con una aplicación nuclear a nivel conceptual.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (18, '{"id":18,"title":"Metalurgia Física","area":"energia","provider":"Universidad de la República · OpenFing","level":"Intermedio","language":"Español","url":"https://open.fing.edu.uy/courses/metfis-2026/","description":"Relaciona la estructura de los metales con sus propiedades en aplicaciones de ingeniería.","topics":["Estructura de materiales","Transformaciones de fase","Propiedades de metales"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Videoclases","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (18, 'Guía de estudio · Metalurgia Física', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Estructura de materiales, Transformaciones de fase, Propiedades de metales.

Durante el estudio
Dibuja un mapa conceptual que conecte el fenómeno físico con el sistema de ingeniería. Identifica entradas, salidas y supuestos. Compara dos alternativas a nivel conceptual y anota qué información faltaría para evaluarlas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (19, '{"id":19,"title":"Gestión de la dosis de radiación en tomografía computarizada","area":"medicina","provider":"OIEA / IAEA","level":"Intermedio","language":"Español","url":"https://www.iaea.org/resources/rpop/resources/online-training","description":"Conoce el enfoque de optimización de dosis en estudios de tomografía computarizada.","topics":["Dosis en TC","Optimización","Protección del paciente"],"cost":"gratis","certificate":"Por verificar","availability":"A tu ritmo","format":"Autoestudio","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Acceso mediante catálogo","checkedAt":null,"tags":["TC","CT","tomografía","dosimetría"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (19, 'Guía de estudio · Gestión de la dosis de radiación en tomografía computarizada', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Dosis en TC, Optimización, Protección del paciente.

Durante el estudio
Relaciona el principio físico con la formación de una imagen o el objetivo del procedimiento. Compara calidad de información y exposición de forma conceptual. Estas actividades son académicas y no constituyen indicaciones clínicas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (20, '{"id":20,"title":"Protección radiológica en procedimientos intervencionistas","area":"proteccion","provider":"OIEA / IAEA","level":"Intermedio","language":"Español","url":"https://www.iaea.org/resources/rpop/resources/online-training","description":"Explora la protección de pacientes y personal en procedimientos guiados por imagen.","topics":["Radiología intervencionista","Exposición ocupacional","Buenas prácticas"],"cost":"gratis","certificate":"Por verificar","availability":"A tu ritmo","format":"Autoestudio","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Acceso mediante catálogo","checkedAt":null,"tags":["fluoroscopia"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (20, 'Guía de estudio · Protección radiológica en procedimientos intervencionistas', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Radiología intervencionista, Exposición ocupacional, Buenas prácticas.

Durante el estudio
Identifica qué principio de protección aborda cada ejemplo del curso. Distingue justificación, optimización y límites aplicables según la fuente. Resume el papel de la formación y la supervisión competente.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (21, '{"id":21,"title":"Niveles de referencia para diagnóstico en imagenología médica","area":"medicina","provider":"OIEA / IAEA","level":"Intermedio","language":"Por verificar","url":"https://www.iaea.org/resources/rpop/resources/online-training","description":"Comprende el papel de los niveles de referencia al comparar prácticas de diagnóstico.","topics":["Niveles de referencia","Evaluación de dosis","Optimización de prácticas"],"cost":"gratis","certificate":"Por verificar","availability":"A tu ritmo","format":"Autoestudio","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Acceso mediante catálogo","checkedAt":null,"tags":["NRD","DRL","dosimetría"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (21, 'Guía de estudio · Niveles de referencia para diagnóstico en imagenología médica', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Niveles de referencia, Evaluación de dosis, Optimización de prácticas.

Durante el estudio
Relaciona el principio físico con la formación de una imagen o el objetivo del procedimiento. Compara calidad de información y exposición de forma conceptual. Estas actividades son académicas y no constituyen indicaciones clínicas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (22, '{"id":22,"title":"Protección radiológica en radiología dental","area":"proteccion","provider":"OIEA / IAEA","level":"Inicial","language":"Español","url":"https://www.iaea.org/resources/rpop/resources/online-training","description":"Acércate a los principios de protección aplicados a equipos y procedimientos odontológicos.","topics":["Radiología dental","Justificación","Protección del paciente"],"cost":"gratis","certificate":"Por verificar","availability":"A tu ritmo","format":"Autoestudio","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Acceso mediante catálogo","checkedAt":null,"tags":["odontología"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (22, 'Guía de estudio · Protección radiológica en radiología dental', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Radiología dental, Justificación, Protección del paciente.

Durante el estudio
Identifica qué principio de protección aborda cada ejemplo del curso. Distingue justificación, optimización y límites aplicables según la fuente. Resume el papel de la formación y la supervisión competente.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (23, '{"id":23,"title":"Seguridad y calidad en radioterapia","area":"medicina","provider":"OIEA / IAEA","level":"Intermedio","language":"Español","url":"https://www.iaea.org/resources/rpop/resources/online-training","description":"Explora la relación entre seguridad del paciente y calidad de los procedimientos de radioterapia.","topics":["Calidad de procesos","Seguridad del paciente","Cultura de seguridad"],"cost":"gratis","certificate":"Por verificar","availability":"A tu ritmo","format":"Autoestudio","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Acceso mediante catálogo","checkedAt":null,"tags":["oncología"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (23, 'Guía de estudio · Seguridad y calidad en radioterapia', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Calidad de procesos, Seguridad del paciente, Cultura de seguridad.

Durante el estudio
Relaciona el principio físico con la formación de una imagen o el objetivo del procedimiento. Compara calidad de información y exposición de forma conceptual. Estas actividades son académicas y no constituyen indicaciones clínicas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (24, '{"id":24,"title":"Preparación y respuesta médica a emergencias radiológicas","area":"proteccion","provider":"OIEA / IAEA","level":"Intermedio","language":"Inglés","url":"https://elearning.iaea.org/","description":"Introduce la preparación sanitaria ante situaciones de exposición a radiación.","topics":["Preparación sanitaria","Respuesta médica","Coordinación de emergencias"],"cost":"gratis","certificate":"Por verificar","availability":"A tu ritmo","format":"Autoestudio","hours":3,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Acceso mediante catálogo","checkedAt":null,"tags":["emergencias"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (24, 'Guía de estudio · Preparación y respuesta médica a emergencias radiológicas', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Preparación sanitaria, Respuesta médica, Coordinación de emergencias.

Durante el estudio
Identifica qué principio de protección aborda cada ejemplo del curso. Distingue justificación, optimización y límites aplicables según la fuente. Resume el papel de la formación y la supervisión competente.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (25, '{"id":25,"title":"MSK Basics · Medicina nuclear musculoesquelética","area":"medicina","provider":"ESMIT / EANM","level":"Intermedio","language":"Inglés","url":"https://esmit.eanm.org/nucmed-essentials/","description":"Explora aplicaciones diagnósticas y terapéuticas de medicina nuclear en el sistema musculoesquelético.","topics":["Imagen musculoesquelética","Aplicaciones diagnósticas","Aplicaciones terapéuticas"],"cost":"gratis","certificate":"Créditos CME","availability":"A tu ritmo","format":"Autoestudio","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":[],"note":"La institución anuncia 5 créditos CME hasta noviembre de 2027. Consulta sus condiciones."}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (25, 'Guía de estudio · MSK Basics · Medicina nuclear musculoesquelética', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Imagen musculoesquelética, Aplicaciones diagnósticas, Aplicaciones terapéuticas.

Durante el estudio
Relaciona el principio físico con la formación de una imagen o el objetivo del procedimiento. Compara calidad de información y exposición de forma conceptual. Estas actividades son académicas y no constituyen indicaciones clínicas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (26, '{"id":26,"title":"AI Basics · Inteligencia artificial en medicina nuclear","area":"investigacion","provider":"ESMIT / EANM","level":"Inicial","language":"Inglés","url":"https://esmit.eanm.org/nucmed-essentials/","description":"Descubre conceptos de aprendizaje automático y profundo aplicados a medicina nuclear.","topics":["Aprendizaje automático","Aprendizaje profundo","Aplicaciones en medicina nuclear"],"cost":"gratis","certificate":"Créditos CME","availability":"A tu ritmo","format":"Autoestudio","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["IA","AI","machine learning"],"note":"La institución anuncia 2,5 créditos CME hasta agosto de 2028. Consulta sus condiciones."}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (26, 'Guía de estudio · AI Basics · Inteligencia artificial en medicina nuclear', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Aprendizaje automático, Aprendizaje profundo, Aplicaciones en medicina nuclear.

Durante el estudio
Formula una pregunta que pueda responderse con datos. Define las variables y los supuestos. Piensa cómo validarías el resultado y qué fuentes de error o sesgo deberías comunicar.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (27, '{"id":27,"title":"Introducción a la ingeniería nuclear y la radiación ionizante","area":"fisica","provider":"MIT OpenCourseWare","level":"Inicial","language":"Inglés","url":"https://ocw.mit.edu/courses/22-01-introduction-to-nuclear-engineering-and-ionizing-radiation-fall-2016/","description":"Un punto de partida para estudiar los modelos nucleares, la radiactividad y sus aplicaciones.","topics":["Estructura nuclear","Radiación ionizante","Aplicaciones nucleares"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["22.01"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (27, 'Guía de estudio · Introducción a la ingeniería nuclear y la radiación ionizante', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Estructura nuclear, Radiación ionizante, Aplicaciones nucleares.

Durante el estudio
Distingue entre un modelo físico y la observación que lo respalda. Identifica las magnitudes, unidades y supuestos utilizados. Explica con tus palabras una limitación del modelo.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (28, '{"id":28,"title":"Introducción a la física nuclear aplicada","area":"fisica","provider":"MIT OpenCourseWare","level":"Intermedio","language":"Inglés","url":"https://ocw.mit.edu/courses/22-02-introduction-to-applied-nuclear-physics-spring-2012/","description":"Relaciona la estructura del núcleo con los procesos de decaimiento y la interacción con la materia.","topics":["Modelos nucleares","Decaimientos radiactivos","Interacción con la materia"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["22.02"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (28, 'Guía de estudio · Introducción a la física nuclear aplicada', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Modelos nucleares, Decaimientos radiactivos, Interacción con la materia.

Durante el estudio
Distingue entre un modelo físico y la observación que lo respalda. Identifica las magnitudes, unidades y supuestos utilizados. Explica con tus palabras una limitación del modelo.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (29, '{"id":29,"title":"Ciencia de neutrones y física de reactores","area":"energia","provider":"MIT OpenCourseWare","level":"Intermedio","language":"Inglés","url":"https://ocw.mit.edu/courses/22-05-neutron-science-and-reactor-physics-fall-2009/","description":"Avanza desde la física nuclear hacia el comportamiento de los neutrones en reactores.","topics":["Interacciones neutrónicas","Transporte de neutrones","Física de reactores"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["22.05"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (29, 'Guía de estudio · Ciencia de neutrones y física de reactores', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Interacciones neutrónicas, Transporte de neutrones, Física de reactores.

Durante el estudio
Dibuja un mapa conceptual que conecte el fenómeno físico con el sistema de ingeniería. Identifica entradas, salidas y supuestos. Compara dos alternativas a nivel conceptual y anota qué información faltaría para evaluarlas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (30, '{"id":30,"title":"Materiales en ingeniería nuclear","area":"energia","provider":"MIT OpenCourseWare","level":"Avanzado","language":"Inglés","url":"https://ocw.mit.edu/courses/22-14-materials-in-nuclear-engineering-spring-2015/","description":"Estudia el comportamiento de materiales empleados en sistemas nucleares.","topics":["Materiales estructurales","Efectos de la irradiación","Propiedades y desempeño"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["22.14"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (30, 'Guía de estudio · Materiales en ingeniería nuclear', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Materiales estructurales, Efectos de la irradiación, Propiedades y desempeño.

Durante el estudio
Dibuja un mapa conceptual que conecte el fenómeno físico con el sistema de ingeniería. Identifica entradas, salidas y supuestos. Compara dos alternativas a nivel conceptual y anota qué información faltaría para evaluarlas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (31, '{"id":31,"title":"Ingeniería de reactores nucleares","area":"energia","provider":"MIT OpenCourseWare","level":"Avanzado","language":"Inglés","url":"https://ocw.mit.edu/courses/22-312-engineering-of-nuclear-reactors-fall-2015/","description":"Profundiza en los fundamentos de ingeniería, termofluidos y componentes de reactores.","topics":["Termohidráulica","Transferencia de calor","Sistemas del reactor"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["22.312"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (31, 'Guía de estudio · Ingeniería de reactores nucleares', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Termohidráulica, Transferencia de calor, Sistemas del reactor.

Durante el estudio
Dibuja un mapa conceptual que conecte el fenómeno físico con el sistema de ingeniería. Identifica entradas, salidas y supuestos. Compara dos alternativas a nivel conceptual y anota qué información faltaría para evaluarlas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (32, '{"id":32,"title":"Integración del diseño, operación y seguridad de reactores","area":"energia","provider":"MIT OpenCourseWare","level":"Avanzado","language":"Inglés","url":"https://ocw.mit.edu/courses/22-39-integration-of-reactor-design-operations-and-safety-fall-2006/","description":"Conecta el diseño de una central con su operación y evaluación de seguridad.","topics":["Diseño integrado","Operación","Evaluación de seguridad"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["22.39"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (32, 'Guía de estudio · Integración del diseño, operación y seguridad de reactores', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Diseño integrado, Operación, Evaluación de seguridad.

Durante el estudio
Dibuja un mapa conceptual que conecte el fenómeno físico con el sistema de ingeniería. Identifica entradas, salidas y supuestos. Compara dos alternativas a nivel conceptual y anota qué información faltaría para evaluarlas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (33, '{"id":33,"title":"Física Cuántica I","area":"fisica","provider":"MIT OpenCourseWare","level":"Intermedio","language":"Inglés","url":"https://ocw.mit.edu/courses/8-04-quantum-physics-i-spring-2013/","description":"Refuerza las bases cuánticas necesarias para comprender fenómenos nucleares y de partículas.","topics":["Función de onda","Ecuación de Schrödinger","Estados cuánticos"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["8.04"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (33, 'Guía de estudio · Física Cuántica I', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Función de onda, Ecuación de Schrödinger, Estados cuánticos.

Durante el estudio
Distingue entre un modelo físico y la observación que lo respalda. Identifica las magnitudes, unidades y supuestos utilizados. Explica con tus palabras una limitación del modelo.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (34, '{"id":34,"title":"Introducción a la física nuclear y de partículas","area":"fisica","provider":"MIT OpenCourseWare","level":"Avanzado","language":"Inglés","url":"https://ocw.mit.edu/courses/8-701-introduction-to-nuclear-and-particle-physics-fall-2020/","description":"Explora las partículas elementales y los fundamentos de las interacciones nucleares.","topics":["Partículas elementales","Interacciones fundamentales","Física nuclear"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["8.701"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (34, 'Guía de estudio · Introducción a la física nuclear y de partículas', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Partículas elementales, Interacciones fundamentales, Física nuclear.

Durante el estudio
Distingue entre un modelo físico y la observación que lo respalda. Identifica las magnitudes, unidades y supuestos utilizados. Explica con tus palabras una limitación del modelo.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (35, '{"id":35,"title":"Fundamentos de detección de radiación","area":"instrumentacion","provider":"Texas A&M · NSSEP","level":"Inicial","language":"Inglés","url":"https://nsspi.tamu.edu/nssep/basic-nuclear-science-courses/basic-radiation-detection/","description":"Conecta los principios físicos de detección con las características de los instrumentos.","topics":["Interacción de la radiación","Principios de detección","Instrumentación"],"cost":"por-verificar","certificate":"Por verificar","availability":"Consultar institución","format":"Autoestudio","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["detectores","espectrometría"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (35, 'Guía de estudio · Fundamentos de detección de radiación', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Interacción de la radiación, Principios de detección, Instrumentación.

Durante el estudio
Elige una magnitud del curso. Identifica su unidad, el principio de medición y posibles fuentes de incertidumbre. Distingue precisión, exactitud y trazabilidad con un ejemplo académico.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (36, '{"id":36,"title":"Evaluación de la incertidumbre de medición","area":"instrumentacion","provider":"Inmetro / UnInmetro","level":"Avanzado","language":"Portugués","url":"https://www.gov.br/inmetro/pt-br/centrais-de-conteudo/noticias/2026/inmetro-abre-inscricoes-para-curso-de-avaliacao-de-incerteza-de-medicao-1","description":"Profundiza en la expresión de incertidumbre y la evaluación de resultados de medición.","topics":["Fuentes de incertidumbre","Propagación de incertidumbre","Expresión de resultados"],"cost":"pago","certificate":"Por verificar","availability":"Inscripción cerrada","format":"Clases y autoestudio","hours":40,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["GUM","metrología"],"price":"R$ 1.035","note":"La convocatoria publicada cerró el 10 de noviembre de 2026. Se conserva como referencia; no se presupone una nueva edición."}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (36, 'Guía de estudio · Evaluación de la incertidumbre de medición', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Fuentes de incertidumbre, Propagación de incertidumbre, Expresión de resultados.

Durante el estudio
Elige una magnitud del curso. Identifica su unidad, el principio de medición y posibles fuentes de incertidumbre. Distingue precisión, exactitud y trazabilidad con un ejemplo académico.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (37, '{"id":37,"title":"Principios de imagenología médica","area":"medicina","provider":"MIT OpenCourseWare","level":"Intermedio","language":"Inglés","url":"https://ocw.mit.edu/courses/22-058-principles-of-medical-imaging-fall-2002/","description":"Comprende los principios físicos detrás de distintas modalidades de imagen médica.","topics":["Formación de imágenes","Modalidades de imagen","Resolución y calidad"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["22.058"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (37, 'Guía de estudio · Principios de imagenología médica', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Formación de imágenes, Modalidades de imagen, Resolución y calidad.

Durante el estudio
Relaciona el principio físico con la formación de una imagen o el objetivo del procedimiento. Compara calidad de información y exposición de forma conceptual. Estas actividades son académicas y no constituyen indicaciones clínicas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (38, '{"id":38,"title":"Métodos numéricos esenciales para aplicaciones nucleares","area":"investigacion","provider":"MIT OpenCourseWare","level":"Avanzado","language":"Inglés","url":"https://ocw.mit.edu/courses/22-15-essential-numerical-methods-fall-2014/","description":"Amplía tus herramientas computacionales para modelar problemas de ingeniería nuclear.","topics":["Métodos computacionales","Solución de ecuaciones","Modelización numérica"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["22.15"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (38, 'Guía de estudio · Métodos numéricos esenciales para aplicaciones nucleares', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Métodos computacionales, Solución de ecuaciones, Modelización numérica.

Durante el estudio
Formula una pregunta que pueda responderse con datos. Define las variables y los supuestos. Piensa cómo validarías el resultado y qué fuentes de error o sesgo deberías comunicar.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (39, '{"id":39,"title":"Introducción a la Física de Plasmas I","area":"energia","provider":"MIT OpenCourseWare","level":"Avanzado","language":"Inglés","url":"https://ocw.mit.edu/courses/22-611j-introduction-to-plasma-physics-i-fall-2003/","description":"Estudia los fundamentos de los plasmas, una base para explorar la energía de fusión.","topics":["Movimiento de partículas","Modelos de plasma","Ondas y campos"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["22.611j"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (39, 'Guía de estudio · Introducción a la Física de Plasmas I', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Movimiento de partículas, Modelos de plasma, Ondas y campos.

Durante el estudio
Dibuja un mapa conceptual que conecte el fenómeno físico con el sistema de ingeniería. Identifica entradas, salidas y supuestos. Compara dos alternativas a nivel conceptual y anota qué información faltaría para evaluarlas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
insert into public.courses (id, metadata) values (40, '{"id":40,"title":"Análisis de sistemas del ciclo del combustible nuclear","area":"energia","provider":"MIT OpenCourseWare","level":"Avanzado","language":"Inglés","url":"https://ocw.mit.edu/courses/22-251-systems-analysis-of-the-nuclear-fuel-cycle-fall-2009/","description":"Analiza el ciclo del combustible nuclear desde una perspectiva de sistemas.","topics":["Ciclo del combustible","Evaluación de sistemas","Alternativas tecnológicas"],"cost":"gratis","certificate":"No incluido","availability":"A tu ritmo","format":"Material universitario","hours":null,"prerequisites":"Consulta los conocimientos previos en la institución de origen.","sourceStatus":"Fuente consultada","checkedAt":"2026-11-21","tags":["22.251"]}'::jsonb) on conflict (id) do update set metadata=excluded.metadata, updated_at=now();
insert into public.course_resources (course_id,title,body,position) values (40, 'Guía de estudio · Análisis de sistemas del ciclo del combustible nuclear', 'Antes de comenzar
Revisa los requisitos y el programa oficial. Anota qué sabes y qué deseas comprender sobre Ciclo del combustible, Evaluación de sistemas, Alternativas tecnológicas.

Durante el estudio
Dibuja un mapa conceptual que conecte el fenómeno físico con el sistema de ingeniería. Identifica entradas, salidas y supuestos. Compara dos alternativas a nivel conceptual y anota qué información faltaría para evaluarlas.

Al terminar
Redacta una síntesis de cinco ideas, cita la fuente de cada una y plantea una pregunta que todavía no puedas responder. Registra tu progreso cuando hayas completado tus objetivos personales.', 1) on conflict (course_id,position) do nothing;
commit;

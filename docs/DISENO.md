# Diseño y movimiento

## Decisión para Isótopo

GSAP + ScrollTrigger controlan la aparición progresiva de secciones y el movimiento del campo conceptual de la portada. Lenis suaviza el desplazamiento con ratón en escritorio. Las transiciones de botones y tarjetas son CSS. Esta combinación encaja con una web estática editable directamente en GitHub.

No se acumulan varias bibliotecas que resuelven el mismo problema. El resto de los proyectos se conserva como referencia para necesidades futuras. El contenido sigue accesible si falla la carga de animación, mediante IntersectionObserver o sin efectos.

## 12 repositorios evaluados

| Repositorio | Aplicación | Encaje en Isótopo |
| --- | --- | --- |
| [GSAP](https://github.com/greensock/GSAP) | Secuencias y animación controlada por scroll | **Seleccionado**, junto con ScrollTrigger |
| [Lenis](https://github.com/darkroomengineering/lenis) | Desplazamiento fluido | **Seleccionado**, solo donde aporta al uso con ratón |
| [Motion](https://github.com/motiondivision/motion) | Animación de interfaces e interacciones | Alternativa si el proyecto evoluciona a React |
| [Anime.js](https://github.com/juliangarnier/anime) | Secuencias y animación de SVG | Alternativa a GSAP para una dirección visual distinta |
| [Barba.js](https://github.com/barbajs/barba) | Transiciones entre páginas | Útil para una futura arquitectura multipágina |
| [Swup](https://github.com/swup/swup) | Navegación con transiciones | Otra opción para páginas renderizadas en servidor |
| [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) | Experiencias basadas en desplazamiento | Alternativa a Lenis; no añadir ambos |
| [Three.js](https://github.com/mrdoob/three.js) | Gráficos 3D en el navegador | Para simuladores o visualizaciones realmente interactivas |
| [React Three Fiber](https://github.com/pmndrs/react-three-fiber) | Integración de Three.js con React | Para una futura aplicación React con escenas 3D |
| [Theatre.js](https://github.com/theatre-js/theatre) | Coreografía visual de escenas | Para una experiencia narrativa más compleja |
| [Radix Primitives](https://github.com/radix-ui/primitives) | Componentes de interacción accesibles | Referencia para un sistema de componentes React |
| [shadcn/ui](https://github.com/shadcn-ui/ui) | Componentes y patrones de interfaz | Referencia funcional; evitar una apariencia de plantilla |

Repositorios consultados el 21 de noviembre de 2026. Verificar licencias y condiciones vigentes antes de incorporar nuevas dependencias.

## Identidad

- Azul petróleo #0b2029: estructura, profundidad y contraste.
- Verde mineral #afe4ca: acentos y acciones principales.
- Blanco mineral #f6f8f5: lectura y espacio.
- General Sans: títulos y navegación; Source Sans 3: lectura continua.
- Ilustraciones originales en SVG: trayectorias, ondas y secciones conceptuales. No representan simulaciones físicas validadas.

## Criterios de calidad

Jerarquía de títulos, navegación con teclado, foco visible, avisos de resultados, objetivos táctiles amplios, respeto de prefers-reduced-motion, control manual de movimiento, limpieza de animaciones al navegar y ausencia de reproducción automática de video.

Las animaciones aparecen durante el recorrido completo de la portada y las páginas editoriales. Los filtros actualizan resultados inmediatamente, sin ocultarlos detrás de animaciones. La preferencia de movimiento del sistema siempre prevalece.

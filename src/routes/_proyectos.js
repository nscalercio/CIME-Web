const proyectos = [
  {
    nombre: "Chapero Electrónico",
    showcase: ["chapero1.png", "chapero2.png", "chapero3.png", "chapero4.png"],
    caracteristicas: [
      "Información sobre la diponibilidad y estado del servicio en tiempo real",
      "Consulta historica de averias, permitiendo realizar la trazabilidad de averias de cada formación",
      "Consulta historica de evolución del servicio, permitiendo analizar las causas y motivos detras de las posibles perdidas de viajes",
      "Reportes de averias via email en tiempo real",
      "Reportes via email del estado del servicio (periodicos y a demanda)"
    ],
    estado: 2,
    link: "http://laboweb.us.to:3030/ce/",
    tecnologias: [
      "NodeJS",
      "SQL",
      "SMTP",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Github",
      "Docker"
    ],
    breve:
      "Aplicación que permite monitorear en tiempo real, e historico, el estado operativo y de servicio de las 6 lineas de subte, premetro, y ferrocarril Urquiza",
    descripcion: `El <strong>chapero electrónico</strong> es un software encargado de unificar la información pertinente al servicio de las 6 lineas de subte, premetro, y FC Urquiza.</br>
    Gracias a este sistema, todas las gerencias involucradas en la operación del servicio cuentan con datos unificados sobre averias, disponibilidad de formaciónes, y estado del servicio. Toda esta información esta disponible en  <strong>tiempo real, como de manera historica</strong>.`,
    logo: "chapero.svg"
  },
  {
    nombre: "SGF",
    showcase: ["sgf1.png"],
    caracteristicas: [
      "Arquitectura orientada a microservicios, lista para escalar horizontalmente",
      "Uso de Base de datos relacionales y no-relacionales, dependiendo del caso de uso que mejor se adapte a la situación",
      "Sistema de autentificación propio basado en SHA-256 y con expiración.",
      "Endpoints Restful y GraphQL para facil acceso a la información desde cualquier tipo de aplicacion (ya sea Web o Nativa)",
      "Sistema de Logs y Diagnostico permanente",
      "Pipeline CI /CD para desarrollo e implementación continua."
    ],
    tecnologias: ["NodeJS", "SQL", "SMTP", "JavaScript", "Github", "Docker"],
    breve:
      "Backend que provee los servicios necesarios para el funcionamiento de todas las aplicaciónes informaticas del CIME.",
    descripcion: `El Sistema de Gestion Ferroviario es un <strong>backend integrado por servidores y bases de datos </strong>que proveen la  infraestructura que es utilizada por todas las aplicaciónes informaticas desarrolladas por el CIME.
    <br />
     El SGF tambien cuenta con una consola de administración destinada al monitoreo, control, y configuración de todos los aspectos de servicios que brinda.`,
    logo: "sgf.svg"
  }
]
  .sort((a, b) => a.nombre > b.nombre)
  .map((x, i) => {
    return { ...x, id: i };
  });

export default proyectos;

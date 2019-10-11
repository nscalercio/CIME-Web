const proyectos = [
  {
    nombre: "Chapero Electrónico",
    showcase: ["chapero1.png", "chapero2.png", "chapero3.png"],
    caracteristicas: [
      "Información sobre la diponibilidad y estado del servicio en tiempo real",
      "Consulta historica de averias, permitiendo realizar la trazabilidad de averias de cada formación",
      "Consulta historica de evolución del servicio, permitiendo analizar las causas y motivos detras de las posibles perdidas de viajes",
      "Reportes de averias via email en tiempo real",
      "Reportes via email del estado del servicio (periodicos y a demanda)"
    ],
    tecnologias: [          
      "NodeJS",
      "SQL",
      "SMTP",
      "HTML5",
      "CSS3",
      "JavaSript",
      "Github",
      "Docker"
    ],
    breve:
      "Aplicación que permite monitorear en tiempo real el estado operativo de las 6 lineas de subte, premetro, y ferrocarril Urquiza",
    descripcion: `El <strong>chapero electrónico</strong> es un software encargado de unificar la información pertinente al servicio de las 6 lineas de subte, premetro, y FC Urquiza.</br>
    Gracias a este sistema, todas las gerencias involucradas en la operación del servicio, cuentan tanto en tiempo real , como de manera historica, datos unificados sobre averias, disponibilidad de formaciónes, estado del servicio, etc.`,
    logo: "chapero.svg"
  },
  {
    nombre: "SGF",
    showcase: ["sgf1.png"],
    caracteristicas: [
     
    ],
    tecnologias: ["NodeJS", "SQL", "SMTP", "JavaSript", "Github", "Docker"],
    breve:
      "Backend que provee los servicios necesarios para el funcionamiento de todas las aplicaciónes informaticas del CIME.",
    descripcion: `El Sistema de Gestion Ferroviario es un backend de servidores que provee una infraestructura de microservicios y bases de datos que son utilizadas por todas las aplicaciónes desarrolladas por el CIME.
    El SGF tambien cuenta con una consola de administración destinada al control y configuración de todos los aspectos de servicios que brinda.`,
    logo: "sgf.svg"
  }
]
  .sort((a, b) => a.nombre > b.nombre)
  .map((x, i) => {
    return { ...x, id: i };
  });

export default proyectos;

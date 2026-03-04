export default {
  global: {
    Name: 'Agroecología y evaluación ambiental de los sistemas agrícolas',
    Description:
      '​​​Este componente formativo aborda los fundamentos conceptuales de la agroecología y su relación con la evaluación ambiental de los sistemas agrícolas, por tanto, analiza la transición de modelos productivos convencionales hacia enfoques sostenibles, considerando el impacto en el suelo, el agua y los ecosistemas rurales. Promueve en el aprendiz una visión crítica y sistémica que permite comprender la interacción entre producción agrícola, sostenibilidad y conservación ambiental, fortaleciendo capacidades para el análisis y la toma de decisiones responsables en el contexto rural. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Revolución verde',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principales características',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Logros productivos y problemáticas ambientales',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Impactos y cuestionamientos al modelo agrícola convencional',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Fundamentos de la agroecología',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Agricultura y economía en el campo',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión del suelo en la producción agropecuaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Degradación, contaminación y conservación del suelo',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Buenas prácticas agrícolas para la protección del suelo',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'El agua en la agricultura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Fuentes de agua y su conservación',
            hash: 't_5_1',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Impacto y manejo ambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Herramientas para identificar impactos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Principios de conservación y sostenibilidad ambiental',
            hash: 't_6_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      /* {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      }, */
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  /* complementario: [
    {
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ], */
  glosario: [
    {
      termino: 'Agroecología',
      significado:
        'Enfoque científico y práctico que aplica principios ecológicos al diseño y manejo de sistemas agrícolas sostenibles.',
    },
    {
      termino: 'Agroecosistema',
      significado:
        'Sistema productivo agrícola entendido como un ecosistema donde interactúan factores bióticos, abióticos y humanos.',
    },
    {
      termino: 'Biodiversidad',
      significado:
        'Variedad de organismos vivos presentes en un ecosistema, fundamental para el equilibrio y resiliencia ambiental.',
    },
    {
      termino: 'Cambio climático',
      significado:
        'Alteración significativa y prolongada de las condiciones climáticas, influenciada por actividades humanas y naturales.',
    },
    {
      termino: 'Conservación del suelo',
      significado:
        'Conjunto de prácticas orientadas a prevenir la erosión, degradación y pérdida de fertilidad del suelo.',
    },
    {
      termino: 'Desarrollo rural sostenible',
      significado:
        'Modelo de desarrollo que promueve el crecimiento económico rural sin comprometer los recursos naturales para futuras generaciones.',
    },
    {
      termino: 'Economía campesina',
      significado:
        'Sistema productivo y social basado en la agricultura familiar, orientado al autoconsumo y mercados locales.',
    },
    {
      termino: 'Erosión',
      significado:
        'Proceso de desgaste y pérdida de la capa superficial del suelo por acción del agua, viento o actividades humanas.',
    },
    {
      termino: 'Evaluación ambiental',
      significado:
        'Proceso de análisis que identifica y valora los impactos ambientales generados por una actividad productiva.',
    },
    {
      termino: 'Gestión ambiental',
      significado:
        'Conjunto de acciones y estrategias destinadas a prevenir, mitigar y controlar impactos sobre el medio ambiente.',
    },
    {
      termino: 'Impacto ambiental',
      significado:
        'Alteración positiva o negativa que una actividad humana genera sobre el entorno natural.',
    },
    {
      termino: 'Producción limpia',
      significado:
        'Estrategia preventiva que busca reducir residuos, emisiones y consumo de recursos en los procesos productivos.',
    },
    {
      termino: 'Recurso hídrico',
      significado:
        'Conjunto de aguas superficiales y subterráneas disponibles para uso humano y productivo.',
    },
    {
      termino: 'Revolución verde',
      significado:
        'Modelo agrícola del siglo XX basado en el uso de semillas mejoradas, agroquímicos y mecanización para aumentar la producción.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'Capacidad de satisfacer necesidades actuales sin comprometer los recursos y oportunidades de las futuras generaciones.',
    },
  ],

  referencias: [
    {
      referencia:
        'Escobar Guevara, J. (s. f.). Prácticas agrícolas para la conservación del agua. En Colombia.',
      link:
        'https://encolombia.com/economia/agroindustria/practicas-agricolas-para-la-conservacion-del-agua/',
    },
    {
      referencia:
        'Food and Agriculture Organization of the United Nations. (s. f.). La participación campesina y sus potencialidades para una agricultura sostenible en América Latina (Capítulo IV). FAO.',
      link: 'https://www.fao.org/4/t3666s/t3666s06.htm',
    },
    {
      referencia:
        'IDEAM. (2023). Estudio Nacional del Agua 2022. Instituto de Hidrología, Meteorología y Estudios Ambientales.',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (s. f.). Gestión ambiental en el sector agropecuario. Repositorio AGROSAVIA.',
      link:
        'https://repository.agrosavia.co/server/api/core/bitstreams/a8b5143b-609b-4deb-948e-de673907703e/content',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible. (2022). Gestión integral del recurso hídrico en Colombia. Gobierno de Colombia.',
      link: '',
    },
    {
      referencia:
        'Rieggo. (2023). La importancia de la conservación del agua en la agricultura y cómo implementar prácticas de conservación.',
      link:
        'https://rieggo.com/blog/la-importancia-de-la-conservacion-del-agua-en-la-agricultura-y-como-implementar-practicas-de-conservacion/',
    },
    {
      referencia:
        'Rincón Atuesta, A. J., & García Quintero, C. L. (2022). Una mirada investigativa a la gestión ambiental y producción agropecuaria sostenible (1ª ed.). Universidad Francisco de Paula Santander; Ecoe Ediciones.',
      link:
        'https://repositorioinstitucional.ufpso.edu.co/xmlui/handle/20.500.14167/4827',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Javier Pacheco Wandurraga',
          cargo: 'Experto temático',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrolladora <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: ' ',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: ' ',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}

export default {
  global: {
    componenteFormativo:
      'This is what I do every day.<br><span class=r-4>Esto es lo que hago todos los días.</span>    ',
    descripcionCurso:
      'En este componente formativo, se presenta el desarrollo de temáticas que le permitirán identificar expresiones básicas de empleo frecuente en inglés a partir de contextos cotidianos, permitiéndole el dominio de preposiciones de tiempo, pasatiempos, horas del día y gustos, a través de expresiones y ejemplos en el idioma inglés.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/flag.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Preposiciones de tiempo',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<em>What do I do during the day?</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Verbos comunes para expresar rutinas personales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Pasatiempos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: ' Horas del día',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Likes and dislikes</em> / Gustos y disgustos',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  complementario: [
    {
      tema: 'Preposiciones de tiempo',
      referencia: 'British Council. (s. f.). Prepositions of time. ',
      tipo: 'Web',
      link:
        'https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/prepositions-time',
    },
    {
      tema: 'What do I do during the day?',
      referencia: 'British Council. (s. f.). Daily routine. ',
      tipo: 'Web',
      link:
        'https://learnenglishteens.britishcouncil.org/vocabulary/a1-a2-vocabulary/daily-routine',
    },
    {
      tema: 'Likes and dislikes / Gustos y disgustos',
      referencia: 'Tres por Mil. (2017). LIKE Y DISLIKE [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OFr15L2N5FE',
    },
  ],
  glosario: [
    {
      termino: '<em>Demonym</em> / Gentilicio',
      significado:
        'es un adjetivo que expresa el origen geográfico o racial de la persona.',
    },
    {
      termino: '<em>Hobby</em> / Pasatiempo',
      significado:
        'es una actividad que la persona lleva a cabo para mantenerse entretenida durante un periodo de tiempo libre.',
    },
    {
      termino: '<em>Introducing myself</em> / Presentación personal',
      significado:
        'información que se da ante una o varias personas respecto al nombre, apellido, edad, dirección, entre otros detalles que es necesario proporcionar de acuerdo con el contexto en el que se desarrolla la situación.',
    },
    {
      termino: '<em>Personal pronouns</em> / Pronombres personales',
      significado:
        'son palabras que sustituyen al nombre, permitiendo nombrar a los seres, objetos y situaciones sin usar un sustantivo.',
    },
    {
      termino: '<em>Time prepositions</em> / Preposiciones de tiempo',
      significado:
        'son expresiones que nos dan información sobre el tiempo en que sucede algo.',
    },
  ],
  referencias: [
    {
      referencia: 'British Council. (2014). Prepositions of time.',
      link:
        'https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/prepositions-time',
    },
    {
      referencia:
        'González, A. y Sierra, N. (2008). Retos y posibilidades de la enseñanza del inglés basada en contenidos en la educación superior: visión de los docentes en una experiencia en Colombia. Núcleo, 20(25), p. 125-148. ',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S0798-97842008000100007&lng=es&tlng=es',
    },
    {
      referencia:
        'Redecker, C. (2017). European framework for the digital competence of educators: DigCompEdu. Publications Office of the European Union',
      link: 'https://publications.jrc.ec.europa.eu/repository/handle/JRC107466',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo de desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Miguel Ángel Cárdenas López',
        cargo: 'Experto temático',
        centro:
          'CENIGRAF - Centro para la Industria de la Comunicación Gráfica-Regional Distrito Capital ',
      },
      {
        nombre: 'Óscar Absalón Guevara',
        cargo: 'Diseñador instruccional',
        centro:
          'Centro de la Industria, la Empresa y los Servicios–CIES-Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Centro de Diseño y Metrología-Regional Distrito Capital',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrector de estilo',
        centro: 'Centro de Diseño y Metrología-Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Yuly Andrea Rey Quiñonez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios-Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego        ',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura-Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios-Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios-Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios-Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 2
      h1.fst-italic What do I do during the day?
    p.mb-5(data-aos='fade-right') Durante un día, las personas hacen toda una serie de actividades que pueden ser rutinarias, es decir, que se repiten todos los días o que se hacen de una manera determinada a la que se acostumbra la persona. 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 2 
      span Rutinas diarias
    img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/7.svg', alt='')
    p.mb-5(data-aos='fade-right') Puede decirse que, cuando una rutina se aprende, se crea un hábito. Algunas veces, se realizan ciertas actividades extraordinarias.
      br
      br
      | Por ejemplo:
    .row.justify-content-center.mb-5(data-aos="zoom-in-up")
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
            img(src='@/assets/curso/temas/8.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100
              .p-3
                TarjetaAudio.color-acento-contenido.bg-white.my-3(
                    texto="I brush my hair every day."
                    :audio="require('@/assets/curso/audios/61.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p Yo cepillo mi cabello todos los días.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
            img(src='@/assets/curso/temas/9.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100
              .p-3
                TarjetaAudio.color-acento-contenido.bg-white.my-3(
                    texto="In the morning, I’m going to work in the garden. "
                    :audio="require('@/assets/curso/audios/62.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                p En la mañana, yo voy a trabajar en el jardín.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
            img(src='@/assets/curso/temas/10.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100
              .p-3
                TarjetaAudio.color-acento-contenido.bg-white.my-3(
                    texto="Peter goes to the park in the afternoon. "
                    :audio="require('@/assets/curso/audios/63.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                p Pedro va al parque en la tarde.
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1. Verbos comunes para expresar rutinas personales
    p.mb-5(data-aos='fade-right') Generalmente, las personas van creando sus rutinas personales de acuerdo con lo que acostumbran a realizar entre sus actividades, usualmente en forma diaria o en momentos determinados del día.
      br
      br
      | Algunos verbos que se utilizan para expresar rutinas personales son:
    SlyderF.slyder-arrows.mb-5(columnas="col-lg-6 col-xl-2")
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/11.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/160.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to get up
            br
            | (levantarse)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/12.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/161.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to brush

            br
            |  (cepillar)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/13.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/162.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to get a bath
            br
            | (bañarse)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/14.png')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/163.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to wash
            br
            | (lavar)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/15.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/164.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to get dressed
            br
            | (vestirse)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/16.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/165.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to have breakfast
            br
            | (desayunar)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/17.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/166.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to shave
            br
            | (afeitarse)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/18.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/167.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to make the bed
            br
            |  (hacer la cama)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/19.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/168.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to go to work
            br
            | (ir a trabajar)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/20.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/169.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to take the bus
            br
            | (tomar el autobús)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/21.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/170.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to garden
            br
            | (cultivar, cuidar plantas)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/22.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/171.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to take photos
            br
            | (sacar fotos) 
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/23.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/172.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to drive a car
            br
            | (conducir el carro)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/24.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/173.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to have lunch
            br
            | (comer/<br>almorzar)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/25.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/174.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to cook
            br
            |(cocinar) 
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/26.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/175.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to listen to music
            br
            | (escuchar música)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/27.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/176.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to read a book
 
            br
            | (leer un libro)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/28.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/177.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to write
            br
            | (escribir)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/29.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/178.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to have dinner
            br
            | (cenar)
      .tarjeta.p-4.d-flex.align-items-end.tarjeta-bg(:style="{'background-image': `url(${require('@/assets/curso/temas/30.jpg')})`}" style='height: 394px')
        .tarjeta.bg-white.p-3.w-100
          Audio.color-acento-contenido.mb-2.m-auto(:audio="require('@/assets/curso/audios/179.mp3')")
          p.text-center
            span.r-3.fst-italic.fw-bold to go to bed
            br
            | (irse a la cama)
    p.mb-5(data-aos='fade-right')  Ahora, es ideal practicar con algunos ejemplos propios. Escuche, lea y practique. 
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 6
      span Verbos de rutinas
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-3
        img(data-aos='zoom-in-up')(src='@/assets/curso/temas/31.svg', alt='')
      .col-lg-7
        #carouselExampleIndicators.carousel.slide.indicators-none(data-ride="carousel" data-bs-interval="false" data-interval="false")
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 8')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='8' aria-label='Slide 9')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='9' aria-label='Slide 10')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='10' aria-label='Slide 11')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='11' aria-label='Slide 12')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='12' aria-label='Slide 13')
          .carousel-inner
            .carousel-item.active.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Lucas <span class='r-2'>gets up</span> at six o’clock every day."
                      :audio="require('@/assets/curso/audios/180.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Lucas se levanta a las seis en punto todos los días.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Jerry <span class='r-2'>brushes his teeth </span> when he gets up."
                      :audio="require('@/assets/curso/audios/65.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Jerry cepilla sus dientes cuando se levanta.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Teresa <span class='r-2'> washes </span> her clothes on Fridays."
                      :audio="require('@/assets/curso/audios/66.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Teresa lava la ropa los viernes.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Felipe  <span class='r-2'>shaves </span> in the morning."
                      :audio="require('@/assets/curso/audios/67.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Felipe se afeita por las mañanas.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Paula <span class='r-2'>eats her breakfast</span> at eight in the morning."
                      :audio="require('@/assets/curso/audios/68.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Paula toma su desayuno a las ocho de la mañana.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Silvia <span class='r-2'>has lunch </span> at twelve o’clock."
                      :audio="require('@/assets/curso/audios/69.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Silvia almuerza a las doce en punto.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Javier <span class='r-2'>takes his snack </span> at three in the afternoon."
                      :audio="require('@/assets/curso/audios/70.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Javier toma su merienda a las tres de la tarde.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="My aunt <span class='r-2'>drinks </span> her tea at five in the afternoon."
                      :audio="require('@/assets/curso/audios/71.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Mi tía toma su té a las cinco de la tarde.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Miguel <span class='r-2'>goes to </span> French classes at four in the afternoon."
                      :audio="require('@/assets/curso/audios/72.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Miguel va a clases de francés a las cuatro de la tarde.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Diana <span class='r-2'>washes </span> her hair on weekends."
                      :audio="require('@/assets/curso/audios/73.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Diana lava su cabello los fines de semana.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Her mom <span class='r-2'>combs her hair </span> every day."
                      :audio="require('@/assets/curso/audios/74.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Su mamá peina su cabello todos los días.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Mario <span class='r-2'>pays off </span> his credit card every month."
                      :audio="require('@/assets/curso/audios/75.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Mario paga su tarjeta de crédito cada mes.
            .carousel-item.px-5.tarjeta.rounded-0.color-primario
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Olivia  <span class='r-2'>washes </span> the dishes after lunch."
                      :audio="require('@/assets/curso/audios/76.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Olivia lava los platos después del almuerzo.

              
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    .tarjeta.color-acento-contenido.rounded-0.margin-n.p-3.my-5.px-5
      .row.justify-content-center.align-items-center
        .col-4.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/32.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Repita y grábese
              p.text-small Para practicar la pronunciación, puede escuchar los audios y repetirlos grabando su propia voz con herramientas como <b><em>“Voice recorder”</em></b> desde el enlace https://online-voice-recorder.com/ o desde algún recurso tecnológico, como el celular, con aplicaciones grabadoras de voz. 
            .col-sm-auto
              a.boton.color-acento-botones(href="https://online-voice-recorder.com/" target="_blank")
                span Enlace
                i.fas.fa-link
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2. Pasatiempos
    p.mb-5(data-aos='fade-right') Cuando las personas tienen un tiempo libre, les gusta dedicarse a realizar actividades que les ayudan a distraerse, entretenerse o pasar un rato realizando una actividad  recreativa, ya sea dentro o fuera de la casa. De manera que puede decirse que un pasatiempo es toda aquella actividad que se realiza con la finalidad de pasar el tiempo libre.
      br
      br
      |En inglés, se utiliza la palabra 
      span.r-3.fst-italic hobby 
      | para designar un pasatiempo. 
      span.r-3.fst-italic Hobbies
      |, en plural.
      br
      br
      |A continuación, se presentan algunos ejemplos de pasatiempos, que pueden ser actividades ordinarias o juegos de cualquier tipo:
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-3
        .img-animation

      .col-lg-7
        #carouselExampleIndicators2.carousel.slide.indicators-none(data-bs-ride='carousel' data-bs-interval="false" data-interval='false' data-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='4' aria-label='Slide 5')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='5' aria-label='Slide 6')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='6' aria-label='Slide 7')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='7' aria-label='Slide 8')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='8' aria-label='Slide 9')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='9' aria-label='Slide 10')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='10' aria-label='Slide 11')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='11' aria-label='Slide 12')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='12' aria-label='Slide 13')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='13' aria-label='Slide 14')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='14' aria-label='Slide 15')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='15' aria-label='Slide 16')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='16' aria-label='Slide 17')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='17' aria-label='Slide 18')
            button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='18' aria-label='Slide 19')
          .carousel-inner
            .carousel-item.active.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Charles <span class='r-2'> goes to the movies </span> on weekends."
                      :audio="require('@/assets/curso/audios/77.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Carlos va al cine los fines de semana.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Your mom <span class='r-2'>makes cookies </span> in the afternoon."
                      :audio="require('@/assets/curso/audios/78.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Tu mamá hace galletas por la tarde. 
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Marlene <span class='r-2'> draws</span> in the studio."
                      :audio="require('@/assets/curso/audios/79.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Marlene dibuja en el estudio.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="John <span class='r-2'>  plays video games.</span>"
                      :audio="require('@/assets/curso/audios/80.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Juan juega videojuegos.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Richard <span class='r-2'>reads </span> a storybook."
                      :audio="require('@/assets/curso/audios/81.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Ricardo lee un libro de cuentos.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Sam <span class='r-2'> goes to the beach</span> on Sundays."
                      :audio="require('@/assets/curso/audios/82.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Sam va a la playa los domingos.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Susana <span class='r-2'>swims </span> in the pool."
                      :audio="require('@/assets/curso/audios/83.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Susana nada en la piscina.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Lucy <span class='r-2'>paints </span> with watercolors."
                      :audio="require('@/assets/curso/audios/84.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Lucy pinta con acuarelas.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Liz <span class='r-2'>knits </span> hats for her baby."
                      :audio="require('@/assets/curso/audios/85.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Liz teje gorros para su bebé.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Pablo <span class='r-2'>plays chess </span> with his friends."
                      :audio="require('@/assets/curso/audios/86.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Pablo juega ajedrez con sus amigos. 
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Celine <span class='r-2'>reads </span> fashion magazines."
                      :audio="require('@/assets/curso/audios/87.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Celine lee revistas de moda.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Kristhine <span class='r-2'>does crossword puzzles </span> in her bedroom."
                      :audio="require('@/assets/curso/audios/88.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Cristina hace crucigramas en su dormitorio.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Amadeus <span class='r-2'>plays the piano </span> every night."
                      :audio="require('@/assets/curso/audios/89.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Amadeus toca el piano todas las noches.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Cervando <span class='r-2'>watches the birds </span>  in the countryside."
                      :audio="require('@/assets/curso/audios/90.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Cervando mira los pájaros en el campo.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="You <span class='r-2'>play soccer </span> in the backyard of your house."
                      :audio="require('@/assets/curso/audios/91.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Ustedes juegan fútbol en el patio de su casa.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Michell <span class='r-2'>rides a bike </span> in the afternoons."
                      :audio="require('@/assets/curso/audios/92.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Michell monta bicicleta por las tardes.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Melany  <span class='r-2'>plays </span> with her dolls in the afternoon."
                      :audio="require('@/assets/curso/audios/93.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Melany juega con sus muñecas en la tarde.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Lia <span class='r-2'>listens to music </span> in her bedroom."
                      :audio="require('@/assets/curso/audios/94.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Lia escucha música en su cuarto.
            .carousel-item.px-5.tarjeta.rounded-0.color-acento-contenido
              .row.justify-content-center.align-items-center.my-4
                .col-9
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="Felix <span class='r-2'>watches TV </span> every night."
                      :audio="require('@/assets/curso/audios/95.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Felix ve televisión todas las noches.

              
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2  2.3. Horas del día
    p.mb-5(data-aos='fade-right') Durante el día, dependiendo de la hora, las personas realizan actividades, algunas veces por la mañana, por la tarde o por la noche. Para indicar la hora, se debe iniciar la oración con 
      span.r-3.fst-italic It’s, 
      | para luego indicar el tiempo, mediante la hora en punto o minutos antes o minutos después:
    .tarjeta.bg-claro.rounded-0.color-primario.p-4.mb-5
      SlyderA.slyder-bottons.px-4
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img(data-aos='zoom-in-up')(src='@/assets/curso/temas/37.svg', alt='')
          .col-md-8
            .tarjeta.bg-white.p-4
              .tarjeta.color-secundario.rounded-0.p-2.d-inline-block.mb-3
                h4.text-white.me-5.mb-0 What time is it?
              .row.mb-3
                .col-lg-7
                  h4.ms-4.mb-1 7:00
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="It’s seven o’clock."
                      :audio="require('@/assets/curso/audios/96.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Son las siete en punto.
              .row.mb-5
                .col-lg-6.mb-lg-0.mb-3
                  .d-lg-flex.d-block.justify-content-center.align-items-end
                    img(src='@/assets/curso/temas/38.svg', alt='' style='width: 59px').me-3
                    p.fw-bold.mb-0 Cuando es en la mañana, se señala:
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto=" It´s seven o’clock in the morning."
                      :audio="require('@/assets/curso/audios/97.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Son las siete de la mañana.
                .col-lg-6.mb-lg-0.mb-3
                  .d-lg-flex.d-block.justify-content-center.align-items-end
                    img(src='@/assets/curso/temas/39.svg', alt='' style='width: 59px').me-3
                    p.fw-bold.mb-0 Cuando es en la noche, se dice:
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="It´s seven o’clock at night."
                      :audio="require('@/assets/curso/audios/98.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Son las siete de la noche.
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/40.svg', alt='')
          .col-md-8
            .tarjeta.bg-white.p-4
              .tarjeta.color-secundario.rounded-0.p-2.d-inline-block.mb-3
                h4.text-white.me-5.mb-0 What time is it?

              h4.ms-4.mb-1  7:05
              .row.mb-5
                .col-lg-6
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="It’s five after seven."
                      :audio="require('@/assets/curso/audios/99.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Son cinco después de las siete.
                .col-lg-6
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="It’s five minutes after seven."
                      :audio="require('@/assets/curso/audios/100.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Son cinco minutos después de las siete.
                .col-lg-6
                  TarjetaAudio.color-acento-contenido.bg-white.my-3(
                      texto="It’s seven-five."
                      :audio="require('@/assets/curso/audios/101.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                  p Son las siete y cinco
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/41.svg', alt='')
          .col-md-8
            .tarjeta.bg-white.p-4
              .tarjeta.color-secundario.rounded-0.p-2.d-inline-block.mb-3
                h4.text-white.me-5.mb-0 What time is it?
              h4.ms-4.mb-1 7:10
                .row.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s ten after seven."
                        :audio="require('@/assets/curso/audios/102.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Son diez después de las siete.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s ten minutes after seven."
                        :audio="require('@/assets/curso/audios/103.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Son diez minutos después de las siete.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s seven-ten. "
                        :audio="require('@/assets/curso/audios/104.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Son las siete y diez.
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/42.svg', alt='')
          .col-md-8
            .tarjeta.bg-white.p-4
              .tarjeta.color-secundario.rounded-0.p-2.d-inline-block.mb-3
                h4.text-white.me-5.mb-0 What time is it?
              h4.ms-4.mb-1  7:15
                .row.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s a quarter after seven."
                        :audio="require('@/assets/curso/audios/105.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Son las siete y cuarto.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s seven-fifteen."
                        :audio="require('@/assets/curso/audios/106.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Son las siete y quince.
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/43.svg', alt='')
          .col-md-8
            .tarjeta.bg-white.p-4
              .tarjeta.color-secundario.rounded-0.p-2.d-inline-block.mb-3
                h4.text-white.me-5.mb-0 What time is it?
              h4.ms-4.mb-1 7:30
                .row.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s half past seven."
                        :audio="require('@/assets/curso/audios/107.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Son las siete y media.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s seven thirty."
                        :audio="require('@/assets/curso/audios/108.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Son las siete y treinta.
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/44.svg', alt='')
          .col-md-8
            .tarjeta.bg-white.p-4
              .tarjeta.color-secundario.rounded-0.p-2.d-inline-block.mb-3
                h4.text-white.me-5.mb-0 What time is it?
              h4.ms-4.mb-1 7:35
                .row.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s seven thirty-five."
                        :audio="require('@/assets/curso/audios/109.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Son las siete y treinta y cinco.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s twenty-five minutes to eight."
                        :audio="require('@/assets/curso/audios/110.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Faltan veinticinco minutos para las ocho.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s twenty-five to eight."
                        :audio="require('@/assets/curso/audios/111.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Faltan veinticinco para las ocho.
        
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/45.svg', alt='')
          .col-md-8
            .tarjeta.bg-white.p-4
              .tarjeta.color-secundario.rounded-0.p-2.d-inline-block.mb-3
                h4.text-white.me-5.mb-0 What time is it?
              h4.ms-4.mb-1 7:45
                .row.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s seven forty-five."
                        :audio="require('@/assets/curso/audios/112.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Son las siete y cuarenta y cinco.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s a quarter to eight."
                        :audio="require('@/assets/curso/audios/113.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Son las ocho menos cuarto.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s fifteen minutes to eight."
                        :audio="require('@/assets/curso/audios/114.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Faltan quince minutos para las ocho.
        
        .row.justify-content-center.align-items-center
          .col-md-3.mb-4.mb-md-0
            img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/46.svg', alt='')
          .col-md-8
            .tarjeta.bg-white.p-4
              .tarjeta.color-secundario.rounded-0.p-2.d-inline-block.mb-3
                h4.text-white.me-5.mb-0 What time is it?
              h4.ms-4.mb-1 7:55
                .row.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s seven fifty-five. "
                        :audio="require('@/assets/curso/audios/115.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Son las siete y cincuenta y cinco.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s five minutes to eight."
                        :audio="require('@/assets/curso/audios/116.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Faltan cinco minutos para las ocho.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                        texto="It’s five to eight."
                        :audio="require('@/assets/curso/audios/117.mp3')"
                        @audio-hover="mostrarIndicadorTarjetaAudio = false"
                      )
                    p Faltan cinco para las ocho.

    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Actividad didáctica	
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/completar-espacios.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 <em>Observing a person’s routine.</em> / Observando la rutina de una persona.
        p.mb-4 Indicar la hora y la actividad que hace el sujeto de acuerdo con la hora del día que marca el reloj.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Introducir texto mediante el teclado para responder preguntas formuladas sobre la hora y la rutina diaria de una persona.
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad2/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece    







</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.slyder-arrows
  .slyder-f__btn
    .fa-chevron-left:before
      content: url("../assets/curso/temas/arrow-left.svg") !important
    .fa-chevron-right:before
      content: url("../assets/curso/temas/arrow-right.svg") !important
.indicators-none
  .carousel-indicators
    display: none
  .carousel-control-next, .carousel-control-prev
    background-color: $color-acento-botones !important
    opacity: 1
  .carousel-control-next-icon
    background-image: url("../assets/curso/temas/iz-azul.svg") !important
  .carousel-control-prev-icon
    background-image: url("../assets/curso/temas/de-azul.svg") !important
.img-animation

  width: 100%
  height: 248px
  background-repeat: no-repeat
  background-size: 100%
  background-position: bottom
  animation: animate 100s ease-in-out
  -webkit-animation: animate 10s infinite
  // background-image: url("../assets/curso/temas/33.svg")
@keyframes animate
  0%, 100%
    background-image: url("../assets/curso/temas/33.svg")
  25%
    background-image: url("../assets/curso/temas/34.svg")
  50%
    background-image: url("../assets/curso/temas/35.svg")
  75%
    background-image: url("../assets/curso/temas/35.svg")
.slyder-bottons
  .slyder-a__bullets
    display: none
.slyder-a__btn--atrs , .slyder-a__btn--sigt
  background-color: $color-acento-botones !important
  opacity: 1
  border: 0px
  background-image: url("../assets/curso/temas/flecha-blanca.svg") !important
.tarjeta-bg
  bacrkground-repeat: no-repeat
  background-size: cover
  background-position: center
</style>

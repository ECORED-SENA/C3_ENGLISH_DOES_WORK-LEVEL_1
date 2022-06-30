s<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Preposiciones de tiempo
    p.mb-5(data-aos="fade-right") Las preposiciones de tiempo son palabras que le ayudan a expresar en qué momento sucede una acción determinada. Es decir, las preposiciones de tiempo se utilizan para poder indicar la ubicación temporal de una acción, como también para describir un periodo de tiempo, como decir a qué hora sucede algo, o en cuál día de la semana, o cuando se trata de periodos de tiempo, ya sean largos o cortos.
    .row.justify-content-center.mb-5(data-aos="zoom-in-up")
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
            img(src='@/assets/curso/temas/1.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100
              .p-3
                TarjetaAudio.color-acento-contenido.bg-white.my-3(
                    texto="Felipe travels to Brazil <span class='f-4 , color--3'>in </span> February. "
                    :audio="require('@/assets/curso/audios/1.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
                p Felipe viaja a Brasil <b>en</b> Febrero.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
            img(src='@/assets/curso/temas/2.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100
              .p-3
                TarjetaAudio.color-acento-contenido.bg-white.my-3(
                    texto="Milly goes to the gym <span class='f-4'>on </span> Friday morning. "
                    :audio="require('@/assets/curso/audios/2.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                p Milly va al gimnasio <b>los</b> viernes <b>en</b> la mañana.
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta-avatar
            img(src='@/assets/curso/temas/3.svg' alt='AvatarTop')
            .tarjeta.color-primario.w-100
              .p-3
                TarjetaAudio.color-acento-contenido.bg-white.my-3(
                    texto="I always leave home <span class='f-4 , color--3'>at </span> 7 o’clock. "
                    :audio="require('@/assets/curso/audios/3.mp3')"
                    @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
                p Yo siempre salgo de casa <b>a las</b> 7 en punto.
    p.mb-5(data-aos='fade-right') La siguiente imagen presenta las preposiciones de tiempo y cómo se utilizan.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Figura 1
      span Preposiciones de tiempo 
    .row.justify-content-center.mb-5
      .col-lg-8
        img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/4.svg', alt='')
    p.mb-5(data-aos='fade-right') Estas preposiciones de tiempo se usan de forma diferenciada, de acuerdo con las siguientes pautas:
    .row.justify-content-center.mb-5.g-3(data-aos="zoom-in-up")
      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.tarjeta-ribbon.color-primario.bg-claro.p-3.h-100
          .tarjeta-ribbon_texto
            h4 IN
          .p-3
          p.mt-5 Para hablar de periodos cortos o largos, se usa 
            span.r-3.fst-italic in
            |; también se utiliza para periodos de tiempo históricos.
            br
            br
            |Para hablar de los años, los meses y las estaciones del año, se emplea 
            span.r-3.fst-italic in 
            | (en 2010, en mayo, en verano).
            br
            br
            |En todo caso, se emplea cuando el tiempo a indicar no sea una hora, ni un día o una fecha exacta.
          p.fw-bold Por ejemplo:
          .tarjeta.color-primario.p-3
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto=" Joan loves to play in the evening. "
                      :audio="require('@/assets/curso/audios/4.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 A Joan le encanta jugar por la noche.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto=" Luisa eats hot dog in the morning."
                      :audio="require('@/assets/curso/audios/5.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Luisa come perro caliente en la mañana.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="The Second World War ended in 1945. "
                      :audio="require('@/assets/curso/audios/6.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 The Second World War ended in 1945.
            

      .col-lg-4.mb-lg-0.mb-3
        .tarjeta.tarjeta-ribbon.color-primario.bg-claro.p-4.h-100
          .tarjeta-ribbon_texto
            h4 ON
          .p-3
          p.mt-5 En general, se utiliza para todo lo que termina en 
            span.r-3.fst-italic day.
            br
            br
            |De allí que se utiliza para fechas, días de la semana, un momento concreto del día.
          p.fw-bold Por ejemplo:
          .tarjeta.color-primario.p-3
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Pablo is free on Saturdays. "
                      :audio="require('@/assets/curso/audios/7.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Pablo está libre los sábados.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Monique will arrive from Paris on Sunday. "
                      :audio="require('@/assets/curso/audios/8.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Monique llegará de París el domingo.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto=" Paola dances very much on her birthday."
                      :audio="require('@/assets/curso/audios/9.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Paola baila mucho en su cumpleaños.
      .col-lg-4
        .tarjeta.tarjeta-ribbon.color-primario.bg-claro.p-4.h-100
          .tarjeta-ribbon_texto
            h4 AT
          .p-3
          p.mt-5 Para hablar de las horas, se utiliza 
            span.r-1.fst-italic at 
            | (a las 11). Además de indicar la hora, se emplea cuando se quiere indicar que la acción ocurre en este momento o de manera simultánea con otra acción.
          p.fw-bold Por ejemplo:
          .tarjeta.color-primario.p-3
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="He leaves school at 5 in the afternoon. "
                      :audio="require('@/assets/curso/audios/10.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Él sale del colegio a las 5 de la tarde.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Ann eats her snack at 3 o’clock. "
                      :audio="require('@/assets/curso/audios/11.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Ann come su merienda a las 3 en punto.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Peter and July meet at night. "
                      :audio="require('@/assets/curso/audios/12.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Peter y July se ven en la noche.
    p.mb-5(data-aos='fade-right') Existen algunas preposiciones de tiempo que indican la ubicación temporal de algo o alguien. Dentro de las más comunes, se encuentran:
    TabsB.color-acento-contenido.mb-5
      .tarjeta.color-acento-botones.rounded-0.py-4.py-md-5.px-5(titulo="By" :icono="require('@/assets/curso/temas/5.svg')")
          .row.justify-content-center.mb-1
            .col-lg-11
              h3
                span.r-2  By
              p.mb-4 Puede utilizarse para indicar <b>tiempo, lugar o modo en que se realiza una acción.</b> Esta preposición se utiliza cuando se quiere indicar que una actividad o acción se debe realizar antes de otro evento, situación o un tiempo determinado.
          .bg-white.p-4.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-3.col-6.mb-3.mb-lg-0
                img(data-aos='zoom-in-up')(src='@/assets/curso/temas/6.svg', alt='')
              .col-lg-9
                h4.mb-4 Ejemplos
                .row.justify-content-center.align-items-center
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="I have to arrive by midnight. "
                      :audio="require('@/assets/curso/audios/13.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Yo debo llegar para la medianoche.
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Bill marries by noon."
                      :audio="require('@/assets/curso/audios/14.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Bill se casa al mediodía.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="I will sell the house by next month. "
                      :audio="require('@/assets/curso/audios/15.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Yo venderé la casa el próximo mes.
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="You must finish the task by Monday."
                      :audio="require('@/assets/curso/audios/16.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Tu debes acabar la tarea para el Lunes.
          .tarjeta.rounded-0.color-primario.p-2.text-white.d-inline-block.mb-4
            h5.mb-0.me-5 En forma interrogativa:
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Pregunta:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Does Joe send the folder by Friday?"
                      :audio="require('@/assets/curso/audios/17.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 ¿Joe envía la carpeta para el viernes?
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta afirmativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Yes, Joe sends the folder by Friday."
                      :audio="require('@/assets/curso/audios/18.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 Si, Joe envía la carpeta para el viernes.
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta negativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="No, Joe doesn’t send the folder by Friday."
                      :audio="require('@/assets/curso/audios/19.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 No, Joe envía la carpeta para el viernes.

      .tarjeta.color-acento-botones.rounded-0.py-4.py-md-5.px-5(titulo="Until" :icono="require('@/assets/curso/temas/5.svg')")
          .row.justify-content-center.mb-1
            .col-lg-11
              h3
                span.r-2  Until
              p.mb-4 Esta preposición se utiliza cuando se quiere hacer referencia a una acción que dura hasta un momento determinado.
          .bg-white.p-4.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-3.col-6.mb-3.mb-lg-0
                img(data-aos='zoom-in-up')(src='@/assets/curso/temas/6.svg', alt='')
              .col-lg-9
                h4.mb-4 Ejemplos
                .row.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto=" Bill works until 5 p.m."
                      :audio="require('@/assets/curso/audios/20.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Bill trabaja hasta las 5 p.m.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Joe and Mary lived together until last month. "
                      :audio="require('@/assets/curso/audios/21.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Joe y Mary vivieron juntos hasta el mes pasado.
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto=" Children must wait until it stops raining."
                      :audio="require('@/assets/curso/audios/22.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Los niños deben esperar hasta que deje de llover.
          .tarjeta.rounded-0.color-primario.p-2.text-white.d-inline-block.mb-4
            h5.mb-0.me-5 En forma interrogativa:
          .row.justify-content-center.mb-3
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Pregunta:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Does Laury travel until the end of July?"
                      :audio="require('@/assets/curso/audios/23.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 ¿Laury viaja hasta finales de Julio?
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta afirmativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Yes, Laury travels until the end of July."
                      :audio="require('@/assets/curso/audios/24.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 Si, Laury viaja hasta finales de Julio.
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta negativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="No, Laury doesn’t travel until the end of July. "
                      :audio="require('@/assets/curso/audios/25.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              p.mb-3.ms-4 No, Laury no viaja hasta finales de Julio.
          .row.justify-content-center.mb-0
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Pregunta:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Are the tools available now?"
                      :audio="require('@/assets/curso/audios/26.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 ¿Están disponibles las herramientas ahora?
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta afirmativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Yes, the tools are available now. "
                      :audio="require('@/assets/curso/audios/27.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 Si, las herramientas están disponibles ahora.
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta negativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="No, the tools aren’t available until tomorrow.  "
                      :audio="require('@/assets/curso/audios/28.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              p.mb-3.ms-4 No, las herramientas no están disponibles hasta mañana.
      .tarjeta.color-acento-botones.rounded-0.py-4.py-md-5.px-5(titulo="Since " :icono="require('@/assets/curso/temas/5.svg')")
          .row.justify-content-center.mb-1
            .col-lg-11
              h3
                span.r-2 Since 
              p.mb-4 Esta preposición se utiliza cuando se quiere indicar el momento en que inició una acción. De manera que el inicio de la acción fue en el pasado pero su fin puede ser en el presente o en el futuro. En general, puede traducirse como: desde.
          .bg-white.p-4.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-3.col-6.mb-3.mb-lg-0
                img(data-aos='zoom-in-up')(src='@/assets/curso/temas/6.svg', alt='')
              .col-lg-9
                h4.mb-4 Ejemplos
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Children have been waiting for you since morning. "
                      :audio="require('@/assets/curso/audios/29.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Los niños han estado esperando por ti desde la mañana.
                    // //todo! ESTE AUDIO ESTA ERRADO, SE NECESITA CAMBIAR 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="The office has been closed since last week."
                      :audio="require('@/assets/curso/audios/30.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 La oficina ha estado cerrada desde la semana pasada.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Charles has been working on that project since yesterday. "
                      :audio="require('@/assets/curso/audios/31.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Charles ha estado trabajando en ese proyecto desde ayer. 
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="They have been traveling the world since last month."
                      :audio="require('@/assets/curso/audios/32.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Ellos han estado viajando por el mundo desde el mes pasado. 
          .tarjeta.rounded-0.color-primario.p-2.text-white.d-inline-block.mb-4
            h5.mb-0.me-5 En forma interrogativa:
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Pregunta:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Have the boys been playing in the park since 4 p. m.?"
                      :audio="require('@/assets/curso/audios/33.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 ¿Los muchachos han estado jugando en el parque desde las 4 p.m.?
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta afirmativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Yes, the boys have been playing in the park since 4 p. m. "
                      :audio="require('@/assets/curso/audios/34.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 Si, los muchachos han estado jugando en el parque desde las 4 p. m.
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta negativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="No, the boys haven’t been playing in the park since 4 p. m."
                      :audio="require('@/assets/curso/audios/35.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              p.mb-3.ms-4 No, los muchachos no han estado jugando en el parque desde las 4 p. m.
      .tarjeta.color-acento-botones.rounded-0.py-4.py-md-5.px-5(titulo="For" :icono="require('@/assets/curso/temas/5.svg')")
          .row.justify-content-center.mb-1
            .col-lg-11
              h3
                span.r-2 For 
              p.mb-4 Esta preposición se utiliza cuando se quiere indicar una cantidad de tiempo en la que se realizó una acción.
          .bg-white.p-4.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-3.col-6.mb-3.mb-lg-0
                img(data-aos='zoom-in-up')(src='@/assets/curso/temas/6.svg', alt='')
              .col-lg-9
                h4.mb-4 Ejemplos
                .row.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto=" He drove the car for five hours."
                      :audio="require('@/assets/curso/audios/36.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Él manejó el carro por cinco horas.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="The baby slept only for thirty minutes. "
                      :audio="require('@/assets/curso/audios/37.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 El bebé durmió solo por treinta minutos.
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Michael worked for a year on his project."
                      :audio="require('@/assets/curso/audios/38.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Michael trabajó por un año en su proyecto.
          .tarjeta.rounded-0.color-primario.p-2.text-white.d-inline-block.mb-4
            h5.mb-0.me-5 En forma interrogativa:
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Pregunta:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Did Susan work in that office for two years?"
                      :audio="require('@/assets/curso/audios/39.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 ¿Susan trabajó en esa oficina por dos años?
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta afirmativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Yes, Susan worked in that office for two years."
                      :audio="require('@/assets/curso/audios/40.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 Si, Susan trabajó en esa oficina por dos años.
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta negativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="No, Susan didn’t work in that office for two years."
                      :audio="require('@/assets/curso/audios/41.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              p.mb-3.ms-4 No, Susan no trabajó en esa oficina por dos años.
      .tarjeta.color-acento-botones.rounded-0.py-4.py-md-5.px-5(titulo="Before" :icono="require('@/assets/curso/temas/5.svg')")
          .row.justify-content-center.mb-1
            .col-lg-11
              h3
                span.r-2  Before
              p.mb-4 Esta preposición se utiliza cuando se quiere indicar que algo sucede antes que otro evento específico o determinado.
          .bg-white.p-4.mb-5
            .row.justify-content-center.align-items-center
              .col-lg-3.col-6.mb-3.mb-lg-0
                img(data-aos='zoom-in-up')(src='@/assets/curso/temas/6.svg', alt='')
              .col-lg-9
                h4.mb-4 Ejemplos
                .row.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="James reads the magazine before breakfast."
                      :audio="require('@/assets/curso/audios/42.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 James lee la revista antes del desayuno.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Robert and Leo eat lunch before going to school. "
                      :audio="require('@/assets/curso/audios/43.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Robert y Leo comen el almuerzo antes de ir al colegio.
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Carmen takes a bath before leaving home."
                      :audio="require('@/assets/curso/audios/44.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Carmen se baña antes de salir de casa.
          .tarjeta.rounded-0.color-primario.p-2.text-white.d-inline-block.mb-4
            h5.mb-0.me-5 En forma interrogativa:
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Pregunta:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Do children pray before going to sleep?"
                      :audio="require('@/assets/curso/audios/45.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 ¿Los niños rezan antes de ir a dormir?
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta afirmativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Yes, children pray before going to sleep."
                      :audio="require('@/assets/curso/audios/46.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 Si, los niños rezan antes de ir a dormir.
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta negativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Carmen takes a bath before leaving home."
                      :audio="require('@/assets/curso/audios/47.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              p.mb-3.ms-4 Carmen se baña antes de salir de casa.
      .tarjeta.color-acento-botones.rounded-0.py-4.py-md-5.px-5(titulo="After" :icono="require('@/assets/curso/temas/5.svg')")
          .row.justify-content-center.mb-1
            .col-lg-11
              h3
                span.r-2 After
              p.mb-4 Esta preposición se utiliza cuando se quiere indicar que una acción o evento sucede después de algo. Este algo puede ser un sustantivo, de un verbo en gerundio o de una frase.
          .bg-white.p-4.mb-3
            .row.justify-content-center.align-items-center
              .col-lg-3.col-6.mb-3.mb-lg-0
                img(data-aos='zoom-in-up')(src='@/assets/curso/temas/6.svg', alt='')
              .col-lg-9
                h4.mb-4 Ejemplos
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Janeth calls him after finishing  work. "
                      :audio="require('@/assets/curso/audios/48.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Janeth lo llama después de terminar el trabajo.
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="After mass, they spoke with the priest."
                      :audio="require('@/assets/curso/audios/50.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Después de la misa, ellos hablaron con el sacerdote
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Leo plays with his friends after he does his homework. "
                      :audio="require('@/assets/curso/audios/49.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Leo juega con sus amigos después de hacer su tarea.
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Jim went to the gym after finishing his shift at the store."
                      :audio="require('@/assets/curso/audios/51.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Jim fue al gimnasio después de terminar su turno en la tienda. 
          .tarjeta.rounded-0.color-primario.p-2.text-white.d-inline-block.mb-4
            h5.mb-0.me-5 En forma interrogativa:
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Pregunta:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Do children go to bed after saying their prayers? "
                      :audio="require('@/assets/curso/audios/52.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 ¿Los niños se van a la cama después de rezar sus oraciones?
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta afirmativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Yes, children go to bed after saying their prayers."
                      :audio="require('@/assets/curso/audios/53.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 Si, los niños van a la cama después de rezar sus oraciones.
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta negativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="No, children don’t go to bed after saying their prayers."
                      :audio="require('@/assets/curso/audios/54.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              p.mb-3.ms-4 No, los niños no van a la cama después de rezar sus oraciones.

      .tarjeta.color-acento-botones.rounded-0.py-4.py-md-5.px-5(titulo="During" :icono="require('@/assets/curso/temas/5.svg')")
          .row.justify-content-center.mb-1
            .col-lg-11
              h3
                span.r-2 During
              p.mb-4 Esta preposición se utiliza cuando se quiere indicar que una acción sucede al mismo tiempo que otra, es decir, simultáneamente. Esta preposición siempre va seguida de un nombre o sustantivo.
          .bg-white.p-4.mb-4
            .row.justify-content-center.align-items-center
              .col-lg-3.col-6.mb-3.mb-lg-0
                img(data-aos='zoom-in-up')(src='@/assets/curso/temas/6.svg', alt='')
              .col-lg-9
                h4.mb-4 Ejemplos
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Carol lived in that house during her childhood. "
                      :audio="require('@/assets/curso/audios/55.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Carol vivió en esa casa durante su niñez.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Children play in the schoolyard during the recess."
                      :audio="require('@/assets/curso/audios/56.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Los niños juegan en el patio de la escuela durante el recreo.
                  .col-lg-8
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="The young people had a lot of fun during the boat ride."
                      :audio="require('@/assets/curso/audios/57.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                    p.mb-3.ms-4 Los jóvenes se divirtieron mucho durante el paseo en barco.
              .tarjeta.rounded-0.color-primario.p-2.text-white.d-inline-block.mb-4
                h5.mb-0.me-5 En forma interrogativa:
          .row.justify-content-center.mb-5
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Pregunta:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Did her baby cry during Marty’s graduation ceremony?"
                      :audio="require('@/assets/curso/audios/58.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 ¿Su bebé lloró durante la ceremonia de graduación de Marty?
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta afirmativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Yes, her baby cried during Marty’s graduation ceremony."
                      :audio="require('@/assets/curso/audios/59.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
              p.mb-3.ms-4 Si, su bebé lloró durante la ceremonia de graduación de Marty.
            .col-lg-4.mb-lg-0.mb-3
              p.fw-bold.mb-3 Respuesta negativa:
              TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="No, her baby didn’t cry during Marty’s graduation ceremony."
                      :audio="require('@/assets/curso/audios/60.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                  )
              p.mb-3.ms-4 No, su bebé no lloró durante la ceremonia de graduación de Marty.
    .titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 Actividad didáctica	
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/template/seleccion-multiple.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 <em>Selecting the best moment.</em> / Seleccionando el mejor momento.
        p.mb-4 Identificar las preposiciones de tiempo que corresponden a los enunciados.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Selección 
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece            

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.tabs-b__tab--active, .tabs-b__tab:hover
  background-color: $color-acento-botones
</style>

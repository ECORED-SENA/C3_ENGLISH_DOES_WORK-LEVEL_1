s<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 1
      h1 Preposiciones de tiempo
    p.mb-5(data-aos="fade-right") Las preposiciones de tiempo son palabras que le ayudan a expresar en qué momento sucede una acción determinada. Es decir, las preposiciones de tiempo se utilizan para poder indicar la ubicación temporal de una acción, como también para describir un periodo de tiempo, como decir a qué hora sucede algo, o en cuál día de la semana, o cuando se trata de periodos de tiempo, ya sean largos o cortos.
    .row.justify-content-center.mb-5
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
                    :audio="require('@/assets/curso/audios/1.mp3')"
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
                    :audio="require('@/assets/curso/audios/1.mp3')"
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
    .row.justify-content-center.mb-5.g-3
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
                      :audio="require('@/assets/curso/audios/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 A Joan le encanta jugar por la noche.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto=" Luisa eats hot dog in the morning."
                      :audio="require('@/assets/curso/audios/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Luisa come perro caliente en la mañana.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="The Second World War ended in 1945. "
                      :audio="require('@/assets/curso/audios/1.mp3')"
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
                      :audio="require('@/assets/curso/audios/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Pablo está libre los sábados.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Monique will arrive from Paris on Sunday. "
                      :audio="require('@/assets/curso/audios/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Monique llegará de París el domingo.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto=" Paola dances very much on her birthday."
                      :audio="require('@/assets/curso/audios/1.mp3')"
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
                      :audio="require('@/assets/curso/audios/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Él sale del colegio a las 5 de la tarde.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Ann eats her snack at 3 o’clock. "
                      :audio="require('@/assets/curso/audios/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Ann come su merienda a las 3 en punto.
            TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                      texto="Peter and July meet at night. "
                      :audio="require('@/assets/curso/audios/1.mp3')"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
            p.mb-3.ms-4 Peter y July se ven en la noche.
    p.mb-5(data-aos='fade-right') Existen algunas preposiciones de tiempo que indican la ubicación temporal de algo o alguien. Dentro de las más comunes, se encuentran:
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

<style lang="sass"></style>

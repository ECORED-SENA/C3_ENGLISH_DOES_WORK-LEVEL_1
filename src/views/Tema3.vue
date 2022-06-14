<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero.text-white
        span 3
      h1 <em>Likes and dislikes</em> / Gustos y disgustos
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-3
        img(data-aos='zoom-in-up')(src='@/assets/curso/temas/47.png', alt='')
      .col-lg-6
        p.mb-5(data-aos='fade-right') Para expresar preferencias, se pueden utilizar una serie de verbos, unos se utilizan para señalar que se siente gusto o afinidad por algo. Y también existen otros verbos que permiten indicar que algo no es de agrado o que se siente disgusto o aversión por ese objeto, persona, animal o acción señalada.
          br
          br
          |Preste atención al siguiente diálogo, las palabras en negrilla son verbos que pueden usarse para expresar la preferencia o el rechazo que se siente por alguien o algo.
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 
        span.r-3.fst-italic Dialogue 1 / 
        | Diálogo 1
    .tarjeta.bg-claro.color-acento-botones.px-5.pt-3
      .row.justify-content-center.align-items-end.mb-5
        .col-lg-4
          img(data-aos='zoom-in-up')(src='@/assets/curso/temas/48.png', alt='')
        .col-lg-4
          img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/49.svg', alt='')
          TarjetaAudio.color-acento-contenido.bg-white.my-3(
                texto=""
                :audio="require('@/assets/curso/audios/1.mp3')"
                @audio-hover="mostrarIndicadorTarjetaAudio = false"
              )
        .col-lg-4
          img(data-aos='zoom-in-up')(src='@/assets/curso/temas/50.png', alt='')
    .tarjeta.position-relative.rounded-0.color-primario.bg-claro.margin-n.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-2.col-5.mb-lg-0.mb-3
          .imagen-absolute
            img(data-aos='zoom-in-up')(src='@/assets/curso/temas/51.svg', alt='')
        .col-lg-10
          p(data-aos='fade-right') Como se puede observar en las opiniones de las personas que participan en el diálogo, ellos expresan lo que prefieren y lo que les disgusta o rechazan, empleando diferentes verbos, entre los que están: to want, to like, to love, to dislike, to adore, to enjoy. Pero estos no son los únicos verbos que pueden utilizarse para expresar agrado o desagrado. 
    p.mb-5(data-aos='fade-right') A continuación, se presentan una serie de verbos que permiten expresar a las personas lo que les gusta y lo que les disgusta.
    .row.justify-content-center.mb-5
      .col-lg-6
        .tarjeta.color-acento-contenido.p-4.h-100
          .tarjeta.rounded-0.color-secundario.d-inline-block.p-2.mb-3
            h3.fst-italic.text-white.mb-0.me-4 Likes
          p.mb-4 En este primer caso de las preferencias 
            span.text-white.fw-bold.fst-italic “LIKES”
            | , se pueden utilizar los siguientes verbos y practicarlos en contextos personales:
          SlyderA(tipo='b')
            .tarjeta.bg-white.overflow-hidden
              img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/52.png', alt='')
              .contenedor-audios.mx-4
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="I like my pet."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Me gusta mi mascota.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="Mary likes carrot cakes."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 A Mary le gustan las tortas de zanahoria.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="They like big cats."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 A ellos les gustan los gatos grandes.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="You like chocolates."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 A ti te gustan los chocolates.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="We like spicy food."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 A nosotros nos gusta la comida picante.
            .tarjeta.bg-white.overflow-hidden
              img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/53.png', alt='')
              .contenedor-audios.mx-4
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="I love my pet."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Yo amo a mi mascota.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="Mary loves her children."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Mary ama a sus hijos.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="They love junk food."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 A ellos les encanta la comida chatarra.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="You love chocolates."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 A ti te encantan los chocolates.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="We love that music."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Nosotros amamos esa música.
            .tarjeta.bg-white.overflow-hidden
              img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/54.png', alt='')
              .contenedor-audios.mx-4
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="I enjoy time with my pet."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Me gusta el tiempo con mi mascota.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="Mary enjoys the candies."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Mary disfruta los dulces.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="They enjoy time together."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Ellos disfrutan el tiempo juntos.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="You enjoy chocolates."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Tú disfrutas los chocolates.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="We enjoy that music."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Nosotros disfrutamos esa música.
            .tarjeta.bg-white.overflow-hidden
              img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/55.png', alt='')
              .contenedor-audios.mx-4
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="I adore the beach."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Yo adoro la playa.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="Mary adores her children."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Mary adora a sus hijos.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="They adore cats."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Ellos adoran los gatos.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="You adore your car."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Tu adoras tu carro.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="We adore the virgin."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Nosotros adoramos a la virgen.
      .col-lg-6
        .tarjeta.color-primario.p-4
          .tarjeta.rounded-0.color-acento-contenido.d-inline-block.p-2.mb-3
            h3.fst-italic.text-white.mb-0.me-4 Dislikes
          p.mb-4 Ahora, cuando se quiere expresar que algo desagrada 
            span.r-4.fst-italic.fw-bold “DISLIKES”
            | , puede utilizar verbos que lo expresen en los diferentes pasajes:
          SlyderA(tipo='b')
            .tarjeta.bg-white.overflow-hidden
              img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/56.png', alt='')
              .contenedor-audios.mx-4
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="I dislike your pet."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 No me gusta tu mascota.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="We dislike spicy food. "
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 A nosotros no nos gusta la comida picante.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="Mary dislikes carrot cakes."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 A Mary no le gustan las tortas de zanahoria.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="You dislike chocolates."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 A ti no te gustan los chocolates.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="They dislike big cats."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 A ellos no les gustan los gatos grandes.   
            .tarjeta.bg-white.overflow-hidden
              img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/57.png', alt='')
              .contenedor-audios.mx-4
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="I hate junk food."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Yo odio la comida chatarra.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="You hate  chocolates."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Tú odias los chocolates.
                  .col-lg-9
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                          texto="Mary hates that green dress."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Mary odia ese vestido verde.
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                          texto="We hate that loud music"
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3  Nosotros odiamos esa música estridente.    
                    TarjetaAudio.color-acento-contenido.bg-white.mb-3(
                          texto="They hate that musical group."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Ellos odian ese grupo musical.  
            .tarjeta.bg-white.overflow-hidden
              img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/58.png', alt='')
              .contenedor-audios.mx-4
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="I abhor Arabian food."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Yo aborrezco la comida árabe.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="Mary abhors the candies."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Mary aborrece los dulces.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="They abhor  junk food."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Ellos aborrecen la comida chatarra.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="You abhor  chocolates."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Tú aborreces los chocolates.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="We abhor that music."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Nosotros aborrecemos esa música.     
            .tarjeta.bg-white.overflow-hidden
              img.mb-5(data-aos='zoom-in-up')(src='@/assets/curso/temas/59.png', alt='')
              .contenedor-audios.mx-4
                .row.justify-content-center.mb-5
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="I detest dirty shoes."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Yo detesto los zapatos sucios.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="Mary detests the candies."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 A Mary le gustan las tortas de zanahoria.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="They detest chinese food."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Ellos detestan la comida china.
                  .col-lg-6
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="You detest  chocolates."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Tú detestas los chocolates.
                    TarjetaAudio.color-acento-contenido.bg-white.my-3(
                          texto="We detest that music."
                          :audio="require('@/assets/curso/audios/1.mp3')"
                          @audio-hover="mostrarIndicadorTarjetaAudio = false"
                        )
                    p.ms-4.mb-3 Nosotros detestamos esa música.     

</template>

<script>
export default {
  name: 'Tema3',
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
.imagen-absolute
  position: absolute
  bottom: 0
  left: 0
  transform: translateX(30%) translateY(10%)
  @media (max-width: $bp-max-lg)
    position: inherit
    transform: none
</style>

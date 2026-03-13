<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos de la agroecología

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.col-md-9.mb-3.mb-lg-0
        img(src='@/assets/curso/temas/t2/1.png', alt='')
      .col-lg-7  
        p Surge como alternativa al modelo agrícola convencional, caracterizado por el uso intensivo de agroquímicos, monocultivos y alta dependencia de insumos externos.
        .bg1.mb-4.p-4
          p.mb-0 La agroecología es un enfoque científico, práctico y social que aplica principios ecológicos al diseño y manejo de sistemas agrícolas sostenibles. Integra conocimientos tradicionales y científicos para fortalecer la resiliencia, equidad y sostenibilidad de los agroecosistemas.
        p La agroecología no es únicamente un conjunto de técnicas, sino un paradigma de transformación rural. 

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Evolución histórica del enfoque agroecológico 

    .bgi-1.tarjeta.p-4.mb-5(data-aos="fade")
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center.align-items-center(titulo="Origen conceptual")
          .col-lg-5.col-md-6.col-9.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t2/pasos1-1.png', alt='')
          .col-lg-5.col-md-6.col-11
            h4 Segunda mitad del siglo XX - Origen conceptual
            p La agroecología emerge como respuesta crítica a las limitaciones ambientales y sociales del modelo agrícola industrial, planteando la necesidad de integrar principios ecológicos en la producción de alimentos. 
        .row.justify-content-center.align-items-center(titulo="Bases científicas")
          .col-lg-5.col-md-6.col-9.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t2/pasos1-2.png', alt='')
          .col-lg-5.col-md-6.col-11
            h4 Década de 1970 - Bases científicas
            p Se consolidan estudios sobre ecología agrícola y se revalorizan los sistemas productivos tradicionales campesinos como modelos adaptativos y resilientes. 
        .row.justify-content-center.align-items-center(titulo="Enfoque sistémico")
          .col-lg-5.col-md-6.col-9.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t2/pasos1-3.png', alt='')
          .col-lg-5.col-md-6.col-11
            h4 Década de 1980 - Enfoque sistémico
            p Se fortalece el análisis integral de los agroecosistemas, incorporando la interacción entre factores ecológicos, económicos y socioculturales, así como los saberes locales. 
        .row.justify-content-center.align-items-center(titulo="Dimensión social y política")
          .col-lg-5.col-md-6.col-9.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t2/pasos1-4.png', alt='')
          .col-lg-5.col-md-6.col-11
            h4 Década de 1990 - Dimensión social y política
            p La agroecología se vincula con movimientos sociales y propuestas de soberanía alimentaria, ampliando su alcance más allá de lo técnico-productivo.   
        .row.justify-content-center.align-items-center(titulo="Reconocimiento internacional")
          .col-lg-5.col-md-6.col-9.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t2/pasos1-5.png', alt='')
          .col-lg-5.col-md-6.col-11
            h4 Siglo XXI - Reconocimiento internacional
            p Organismos como la #[b Organización de las Naciones Unidas para la Alimentación y la Agricultura] promueven la agroecología como estrategia clave para enfrentar el cambio climático, fortalecer la resiliencia territorial y transformar los sistemas alimentarios hacia modelos sostenibles.   

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Características de la agroecología 

    p.mb-4 Las características de la agroecología se fundamentan en la aplicación de principios ecológicos al manejo de los sistemas productivos, promoviendo la diversidad, el reciclaje de nutrientes y el equilibrio natural. Estas características permiten diseñar agroecosistemas sostenibles, resilientes y socialmente justos. 

    .row.justify-content-center.mb-5
      .col-lg-9.position-relative
        .avatar
          img(src="@/assets/curso/temas/t2/2.svg", alt="")          
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t2/tarj1.svg", alt="")
            .col
              p #[b Diversificación productiva:] promueve policultivos y asociaciones vegetales. 
        .crd.crd--avatarHorizontal.py-3
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t2/tarj1.svg", alt="")
            .col
              p #[b Reciclaje de nutrientes:] reutiliza residuos orgánicos para mantener fertilidad. 
        .crd.crd--avatarHorizontal.py-3
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t2/tarj1.svg", alt="")
            .col
              p #[b Sinergias ecológicas:] favorece interacciones positivas entre especies. 
        .crd.crd--avatarHorizontal.py-3
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t2/tarj1.svg", alt="")
            .col
              p #[b Reducción de insumos externos:] disminuye dependencia de agroquímicos. 
        .crd.crd--avatarHorizontal.py-3
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t2/tarj1.svg", alt="")
            .col
              p #[b Participación comunitaria:] involucra a productores en la toma de decisiones. 
        .crd.crd--avatarHorizontal.crd--last.py-3
          .row.align-items-center
            .col-auto
              img(src="@/assets/curso/temas/t2/tarj1.svg", alt="")
            .col
              p #[b Enfoque territorial:] reconoce condiciones ecológicas y culturales locales. 

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Principios ecológicos 

    p.mb-5 Los principios ecológicos orientan el diseño y manejo de los agroecosistemas, buscando armonizar la producción agrícola con los procesos naturales. Estos principios permiten fortalecer la biodiversidad, el equilibrio biológico y la sostenibilidad a largo plazo. 

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="fade-right")
        .bg1
          .row.justify-content-center
            .col-lg-4.d-none.d-lg-block
              img.mt-n15(src='@/assets/curso/temas/t2/3.svg', alt='')
            .col-lg-8
              .p-4
                ul.lista-ul--color.fa-lista.mb-4
                  li.mb-1
                    i.fas.fa-spa
                    span.mb-0 Diversidad biológica. 
                  li.mb-1
                    i.fas.fa-spa
                    span.mb-0 Estabilidad ecológica.
                  li.mb-1
                    i.fas.fa-spa
                    span.mb-0 Reciclaje de biomasa.
                  li.mb-1
                    i.fas.fa-spa
                    span.mb-0 Conservación del suelo. 
                  li.mb-1
                    i.fas.fa-spa
                    span.mb-0 Regulación natural de plagas. 
                  li.mb-1
                    i.fas.fa-spa
                    span.mb-0 Optimización del uso del agua. 
                  li.mb-0
                    i.fas.fa-spa
                    span.mb-0 Resiliencia climática. 
                h5.tc-ac.mb-0 La biodiversidad es la base funcional del agroecosistema agroecológico. 
      .col-lg-6.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/4.png', alt='')

    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Dimensión social y política de la agroecología 

    p La agroecología no se limita a una propuesta técnica de producción sostenible, sino que incorpora una dimensión social y política orientada a transformar las relaciones de poder dentro de los sistemas alimentarios. 
    p.mb-4 En este sentido, la agroecología promueve:  

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/t2/5.png', alt='')
      .col-lg-9
        TabsA.color-acento-botones
          .tarjeta.bg4.p-4.p-lg-5(titulo="Soberanía alimentaria")
            p.mb-0 Defiende el derecho de los pueblos a decidir qué producir, cómo producir y para quién producir, priorizando mercados locales y alimentación saludable. 
          .tarjeta.bg4.p-4.p-lg-5(titulo="Justicia social")
            p.mb-0 Busca reducir desigualdades estructurales en el acceso a la tierra, el agua, las semillas y los recursos productivos. 
          .tarjeta.bg4.p-4.p-lg-5(titulo="Autonomía campesina")
            p.mb-0 Disminuye la dependencia de insumos externos y fortalece la capacidad organizativa rural.  
          .tarjeta.bg4.p-4.p-lg-5(titulo="Participación comunitaria")
            p.mb-0 Involucra a comunidades rurales en procesos de planificación y toma de decisiones. 
          .tarjeta.bg4.p-4.p-lg-5(titulo="Equidad de género")
            p.mb-0 Reconoce el papel fundamental de las mujeres rurales en la producción de alimentos y conservación de semillas. 

    .row.justify-content-center.mb-5
      .col-lg-7
        .cajon.color-primario.bg1.p-4
          p.mb-0 La agroecología se configura como un enfoque transformador que articula ecología, economía y justicia social. 


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Agroecología como ciencia, práctica y movimiento 

    p La agroecología se entiende desde una perspectiva integral que abarca su dimensión científica, su aplicación práctica en el campo y su carácter de movimiento social transformador. Esta triple óptica permite articular conocimiento académico, saberes tradicionales y acción colectiva en favor de sistemas alimentarios sostenibles. 

    .row.justify-content-center.cursor-pointer.mb-4
      .col-xl-4.col-md-6.col-11.mb-3.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t2/tarj2-1.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Como ciencia
            p.mb-0 Estudia los agroecosistemas desde principios ecológicos, analizando interacciones entre suelo, plantas, animales, clima y seres humanos.
      .col-xl-4.col-md-6.col-11.mb-3.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t2/tarj2-2.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Como práctica
            p.mb-0 Se materializa en técnicas como policultivos, sistemas agroforestales, manejo integrado de plagas, uso de abonos orgánicos y conservación de semillas nativas.
      .col-xl-4.col-md-6.col-11.mb-3.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            img(src="@/assets/curso/temas/t2/tarj2-3.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Como movimiento social
            p.mb-0 Es impulsada por organizaciones campesinas que promueven la defensa del territorio, la biodiversidad y la soberanía alimentaria.

    .row.justify-content-center
      .col-lg-7
        .cajon.color-primario.bg1.p-4
          p.mb-0 Esta triple dimensión permite integrar conocimiento académico, saber tradicional y acción colectiva. 



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
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

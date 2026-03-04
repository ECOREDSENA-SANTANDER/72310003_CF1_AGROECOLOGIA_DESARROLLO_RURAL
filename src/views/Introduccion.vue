<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4(data-aos="fade")
      .col-lg-1.col-md-2.col-3
        img(src='@/assets/curso/temas/intro/1.svg', alt='')
      .col-lg-11.col-md-10.col-9
        p.mb-0 La agricultura constituye uno de los pilares fundamentales del desarrollo humano, al garantizar la producción de alimentos, materias primas y medios de subsistencia para millones de personas en el mundo. A lo largo de la historia, los sistemas agrícolas han evolucionado en respuesta a cambios tecnológicos, sociales y económicos, dando lugar a modelos productivos con distintos niveles de impacto sobre el ambiente y las comunidades rurales. 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7(data-aos="fade-right")
        p Durante el siglo XX, la revolución verde representó un punto de inflexión en la intensificación de la producción agrícola, al impulsar el uso de semillas mejoradas, fertilizantes sintéticos, agroquímicos y procesos de mecanización. Aunque este modelo contribuyó de manera significativa al aumento de la disponibilidad de alimentos a nivel mundial, también ocasionó impactos negativos sobre el suelo, los recursos hídricos, la biodiversidad y la salud. Como consecuencia, la progresiva degradación de los recursos naturales, la reducción de la diversidad biológica y la creciente dependencia de insumos externos pusieron en evidencia la necesidad de transformar los sistemas productivos, orientándolos hacia enfoques más sostenibles, resilientes y ambientalmente responsables.
      .col-lg-5.col-md-9(data-aos="fade-left")
        img(src='@/assets/curso/temas/intro/2.png', alt='')
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4(data-aos="fade-right")
        p Es así, como la agroecología surge como una alternativa que integra principios ecológicos, conocimientos tradicionales y criterios de sostenibilidad social y económica. Por ello, más que una técnica agrícola, la agroecología constituye un enfoque integral que concibe una “finca” como un “agroecosistema”, donde interactúan factores biológicos, físicos y humanos. Su propósito es diseñar sistemas resilientes, diversificados y armónicos con el entorno natural.
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/temas/intro/3.svg', alt='')
      .col-lg-5(data-aos="fade-left")
        p La evaluación ambiental de los sistemas agrícolas se consolida como un instrumento técnico y estratégico indispensable para la identificación de impactos, la formulación de diagnósticos integrales y la orientación de procesos de reconversión productiva hacia esquemas sostenibles. Este ejercicio evaluativo exige comprender de manera articulada la dinámica fisicoquímica y biológica del suelo, la gestión eficiente del recurso hídrico, la conservación de la biodiversidad y los efectos acumulativos derivados de las prácticas agrícolas implementadas en el territorio. 

    .bg-color-primario.br-top-r.mb-4
      .row.justify-content-center.align-items-center
        .col-lg-5.d-none.d-lg-block
          img(src='@/assets/curso/temas/intro/4.png', alt='')
        .col-lg-7
          .p-4.px-lg-5
            img.w-95x.mb-3(src='@/assets/curso/temas/intro/5.svg', alt='')
            p Este espacio tiene como propósito fortalecer en el aprendiz una perspectiva crítica, analítica y sistémica de la producción agrícola, promoviendo el desarrollo de competencias para evaluar impactos ambientales, interpretar indicadores de sostenibilidad y diseñar alternativas fundamentadas en principios agroecológicos.
            p Mediante la integración de referentes teóricos y ejercicios de análisis aplicado, se estimula la toma de decisiones informadas y responsables, orientadas a la conservación de los recursos naturales y al impulso de modelos de desarrollo rural sostenible. 

    p De este modo, el proceso formativo trasciende de la transmisión de conocimientos técnicos, a contribuir a la consolidación de aprendices competentes con compromiso ético y territorial, capaces de incidir en la transformación de los sistemas productivos rurales, fortalecer la seguridad alimentaria y promover esquemas agrícolas ambientalmente responsables, socialmente equitativos y económicamente viables. 

</template>

<script>
export default {
  name: 'Introduccion',
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

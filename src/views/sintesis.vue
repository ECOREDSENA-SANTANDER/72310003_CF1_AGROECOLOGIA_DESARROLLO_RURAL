<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    p.mb-4 La agroecología, articulada con la evaluación ambiental, permite analizar integralmente los sistemas agrícolas y orientar su transformación hacia modelos más sostenibles. Con lo cual se identifican los impactos sobre suelo, agua y biodiversidad, e incorpora criterios ambientales, sociales y económicos para mejorar la toma de decisiones. Todo esto favorece la conservación de los recursos naturales, fortalece el desarrollo rural y promueve una producción agrícola responsable y sostenible en el tiempo. 

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="La síntesis organiza el tema de la producción limpia y la gestión ambiental en sistemas agropecuarios a partir de seis ejes articulados: la Revolución Verde y sus impactos productivos, sociales y ambientales; la agroecología como enfoque científico, práctico y político orientado a la sostenibilidad; la agricultura y economía campesina en su dimensión conceptual, estructural y territorial; la gestión del suelo, incluyendo degradación y buenas prácticas de conservación; el manejo del recurso hídrico en los sistemas productivos; y, finalmente, la identificación de impactos ambientales junto con la formulación de planes de manejo y principios de conservación, integrando así una visión sistémica del desarrollo rural sostenible. ")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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

<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Impacto y manejo ambiental 

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t6/1.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 La actividad agropecuaria, aunque es fundamental para la seguridad alimentaria y el desarrollo económico rural, genera impactos sobre el entorno natural; debido a esto, los impactos pueden ser positivos o negativos, dependiendo de las prácticas implementadas y del nivel de responsabilidad ambiental con el que se gestione la unidad productiva.
        p El reconocimiento de los impactos ambientales permite tomar decisiones informadas y aplicar estrategias de manejo ambiental que reduzcan los efectos negativos, promuevan la conservación de los recursos naturales y fortalezcan la sostenibilidad del sistema productivo. 
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t6/2.png', alt='')


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Identificación de impactos ambientales en la unidad productiva 

    p.mb-4 La identificación de impactos ambientales es el proceso mediante el cual se reconocen y analizan las alteraciones que una actividad productiva genera sobre el medio ambiente. 

    .subt-cuad.mb-4
      h4.mb-0.p-3.ps-5 Principales impactos en sistemas agropecuarios 

    p Los sistemas agropecuarios son fundamentales para la producción de alimentos, pero también generan impactos ambientales cuando no se manejan de forma sostenible. Estos impactos pueden afectar el suelo, el agua, el aire, la biodiversidad y la salud humana. 
    
    TabsC.color-acento-botones
      .py-4(titulo="Impactos sobre el suelo")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t6/tabs1-1.png', alt='')
          .col-lg-6
            p El suelo es la base de la producción agropecuaria, pero las prácticas inadecuadas como la labranza intensiva, el monocultivo y el sobrepastoreo pueden deteriorarlo provocando algunas alteraciones del sistema agrícola.
            ul.lista-ul--color.color-primario.fa-lista.mb-0
              li
                i.fas.fa-check
                span.mb-0 Erosión por malas prácticas de labranza.
              li
                i.fas.fa-check
                span.mb-0 Compactación por sobrepastoreo o maquinaria pesada. 
              li
                i.fas.fa-check
                span.mb-0 Pérdida de fertilidad por uso excesivo de agroquímicos.
      .py-4(titulo="Impactos sobre el agua")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t6/tabs1-2.png', alt='')
          .col-lg-6
            p La agricultura y la ganadería requieren grandes cantidades de agua. Sin un manejo adecuado, pueden generar daños afectando ecosistemas acuáticos y el abastecimiento humano. 
            ul.lista-ul--color.color-primario.fa-lista.mb-0
              li
                i.fas.fa-check
                span.mb-0 Contaminación por fertilizantes, plaguicidas o residuos pecuarios. 
              li
                i.fas.fa-check
                span.mb-0 Disminución de caudales por uso excesivo. 
              li
                i.fas.fa-check
                span.mb-0 Sedimentación de fuentes hídricas. 
      .py-4(titulo="Impactos sobre el aire")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t6/tabs1-3.png', alt='')
          .col-lg-6
            p Las actividades agropecuarias contribuyen a la emisión de gases y partículas contaminantes. El uso de fertilizantes, la ganadería intensiva y las quemas influyen en la calidad del aire y en el cambio climático. 
            ul.lista-ul--color.color-primario.fa-lista.mb-0
              li
                i.fas.fa-check
                span.mb-0 Emisión de gases de efecto invernadero (metano, óxido nitroso). 
              li
                i.fas.fa-check
                span.mb-0 Quema de residuos agrícolas.
      .py-4(titulo="Impactos sobre la biodiversidad")
        .row.justify-content-center.align-items-center
          .col-lg-5.mb-3.mb-lg-0
            img(src='@/assets/curso/temas/t6/tabs1-4.png', alt='')
          .col-lg-6
            p La expansión de la frontera agrícola y ganadera puede provocar deforestación y pérdida de hábitats naturales. Esto reduce la diversidad de especies y altera el equilibrio de los ecosistemas. 
            ul.lista-ul--color.color-primario.fa-lista.mb-0
              li
                i.fas.fa-check
                span.mb-0 Pérdida de cobertura vegetal. 
              li
                i.fas.fa-check
                span.mb-0 Reducción de especies nativas.
              li
                i.fas.fa-check
                span.mb-0 Alteración de hábitats naturales. 


    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.1  Herramientas para identificar impactos 

    p La identificación de impactos ambientales es un proceso clave dentro de la evaluación ambiental de proyectos. Permite reconocer los efectos positivos y negativos que una actividad puede generar sobre el medio físico, biológico y social. 

    p A continuación, se presentan las principales herramientas utilizadas. 

    .row.justify-content-center.mb-4(data-aos="fade")
      .col-lg.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/tarj1-1.svg' alt='')
          .tarjeta.bg6.w-100
            .p-3.pb-4.text-center
              p.mb-0 Observación directa del predio. 
      .col-lg.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/tarj1-2.svg' alt='')
          .tarjeta.bg6.w-100
            .p-3.pb-4.text-center
              p.mb-0 Listas de chequeo ambiental.
      .col-lg.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/tarj1-3.svg' alt='')
          .tarjeta.bg6.w-100
            .p-3.pb-4.text-center
              p.mb-0 Mapas del uso del suelo. 
      .col-lg.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/tarj1-4.svg' alt='')
          .tarjeta.bg6.w-100
            .p-3.pb-4.text-center
              p.mb-0 Matrices de identificación de impactos. 
      .col-lg.col-md-6.mb-3
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t6/tarj1-5.svg' alt='')
          .tarjeta.bg6.w-100
            .p-3.pb-4.text-center
              p.mb-0 Diagnóstico ambiental participativo.

    p.mb-5 La identificación de impactos debe considerar aspectos como la magnitud, duración, frecuencia y reversibilidad del daño, con el fin de priorizar acciones correctivas. 


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Elaboración de planes básicos de manejo ambiental  

    .bloque-texto-g.bg5.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t6/3.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4.py-lg-5
        p.mb-0 Es un instrumento técnico de gestión que establece medidas para prevenir, mitigar, corregir y compensar los impactos ambientales generados por una actividad productiva, proyecto u obra. Su finalidad es asegurar la sostenibilidad ambiental y el uso responsable de los recursos naturales. 


    .subt.mb-4(data-aos="fade-right")
      img(src='@/assets/curso/temas/t1/subt.svg', alt='')
      h3.mb-0.p-3.ps-lg-4.pe-lg-5 Estructura básica del PMA (Plan de Manejo Ambiental) 

    .row.justify-content-center.mb-5
      .col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/temas/t6/4.png', alt='')
      .col-lg-7(data-aos="fade-left")
        LineaTiempoD.color-acento-botones
          .row(numero="a" titulo="Diagnóstico ambiental")
            p Constituye la línea base del plan, el cual incluye: 
            ul.lista-ul--color.color-primario.fa-lista.mb-0
              li
                i.fas.fa-check
                span.mb-0 Descripción del predio (ubicación y características físicas). 
              li
                i.fas.fa-check
                span.mb-0 Identificación de recursos naturales presentes (suelo, agua, flora y fauna). 
              li
                i.fas.fa-check
                span.mb-0 Identificación y análisis de impactos ambientales. 
            p.mb-0 Permite priorizar riesgos y fundamentar técnicamente las decisiones. 
          .row(numero="b" titulo="Medidas de manejo")
            p Son acciones concretas para gestionar los impactos identificados: 
            ul.lista-ul--color.color-primario.fa-lista.mb-0
              li
                i.fas.fa-check
                span.mb-0 #[b Prevención:] evitar que ocurra el impacto. 
              li
                i.fas.fa-check
                span.mb-0 #[b Mitigación:] reducir su efecto. 
              li
                i.fas.fa-check
                span.mb-0 #[b Corrección:] reparar daños causados. 
              li.mb-0
                i.fas.fa-check
                span.mb-0 #[b Compensación:] equilibrar impactos inevitables. 
          .row(numero="c" titulo="Cronograma y responsables")
            p.mb-0 Define los tiempos de ejecución y asigna responsables para garantizar cumplimiento y control. 
          .row(numero="d" titulo="Seguimiento y evaluación")
            p.mb-0 Incluye indicadores ambientales y evaluaciones periódicas para verificar la efectividad del plan y aplicar mejoras continuas. 

        
    .subt-cuad.mb-4
      h4.mb-0.p-3.ps-5 Ejemplos de medidas en el sector agrícola: 
    
    .row.justify-content-center(data-aos="fade")
      .col-xl.col-lg-4.col-md-6.mb-3
        .tarjeta.bg3.h-100.p-4.p-lg-3
          .row.align-items-center
            .col-lg-3.col-md-3.col-3.pe-lg-0
              img(src='@/assets/curso/temas/t6/tarj2-1.svg', alt='')
            .col-lg-9.col-md-9.col-9
              p.mb-0 Rotación de cultivos. 
      .col-xl.col-lg-4.col-md-6.mb-3
        .tarjeta.bg3.h-100.p-4.p-lg-3
          .row.align-items-center
            .col-lg-3.col-md-3.col-3.pe-lg-0
              img(src='@/assets/curso/temas/t6/tarj2-2.svg', alt='')
            .col-lg-9.col-md-9.col-9
              p.mb-0 Sistemas silvopastoriles. 
      .col-xl.col-lg-4.col-md-6.mb-3
        .tarjeta.bg3.h-100.p-4.p-lg-3
          .row.align-items-center
            .col-lg-3.col-md-3.col-3.pe-lg-0
              img(src='@/assets/curso/temas/t6/tarj2-3.svg', alt='')
            .col-lg-9.col-md-9.col-9
              p.mb-0 Manejo adecuado de residuos orgánicos. 
      .col-xl.col-lg-4.col-md-6.mb-3
        .tarjeta.bg3.h-100.p-4.p-lg-3
          .row.align-items-center
            .col-lg-3.col-md-3.col-3.pe-lg-0
              img(src='@/assets/curso/temas/t6/tarj2-4.svg', alt='')
            .col-lg-9.col-md-9.col-9
              p.mb-0 Protección de fuentes hídricas. 
      .col-xl.col-lg-4.col-md-6.mb-3
        .tarjeta.bg3.h-100.p-4.p-lg-3
          .row.align-items-center
            .col-lg-3.col-md-3.col-3.pe-lg-0
              img(src='@/assets/curso/temas/t6/tarj2-5.svg', alt='')
            .col-lg-9.col-md-9.col-9
              p.mb-0 Uso eficiente del agua y fertilizantes. 

    
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 6.2  Principios de conservación y sostenibilidad ambiental 

    p.mb-4 La conservación ambiental en el sector agropecuario se fundamenta en principios que orientan la producción hacia el equilibrio entre lo económico, lo social y lo ambiental. 

    .mb-4(data-aos='fade')
      .titulo-sexto.color-acento-contenido.mb-3
        h5 Tabla 2.
        span Principios de conservación y sostenibilidad ambiental en el sector agropecuario 
      .tabla-a.color-acento-contenido
        table
          thead
            tr
              th.w-25 Componente
              th Principio / elemento
              th Descripción técnica por elemento
          tbody.t2
            tr
              td.fw-bold.bg3(rowspan='6') Principios fundamentales de conservación
              td Prevención
              td Prioriza evitar el daño ambiental antes que aplicar medidas correctivas posteriores.
            tr
              td Uso racional de los recursos
              td Promueve el aprovechamiento eficiente del suelo, agua y biodiversidad sin superar su capacidad de regeneración.
            tr
              td Responsabilidad ambiental
              td Implica reconocer los impactos derivados de la actividad productiva y asumir compromisos de mejora y cumplimiento normativo.
            tr
              td Equilibrio ecológico
              td Busca mantener la estabilidad y armonía entre los componentes del agroecosistema (suelo, agua, flora, fauna y actividad humana).
            tr
              td Mejora continua
              td Establece la evaluación y ajuste permanente de prácticas productivas para optimizar el desempeño ambiental.
            tr
              td Participación comunitaria
              td Fomenta la inclusión de trabajadores y comunidad en la toma de decisiones y gestión ambiental.
            tr
              td.fw-bold.bg3(rowspan='3') Sostenibilidad ambiental
              td Productividad económica
              td Garantiza viabilidad financiera del sistema productivo en el tiempo.
            tr
              td Equidad social
              td Promueve condiciones justas para trabajadores y comunidad, fortaleciendo el desarrollo rural.
            tr
              td Conservación ambiental
              td Asegura la protección y recuperación de los recursos naturales para futuras generaciones.

    .row.justify-content-center
      .col-lg-7
        .cajon.color-acento-botones.p-4
          p.mb-0 Un sistema productivo sostenible no solo genera ingresos, sino que protege el entorno, mejora la calidad de vida rural y contribuye a la mitigación del cambio climático. 



</template>

<script>
export default {
  name: 'Tema6',
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

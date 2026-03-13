<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Gestión del suelo en la producción agropecuaria 

    .row.justify-content-center.mb-5
      .col-lg-7(data-aos="fade-right")
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-2.col-md-2.col-3
            img(src='@/assets/curso/temas/t4/1.svg', alt='')
          .col-lg-10.col-md-10.col-9
            p.mb-0 El suelo es uno de los recursos naturales más importantes para la producción agropecuaria, ya que constituye la base física y biológica donde se desarrollan los cultivos y se sustenta la actividad ganadera. Su adecuada gestión garantiza la productividad, la seguridad alimentaria y la sostenibilidad de los sistemas productivos rurales.
        p La gestión del suelo implica comprender sus características, reconocer los factores que pueden deteriorarlo y aplicar prácticas de manejo que permitan conservar su fertilidad y estructura a largo plazo. Un suelo sano no solo favorece el crecimiento de las plantas, sino que también regula el ciclo del agua, almacena carbono y mantiene la biodiversidad.
        .bg4.p-4
          p.mb-0 El suelo es un cuerpo natural compuesto por minerales, materia orgánica, agua, aire y organismos vivos, que se forma a lo largo del tiempo por la descomposición de las rocas y la acción de factores climáticos y biológicos. Es un sistema dinámico y complejo que cumple funciones ecológicas, productivas y ambientales. 
      .col-lg-5.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/2.png', alt='')

    .row.justify-content-center(data-aos="fade")
      .col-lg-6.col-md-11.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Usos del suelo
              p En el contexto agropecuario, el suelo tiene diversos usos, entre ellos: 
              ul.lista-ul--color.fa-lista.mb-4
                li
                  i.fas.fa-check
                  span.mb-0 Producción agrícola (cultivos transitorios y permanentes). 
                li
                  i.fas.fa-check
                  span.mb-0 Producción pecuaria (pasturas y forrajes). 
                li
                  i.fas.fa-check
                  span.mb-0 Sistemas agroforestales y silvopastoriles. 
                li
                  i.fas.fa-check
                  span.mb-0 Conservación de áreas naturales dentro de la finca.
                li
                  i.fas.fa-check
                  span.mb-0 Infraestructura productiva rural.              
              p El uso adecuado del suelo depende de su vocación o capacidad productiva, la cual está determinada por factores como textura, estructura, pendiente, fertilidad y disponibilidad de agua.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t4/tarj1-1.png')})`}")
      .col-lg-6.col-md-11.mb-3.mb-lg-0
        .tarjeta.tarjeta-slide.arriba.color-acento-contenido
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Funciones del suelo 
              ul.lista-ul--color.color-primario.fa-lista
                li
                  i.fas.fa-check
                  span.mb-0 Soporte físico: sostiene las raíces de las plantas.
                li
                  i.fas.fa-check
                  span.mb-0 Reserva de nutrientes: almacena y suministra elementos esenciales para el crecimiento vegetal. 
                li
                  i.fas.fa-check
                  span.mb-0 Regulación hídrica: infiltra, almacena y distribuye el agua. 
                li
                  i.fas.fa-check
                  span.mb-0 Hábitat biológico: alberga microorganismos y fauna que contribuyen a la fertilidad. 
                li
                  i.fas.fa-check
                  span.mb-0 Regulación climática: actúa como sumidero de carbono, ayudando a mitigar el cambio climático. 
              p La comprensión de estas funciones permite valorar el suelo como un recurso estratégico que debe ser protegido y manejado de manera responsable. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t4/tarj1-2.png')})`}")


    Separador
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.1  Degradación, contaminación y conservación del suelo 

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-8.mb-3.mb-lg-0(data-aos="fade-right")
        img(src='@/assets/curso/temas/t4/3.png', alt='')
      .col-lg-7(data-aos="fade-left")
        .bg4.p-4.mb-4
          p.mb-0 El suelo es uno de los recursos naturales más importantes para la vida en la tierra, ya que permite el crecimiento de los cultivos, sostiene los ecosistemas y participa en el ciclo del agua y los nutrientes. Sin embargo, las actividades humanas como la agricultura intensiva, la deforestación, la urbanización y el uso inadecuado de productos químicos han provocado su degradación y contaminación.
        p La degradación del suelo incluye procesos como la erosión y la pérdida de fertilidad, mientras que la contaminación se produce por la acumulación de residuos, pesticidas, metales pesados y otras sustancias tóxicas que afectan su calidad. Estos problemas reducen la productividad agrícola y ponen en riesgo la seguridad alimentaria y el equilibrio ambiental.

    p Por ello, la conservación del suelo es fundamental para garantizar su uso sostenible, proteger los ecosistemas y asegurar recursos para las futuras generaciones. Conocer las causas de su deterioro y aplicar prácticas adecuadas de manejo son pasos clave para su protección. 

    p.mb-4 La degradación del suelo es el proceso de deterioro que reduce su capacidad productiva y ecológica. 

    AcordionA.mb-4(tipo="a" clase-tarjeta="tarjeta bg2")
      .row.justify-content-center(titulo="Principales causas de la degradación del suelo")
        .col-lg-7.col-11.mb-4
          ul.lista-ul--color.fa-lista
            li
              i.fas.fa-spa
              span.mb-0 Erosión hídrica y eólica: pérdida de la capa superficial fértil por acción del agua o el viento. 
            li
              i.fas.fa-spa
              span.mb-0 Compactación: reducción de la porosidad del suelo debido al tránsito excesivo de maquinaria o ganado. 
            li
              i.fas.fa-spa
              span.mb-0 Salinización: acumulación de sales por riego inadecuado. 
            li
              i.fas.fa-spa
              span.mb-0 Deforestación: eliminación de cobertura vegetal que protege el suelo. 
            li
              i.fas.fa-spa
              span.mb-0 Sobrepastoreo: exceso de carga animal que deteriora la cobertura vegetal.
        .col-lg-4.col-11.col-md-8.mb-4
          img(src='@/assets/curso/temas/t4/acord1-1.png', alt='')
        .col-11
          p La degradación afecta la productividad agrícola, incrementa los costos de producción y genera impactos ambientales como sedimentación de fuentes hídricas. 
      .row.justify-content-center(titulo="Contaminación del suelo")
        .col-lg-7.col-11.mb-4
          p La contaminación ocurre cuando se introducen sustancias químicas o residuos que alteran su equilibrio natural.  
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-spa
              span.mb-0 Uso excesivo de fertilizantes químicos. 
            li
              i.fas.fa-spa
              span.mb-0 Aplicación indiscriminada de plaguicidas.
            li
              i.fas.fa-spa
              span.mb-0 Vertimiento inadecuado de residuos pecuarios. 
            li.mb-0
              i.fas.fa-spa
              span.mb-0 Manejo incorrecto de envases y productos agroquímicos.
        .col-lg-4.col-11.col-md-8.mb-4
          img(src='@/assets/curso/temas/t4/acord1-2.png', alt='')
        .col-11
          p La contaminación del suelo puede afectar la calidad de los alimentos, la salud humana y los ecosistemas. 
          p Por otra parte, la conservación del suelo consiste en aplicar prácticas que mantengan o mejoren su fertilidad, estructura y estabilidad. Implica prevenir la erosión, mejorar la cobertura vegetal y fomentar el equilibrio biológico. 

    .row.justify-content-center
      .col-lg-7
        .cajon.color-primario.bg1.p-4
          p.mb-0 Conservar el suelo es garantizar la permanencia de la actividad agropecuaria en el tiempo. 


    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 4.2  Buenas prácticas agrícolas para la protección del suelo 

    p.mb-4 Las Buenas Prácticas Agrícolas (BPA) son estrategias técnicas que promueven la sostenibilidad y la protección del recurso suelo. Entre las más importantes se encuentran: 

    SlyderF.mb-4(columnas="col-lg-4 col-md-6" data-aos="fade")
      .tarjeta.bgi-2.p-4
        .row.justify-content-center.mb-4
          .col-6.col-md-8.col-lg-7
            img(src='@/assets/curso/temas/t4/tarj2-1.png' alt='')
        h4.text-center Rotación de cultivos
        p.text-center.mb-5 Alternar diferentes especies vegetales en un mismo terreno para mejorar la fertilidad, reducir plagas y evitar el agotamiento del suelo.
      .tarjeta.bgi-2.p-4
        .row.justify-content-center.mb-4
          .col-6.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/t4/tarj2-2.png' alt='')
        h4.text-center Cobertura vegetal permanente
        p.text-center.mb-5 Mantener residuos de cosecha o cultivos de cobertura que protejan el suelo de la erosión y mejoren la materia orgánica.
      .tarjeta.bgi-2.p-4
        .row.justify-content-center.mb-4
          .col-6.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/t4/tarj2-3.png' alt='')
        h4.text-center Labranza mínima o labranza de conservación
        p.text-center.mb-5 Reducir el movimiento del suelo para conservar su estructura y microorganismos. 
      .tarjeta.bgi-2.p-4
        .row.justify-content-center.mb-4
          .col-6.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/t4/tarj2-4.png' alt='')
        h4.text-center Uso de abonos orgánicos
        p.text-center.mb-5 Aplicar compost, estiércol y biofertilizantes que mejoran la fertilidad sin contaminar.
      .tarjeta.bgi-2.p-4
        .row.justify-content-center.mb-4
          .col-6.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/t4/tarj2-5.png' alt='')
        h4.text-center Manejo adecuado del pastoreo
        p.text-center.mb-5 Implementar rotación de potreros para evitar el sobrepastoreo y la compactación.
      .tarjeta.bgi-2.p-4
        .row.justify-content-center.mb-4
          .col-6.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/t4/tarj2-6.png' alt='')
        h4.text-center Siembra en curvas a nivel
        p.text-center.mb-5 Práctica que reduce la erosión en terrenos inclinados. 
      .tarjeta.bgi-2.p-4
        .row.justify-content-center.mb-4
          .col-6.col-md-8.col-lg-6
            img(src='@/assets/curso/temas/t4/tarj2-7.png' alt='')
        h4.text-center Protección de áreas sensibles 
        p.text-center.mb-5 Conservar rondas hídricas, nacimientos de agua y zonas forestales.

    p Estas prácticas permiten fortalecer la productividad, reducir costos a largo plazo y asegurar la sostenibilidad ambiental del sistema agropecuario. 


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
    indicadorTarjetaSlide: true,
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

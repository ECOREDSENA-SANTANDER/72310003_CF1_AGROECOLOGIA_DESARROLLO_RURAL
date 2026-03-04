<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono='far fa-question-circle', titulo='Actividad didáctica')
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad_Cuestionario
    <Actividad :cuestionario="cuestionario"/>
</template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Agroecología y evaluación ambiental de los sistemas agrícolas',
      titulo: 'Cuestionario: Agroecología y evaluación ambiental',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de los conceptos fundamentales relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué es la agroecología?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una técnica exclusiva de agricultura orgánica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Un enfoque que integra principios ecológicos a los sistemas agrícolas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un sistema basado únicamente en alta productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un modelo dependiente de agroquímicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 2,
          texto: 'La revolución verde se caracterizó principalmente por:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El uso de policultivos tradicionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La eliminación total de fertilizantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La introducción de semillas mejoradas y agroquímicos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La agricultura sin mecanización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 3,
          texto:
            'Uno de los principales impactos negativos de la agricultura intensiva es:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incremento de biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Recuperación natural del suelo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Degradación y erosión del suelo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Disminución del uso del agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 4,
          texto: 'Un agroecosistema se define como:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un terreno sin intervención humana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un sistema agrícola visto como ecosistema.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Una fábrica de producción de alimentos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Un modelo exclusivamente ganadero.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 5,
          texto: 'La economía campesina se caracteriza por:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción exclusivamente industrial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dependencia total de insumos importados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Agricultura familiar y mercados locales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Uso intensivo de monocultivos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 6,
          texto: 'La erosión del suelo es:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un proceso de fertilización natural.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La pérdida de la capa superficial del suelo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Un método de riego.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una práctica agroecológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 7,
          texto: 'La evaluación ambiental permite:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el uso de agroquímicos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ignorar impactos productivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar y valorar impactos ambientales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reducir la biodiversidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 8,
          texto: 'Uno de los principios de la agroecología es:',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Simplificación del sistema productivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Dependencia de insumos externos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diversificación de cultivos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminación de biodiversidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 9,
          texto: 'El uso eficiente del agua en agricultura contribuye a:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar la contaminación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la sostenibilidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mejorar la gestión del recurso hídrico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumentar la salinización.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 10,
          texto: 'La biodiversidad en sistemas agrícolas favorece:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor vulnerabilidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Resiliencia y equilibrio ecológico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Disminución de productividad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Aumento de plagas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 11,
          texto: 'El monocultivo puede generar:',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor estabilidad ecológica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incremento de biodiversidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mayor susceptibilidad a plagas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Conservación natural del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 12,
          texto: 'Un indicador ambiental permite:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Medir el desempeño ambiental de un sistema.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sustituir la producción agrícola.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la evaluación técnica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incrementar el uso de químicos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 13,
          texto: 'La producción limpia busca:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar residuos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Prevenir la contaminación en el proceso productivo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Incrementar emisiones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir eficiencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 14,
          texto: 'La agroecología considera la dimensión:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo ambiental.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo económica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ambiental, social y económica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Únicamente tecnológica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 15,
          texto:
            'La contaminación del recurso hídrico en agricultura puede deberse a:',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Uso excesivo de fertilizantes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Rotación de cultivos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Policultivos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Agricultura orgánica certificada.',
              esCorrecta: false,
            },
          ],

          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 16,
          texto: 'La sostenibilidad implica:',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Explotar recursos sin límites.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Satisfacer necesidades presentes sin comprometer las futuras.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Maximizar producción a cualquier costo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir diversidad productiva.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 17,
          texto: 'La conservación del suelo incluye:',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Prácticas de rotación y cobertura vegetal.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Eliminación de materia orgánica.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Uso indiscriminado de maquinaria pesada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Deforestación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 18,
          texto:
            '¿Qué impacto positivo tiene la agricultura orgánica respecto al suelo?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Agota rápidamente los nutrientes del suelo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementa la erosión por el uso de maquinaria pesada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mejora la estructura y fertilidad del suelo a largo plazo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Aumenta la compactación del suelo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 19,
          texto: 'La gestión ambiental en sistemas agrícolas busca:',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Maximizar impactos negativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Controlar y mitigar efectos ambientales.',
              esCorrecta: true,
            },

            {
              id: 'c',
              texto: 'Eliminar procesos productivos.',
              esCorrecta: false,
            },

            {
              id: 'd',
              texto: 'Sustituir la evaluación técnica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
        {
          id: 20,
          texto: 'La transición agroecológica promueve:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor dependencia de insumos externos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Diversificación y equilibrio ecológico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Simplificación extrema del sistema.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Incremento de contaminación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia un adecuado dominio de los conceptos relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
          mensaje_incorrecto:
            'Se recomienda revisar nuevamente los contenidos del componente formativo relacionados con la agroecología y la evaluación ambiental de los sistemas agrícolas.',
        },
      ],
      mensaje_final_aprobado:
        'Ha superado la actividad y demuestra sólidos conocimientos sobre la agroecología y la evaluación ambiental de los sistemas agrícolas.',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>

<template>
  <q-dialog @hide="onHide">
    <q-card style="width: calc(60vw); max-width: 60vw;">
      <q-card-section class="row bg-primary text-white items-center">
        <div class="text-h6">Requisitar Serviço de {{ serviceType.label }}</div>
        <q-space />
        <q-btn icon="close" flat round dense v-close-popup />
      </q-card-section>
      <q-card-section v-if="automobile">
        <div class="row">
          <div class="col-6">
            <div class="flex column">
              <div>
                <h5 style="margin-top: 0">Placa</h5>
                <div class="info">{{ automobile.registration }}</div>
              </div>
              <div>
                <h5>Chassis</h5>
                <div class="info">{{ automobile.chassis }}</div>
              </div>
            </div>
          </div>
          <q-separator vertical/>
          <div class="col-5" style="margin-left: 34px">
            <q-select v-model="service" label="Selecionar Serviço" option-label="label" :options="serviceType.options"
                      :model-value="service"/>
          </div>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="right">
        <q-btn flat label="Enviar" color="positive" @click="onSubmit" v-close-popup />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { computed, defineComponent, inject, ref } from 'vue';

export default defineComponent({
  name: 'ServiceRequestDialog',
  setup (props, context) {
    const services = inject('automobileServices')
    const service = ref(null)
    const serviceType = computed(() => {
      return {
        1: {
          label: 'Lava-Jato',
          options: services.value.filter(service => service.type === 1)
        },
        2: {
          label: 'Manutenção',
          options: services.value.filter(service => service.type === 2)
        }
      }[props.type]
    })
    const onSubmit = () => {
      context.emit('submit', {service: service.value, automobile: props.automobile})
    }

    const onHide = () => {
      service.value = null
    }
    return {
      onSubmit,
      serviceType,
      service,
      onHide
    }
  },
  props: {
    automobile: {
      type: Object,
      default () {
        return {}
      }
    },
    type: {
      type: Number,
      default: 1,
    }
  },
  emits: ['input', 'submit']
});
</script>

<style scoped lang="sass">
h5
  font-weight: 700
  text-transform: uppercase
  font-size: 1.5rem
  color: #505050
  line-height: 1
  margin-bottom: 0
.info
  font-size: 2rem
  text-transform: uppercase
  font-weight: 500
  line-height: 1

</style>

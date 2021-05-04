<template>
  <div class="row q-col-gutter-md">
    <div class="col">
      <div class="row q-pt-md q-col-gutter-md">
        <div class="col-6">
          <q-input label="Nome do Portador" v-model="name" :model-value="name" />
        </div>
        <div class="col-6">
          <q-input label="Numero do Cartão" v-model="number" :model-value="number" />
        </div>
      </div>
      <div class="row q-pt-md q-col-gutter-md">
        <div class="col-4">
          <q-input label="Bandeira" v-model="brand" :model-value="brand" />
        </div>
        <div class="col-4">
          <q-input label="Validade do Cartão" v-model="date" :model-value="date" />
        </div>
        <div class="col-4">
          <q-input label="CVC" v-model="securityCode" :model-value="securityCode" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PaymentForm',
  setup () {
    const name = ref(null)
    const number = ref(null)
    const brand = ref(null)
    const maturity = ref(null)
    const securityCode = ref(null)
    const date = ref(null)

    return {
      name,
      number,
      brand,
      maturity,
      securityCode,
      date
    }
  }
});
</script>

<style scoped>

</style>

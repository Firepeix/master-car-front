<template>
  <q-form>
    <div class="row q-col-gutter-md">
      <div class="col">
        <div class="row">
          <div class="col">
            Retirada
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-select v-model="withdrawCity" option-label="name" :options="cityOptions" label="Cidade"  :model-value="withdrawCity"/>
          </div>
        </div>
        <div class="row q-pt-md q-col-gutter-md">
          <div class="col-8">
            <q-input label="Data" mask="##/##/####" v-model="withdrawDate" :model-value="withdrawDate">
              <q-popup-proxy ref="withdrawDateProxy"  transition-show="scale" transition-hide="scale">
                <q-date minimal mask="DD/MM/YYYY" @update:model-value="$refs.withdrawDateProxy.hide()" v-model="withdrawDate" :model-value="withdrawDate"/>
              </q-popup-proxy>
              <template v-slot:append>
                <q-icon name="mdi-calendar"/>
              </template>
            </q-input>
          </div>
          <div class="col-4">
            <q-select v-model="withdrawTime" :options="timeOptions" label="Hora"  :model-value="withdrawTime"/>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="row">
          <div class="col">
            Devolução
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-select v-model="depositCity" option-label="name" :options="cityOptions" label="Cidade"  :model-value="depositCity"/>
          </div>
        </div>
        <div class="row q-pt-md q-col-gutter-md">
          <div class="col-8">
            <q-input label="Data" mask="##/##/####" v-model="depositDate" :model-value="depositDate">
              <q-popup-proxy ref="depositDateProxy"  transition-show="scale" transition-hide="scale">
                <q-date minimal mask="DD/MM/YYYY" @update:model-value="$refs.depositDate.hide()" v-model="depositDate" :model-value="depositDate"/>
              </q-popup-proxy>
              <template v-slot:append>
                <q-icon name="mdi-calendar"/>
              </template>
            </q-input>
          </div>
          <div class="col-4">
            <q-select v-model="depositTime" :options="timeOptions" label="Hora"  :model-value="depositTime"/>
          </div>
        </div>
      </div>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ChooseCityForm',
  setup () {
    const withdrawCity = ref(null)
    const depositCity = ref(null)
    const cityOptions = [{id: 1, name: 'Belo Horizonte'}, {id: 2, name: 'São Paulo'}]
    const withdrawDate = ref(null)
    const depositDate = ref(null)
    const withdrawTime = ref(null)
    const depositTime = ref(null)
    const getTimeOptions = () => {
      const times = [];
      new Array(24).fill(null).forEach((empty, index) => {
        times.push(`${index}:00`)
        times.push(`${index}:30`)
      })

      return times;
    };
    return {
      cityOptions,
      withdrawDate,
      depositDate,
      withdrawCity,
      depositCity,
      withdrawTime,
      depositTime,
      timeOptions: getTimeOptions()
    }
  }
});
</script>

<style scoped>

</style>

<template>
  <div class="row q-col-gutter-md">
    <div class="col">
      <div class="row q-pt-md q-col-gutter-md">
        <div class="col-6">
          <q-input label="Nome" v-model="name" :model-value="name" />
        </div>
        <div class="col-6">
          <q-input label="Sobrenome" v-model="lastName" :model-value="lastName" />
        </div>
      </div>
      <div class="row q-pt-md q-col-gutter-md">
        <div class="col-4">
          <q-input label="Email" v-model="email" :model-value="email" />
        </div>
        <div class="col-4">
          <q-input label="CPF" v-model="document" :model-value="document" />
        </div>
        <div class="col-4">
          <q-input label="Data" mask="##/##/####" v-model="birthday" :model-value="birthday">
            <q-popup-proxy ref="birthdayDate"  transition-show="scale" transition-hide="scale">
              <q-date minimal mask="DD/MM/YYYY" @update:model-value="$refs.birthdayDate.hide()" v-model="birthday" :model-value="birthday"/>
            </q-popup-proxy>
            <template v-slot:append>
              <q-icon name="mdi-calendar"/>
            </template>
          </q-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'DriverForm',
  setup () {
    const name = ref(null)
    const lastName = ref(null)
    const email = ref(null)
    const document = ref(null)
    const birthday = ref(null)

    return {
      name,
      lastName,
      email,
      document,
      birthday
    }
  }
});
</script>

<style scoped>

</style>

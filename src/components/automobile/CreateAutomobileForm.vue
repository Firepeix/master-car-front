<template>
<q-form>
  <div class="row q-col-gutter-xl">
    <div class="col-6">
      <q-input label="Nome Do Veiculo" v-model="name" :model-value="name" />
    </div>
    <div class="col-6">
      <q-select v-model="group" option-label="name" :options="availableGroups" label="Grupo"  :model-value="group"/>
    </div>
  </div>
</q-form>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'CreateAutomobileForm',
  setup () {
    //nome
    //imagem
    //group
    //select de features
    //agencias que ele esta disponivel
    //id externo
    //id externo
    //id unico : id do carro + agencia
    //  preço minimo -
    //  em manutenção
    const name = ref(null)
    const group = ref(null)
    const getAvailableGroups = () => {
      return [
        {name: 'A', description: 'Baratos'},
        {name: 'B', description: 'Sedan'},
        {name: 'C', description: 'SUVs'},
        {name: 'D', description: 'Hatch'},
        {name: 'E', description: 'Especiais'}
      ]
    }
    return {
      name,
      group,
      availableGroups: getAvailableGroups()
    }
  }
};
</script>

<style scoped>

</style>

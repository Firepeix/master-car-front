<template>
  <page title="Automóveis" icon="mdi-car-3-plus">
    <template #actions>
      <q-btn color="positive" icon="mdi-plus" :to="{ name: 'automobiles.create'}">Incluir Carro</q-btn>
    </template>
    <div class="row q-pb-md">
      <div class="col">
      </div>
    </div>
    <q-separator class="q-mb-md" />
  </page>
</template>

<script>
import { defineComponent } from 'vue';
import Page from 'components/navigation/Page';

export default defineComponent({
  name: 'AutomobileIndex',
  components: {Page}
});
</script>

<style scoped>

</style>

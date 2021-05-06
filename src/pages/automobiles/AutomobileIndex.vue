<template>
  <page title="Automóveis" icon="mdi-car-3-plus">
    <template #actions>
      <q-btn color="positive" icon="mdi-plus" :to="{ name: 'automobiles.create'}">Incluir Carro</q-btn>
    </template>
    <div class="row q-pb-md">
      <div class="col">
        <automobile-template-table :automobiles="automobiles" />
      </div>
    </div>
    <q-separator class="q-mb-md" />
  </page>
</template>

<script>
import { defineComponent, inject, onMounted, ref } from 'vue';
import Page from 'components/navigation/Page';
import AutomobileTemplateTable from 'components/automobile/AutomobileTemplateTable';

export default defineComponent({
  name: 'AutomobileIndex',
  setup () {
    const automobileRepository = inject('automobileRepository')
    const automobiles = ref([])
    const setAutomobiles = async () => {
      automobiles.value = await automobileRepository.getAutomobiles()
    }
    onMounted(setAutomobiles)
    return {
      automobiles
    }
  },
  components: { AutomobileTemplateTable, Page}
});
</script>

<style scoped>

</style>

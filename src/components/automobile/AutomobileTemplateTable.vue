<template>
  <q-table :rows="automobiles" flat bordered
           :columns="columns" row-key="id">
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn icon="mdi-eye" :to="{name: 'automobiles.show', params: {id: props.row.id}}" color="primary" size="sm" round/>
      </q-td>
    </template>
  </q-table>
</template>

<script>
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'AutomobileTemplateTable',
  setup () {
    const automobileRepository = inject('automobileRepository');

    return {
      columns: automobileRepository.getTableColumns()
    };
  },
  props: {
    automobiles: {
      type: Array,
      default () {
        return [];
      }
    }
  }
});
</script>

<style scoped>

</style>

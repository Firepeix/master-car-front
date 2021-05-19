<template>
  <q-table :rows="automobiles" flat bordered :columns="columns" row-key="id">
    <template v-slot:body-cell-status="props">
      <q-td :props="props">
        <automobile-status :key="`status-${props.row.status}`" :id="props.row.status" />
      </q-td>
    </template>
    <template v-slot:body-cell-actions="props">
      <q-td :props="props" class="more-menu">
        <dot-menu align="justify-center">
          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="mdi-car-arrow-right"/>
            </q-item-section>
            <q-item-section>Alocar Uso</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable @click="sentToMaintenance(props.row)" v-close-popup>
            <q-item-section avatar>
              <q-icon name="mdi-car-cog"/>
            </q-item-section>
            <q-item-section>Enviar para Manutenção</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-close-popup>
            <q-item-section avatar>
              <q-icon name="mdi-car-wash"/>
            </q-item-section>
            <q-item-section>Enviar Lava Jato</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable @click="deleteAutomobile(props.row)" v-close-popup>
            <q-item-section avatar>
              <q-icon name="mdi-minus-circle"/>
            </q-item-section>
            <q-item-section>Deletar</q-item-section>
          </q-item>
        </dot-menu>
      </q-td>
    </template>
  </q-table>
</template>

<script>
import { defineComponent, inject } from 'vue';
import DotMenu from 'components/navigation/DotMenu';
import AutomobileStatus from 'components/automobile/AutomobileStatus';

export default defineComponent({
  name: 'AutomobileTable',
  components: { AutomobileStatus, DotMenu },
  setup (props, context) {
    const automobileRepository = inject('automobileRepository');
    const notifyService = inject('notifyService')
    const deleteAutomobile = async (automobile) => {
      const done = notifyService.loading()
      await automobileRepository.deleteAutomobile(automobile.id, automobile.templateId)
      done()
      notifyService.success('Automóvel deletado com sucesso! ')
      context.emit('update')
    }

    const sentToMaintenance = async automobile => {
      const done = notifyService.loading()
      await automobileRepository.sentToMaintenance(automobile.id, automobile.templateId)
      done()
      notifyService.success('Enviado para manutenção com sucesso! ')
      context.emit('update')
    }


    return {
      columns: automobileRepository.getAutomobileColumns(),
      deleteAutomobile,
      sentToMaintenance
    };
  },
  props: {
    automobiles: {
      type: Array,
      default () {
        return [];
      }
    }
  },
  emits: ['update']
});
</script>

<style scoped>

</style>

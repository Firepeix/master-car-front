<template>
  <div>
    <q-table :rows="automobiles" flat bordered :columns="columns" row-key="id">
      <template v-slot:body-cell-status="props">
        <q-td :props="props">
          <automobile-status :key="`status-${props.row.status}`" :id="props.row.status" />
        </q-td>
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="more-menu">
          <dot-menu align="justify-center">
            <q-item clickable @click="sendAutomobile(props.row, 2)" v-close-popup>
              <q-item-section avatar>
                <q-icon name="mdi-car-cog"/>
              </q-item-section>
              <q-item-section>Enviar para Manutenção</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable @click="sendAutomobile(props.row, 1)" v-close-popup>
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
    <service-request-dialog :automobile="serviceAutomobile" :type="serviceType" v-model="showServiceDialog" @submit="requestService" />
  </div>
</template>

<script>
import { defineComponent, inject, ref } from 'vue';
import DotMenu from 'components/navigation/DotMenu';
import AutomobileStatus from 'components/automobile/AutomobileStatus';
import ServiceRequestDialog from 'components/automobile/ServiceRequestDialog';

export default defineComponent({
  name: 'AutomobileTable',
  components: { ServiceRequestDialog, AutomobileStatus, DotMenu },
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

    const showServiceDialog = ref(false)
    const serviceAutomobile = ref(null)
    const serviceType = ref(1)

    const sendAutomobile = async (automobile, type) => {
      serviceAutomobile.value = automobile
      showServiceDialog.value = true
      serviceType.value = type
    }

    const requestService = async request => {
      if (request.service) {
        const method = request.service.type === 1 ? 'sendToWash' : 'sentToMaintenance'
        const label = request.service.type === 1 ? 'lavar' : 'manutenção'
        const done = notifyService.loading()
        await automobileRepository[method](request.automobile.id, request.automobile.templateId, request.service.id)
        done()
        notifyService.success(`Enviado para ${label} com sucesso!`)
        context.emit('update')
      }

    }

    return {
      columns: automobileRepository.getAutomobileColumns(),
      deleteAutomobile,
      sendAutomobile,
      requestService,
      showServiceDialog,
      serviceType,
      serviceAutomobile
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

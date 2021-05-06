<template>
  <page title="Incluir Automóvel" icon="mdi-car-3-plus">
    <div class="row q-pb-md">
      <div class="col">
        <create-automobile-form ref="form" />
      </div>
    </div>
    <q-separator class="q-mb-md" />
    <div class="row">
      <div class="col-9">
      </div>
      <div class="col-3">
        <q-btn @click="saveAutomobile" color="positive" class="full-width">Salvar Automóvel</q-btn>
      </div>
    </div>
  </page>
</template>

<script>
import { defineComponent, inject, ref } from 'vue';
import Page from 'components/navigation/Page';
import CreateAutomobileForm from 'components/automobile/CreateAutomobileForm';

export default defineComponent({
  name: 'AutomobileIndex',
  setup () {
    const automobileRepository = inject('automobileRepository')
    const notifyService = inject('notifyService')
    const router = inject('router')
    const form = ref(null)
    const saveAutomobile = async () => {
      const template = form.value.getAutomobileTemplate()
      const done = notifyService.loading()
      await automobileRepository.saveAutomobileTemplate(template)
      done()
      notifyService.success('Automóveis incluídos com sucesso!')
      router.value.push({ name: 'automobiles.index' })
    }

    return {
      form,
      saveAutomobile
    }
  },
  components: { CreateAutomobileForm, Page}
});
</script>

<style scoped>

</style>

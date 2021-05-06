<template>
  <page :title="`Editar Automóvel ${isLoaded ? automobile.protocol : ''}`" icon="mdi-car-3-plus">
    <div class="row q-pb-md">
      <div class="col" v-if="isLoaded">
        <create-automobile-form edit :saved-automobile="automobile" ref="form" />
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
import { defineComponent, inject, onMounted, ref, watch } from 'vue';
import Page from 'components/navigation/Page';
import CreateAutomobileForm from 'components/automobile/CreateAutomobileForm';

export default defineComponent({
  name: 'Index',
  setup () {
    const automobileRepository = inject('automobileRepository')
    const notifyService = inject('notifyService')
    const router = inject('router')
    const route = inject('route');
    const automobile = ref(null)
    const isLoaded = ref(false)

    const setAutomobile = async (id) => {
      automobile.value = await automobileRepository.findAutomobile(id)
      isLoaded.value = true
    }

    watch(route, (route) => {
      if (automobile.value === null || (route.params.id !== undefined && automobile.value.id !== Number(route.params.id))) {
        setAutomobile(route.params.id)
      }
    })

    onMounted(() => setAutomobile(route.value.params.id))

    const form = ref(null)
    const saveAutomobile = async () => {
      const automobileId = route.value.params.id
      const template = form.value.getAutomobileTemplate()
      const done = notifyService.loading()
      await automobileRepository.updateAutomobileTemplate(automobileId, template)
      done()
      notifyService.success('Automóvel editado com sucesso!')
      router.value.push({ name: 'automobiles.show', params: {id: automobileId} })
    }

    return {
      form,
      saveAutomobile,
      automobile,
      isLoaded
    }
  },
  components: { CreateAutomobileForm, Page }
});
</script>

<style scoped>

</style>

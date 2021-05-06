<template>
  <page title="Ver Automóvel" icon="mdi-car-3-plus">
    <template #actions>
      <div class="row full-width justify-end">
        <div class="col-3">
          <q-btn class="full-width" unelevated color="primary" icon="mdi-pencil" :to="{ name: 'automobiles.edit'}">Editar</q-btn>
        </div>
      </div>
    </template>
    <div class="row q-pb-md no-page-padding">
      <div class="col">
        <automobile-template @update="update" :automobile="automobile"  v-if="isLoaded" />
      </div>
    </div>
  </page>
</template>

<script>
import { defineComponent, inject, onMounted, ref, watch } from 'vue';
import Page from 'components/navigation/Page';
import AutomobileTemplate from 'components/automobile/AutomobileTemplate';

export default defineComponent({
  name: 'Index',
  setup () {
    const automobileRepository = inject('automobileRepository');
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
    return {
      automobile,
      isLoaded,
      route,
      update: () => setAutomobile(route.value.params.id)
    }
  },
  components: { AutomobileTemplate, Page }
});
</script>

<style scoped>

</style>

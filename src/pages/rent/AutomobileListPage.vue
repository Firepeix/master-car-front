<template>
  <page title="Selecionar Grupo" icon="mdi-car">
    <div class="row q-pb-md q-col-gutter-lg">
      <div class="col automobile-list">
        <automobile @click="selectAutomobile(automobile)" :daily="criteria.daily" :automobile="automobile" :key="automobile.id" v-for="automobile in automobiles" />
      </div>
      <div class="col-3" v-if="isLoaded">
        <cart :chosen-automobile="chosenAutomobile" :criteria="criteria" />
      </div>
    </div>
  </page>
</template>

<script>
import { defineComponent, inject, onMounted, ref, watch } from 'vue';
import Page from 'components/navigation/Page';
import Automobile from 'components/automobile/Automobile';
import Cart from 'components/rent/Cart';

export default defineComponent({
  name: 'AutomobileListPage',
  setup () {
    const searchService = inject('searchService');
    const route = inject('route');
    const searchId = ref(null)
    const automobiles = ref([])
    const isLoaded = ref(false)
    const criteria = ref(null)

    const setAutomobiles = async (id) => {
      const search = await searchService.getAutomobiles(id)
      automobiles.value = search.automobiles
      criteria.value = search.criteria
      isLoaded.value = true
      searchId.value = id
    }

    watch(route, (route) => {
      if (searchId.value === null || (route.params.id !== undefined && searchId.value !== Number(route.params.id))) {
        setAutomobiles(route.params.id)
      }
    })

    let chosenAutomobile = ref({ })
    const selectAutomobile = (automobile) => {
      chosenAutomobile.value = automobile
    }

    onMounted(() => setAutomobiles(route.value.params.id))
    return {
      automobiles,
      isLoaded,
      route,
      criteria,
      chosenAutomobile,
      selectAutomobile
    }
  },
  components: {
    Cart,
    Automobile,
    Page
  }
});
</script>

<style lang="sass">
.automobile-list
  .automobile:not(:first-child)
    margin-top: 16px
</style>

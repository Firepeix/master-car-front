<template>
  <page>
    <div class="row q-pb-md">
      <div class="col">
        <choose-city-form ref="form" />
      </div>
    </div>
    <q-separator class="q-mb-md" />
    <div class="row">
      <div class="col">
        <q-btn color="primary" @click="search" unelevated class="full-width">Buscar Automóveis</q-btn>
      </div>
    </div>
  </page>
</template>

<script>
import { defineComponent, inject, ref } from 'vue';
import Page from 'components/navigation/Page';
import ChooseCityForm from 'components/rent/ChooseCityForm';

export default defineComponent({
  name: 'CityIndex',
  setup () {
    const form = ref(null)
    const searchService = inject('searchService')
    const router = inject('router')
    const search = async () => {
      const body = form.value.getSearch()
      if (body !== null) {
        const id = await searchService.begin(body)
        router.value.push({name: 'rent.automobiles', params: { id }})
      }
    }
    return {
      search,
      form
    }
  },
  components: {
    ChooseCityForm,
    Page
  }
});
</script>

<style scoped>

</style>

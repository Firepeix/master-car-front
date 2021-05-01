<template>
  <page>
    <div class="row q-pb-md">
      <div class="col">
        <choose-city-form />
      </div>
    </div>
    <q-separator class="q-mb-md" />
    <div class="row">
      <div class="col">
        <q-btn color="primary" unelevated class="full-width">Buscar Automóveis</q-btn>
      </div>
    </div>
  </page>
</template>

<script>
import { defineComponent } from 'vue';
import Page from 'components/navigation/Page';
import ChooseCityForm from 'components/rent/ChooseCityForm';

export default defineComponent({
  name: 'CityIndex',
  components: {
    ChooseCityForm,
    Page
  }
});
</script>

<style scoped>

</style>

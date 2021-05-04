<template>
  <page title="Incluir Automóvel" icon="mdi-car-3-plus">
    <div class="row q-pb-md">
      <div class="col">
        <create-automobile-form />
      </div>
    </div>
    <q-separator class="q-mb-md" />
  </page>
</template>

<script>
import { defineComponent } from 'vue';
import Page from 'components/navigation/Page';
import CreateAutomobileForm from 'components/automobile/CreateAutomobileForm';

export default defineComponent({
  name: 'AutomobileIndex',
  components: { CreateAutomobileForm, Page}
});
</script>

<style scoped>

</style>

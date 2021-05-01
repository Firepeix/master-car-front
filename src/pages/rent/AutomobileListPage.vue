<template>
  <page title="Selecionar Grupo" icon="mdi-car">
    <div class="row q-pb-md q-col-gutter-lg">
      <div class="col">
        <automobile />
      </div>
      <div class="col-3">
        <cart />
      </div>
    </div>
  </page>
</template>

<script>
import { defineComponent } from 'vue';
import Page from 'components/navigation/Page';
import Automobile from 'components/automobile/Automobile';
import Cart from 'components/rent/Cart';

export default defineComponent({
  name: 'AutomobileListPage',
  components: {
    Cart,
    Automobile,
    Page
  }
});
</script>

<style scoped>

</style>

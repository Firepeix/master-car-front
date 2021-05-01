<template>
  <q-card flat bordered class="automobile">
    <q-card-section class="q-pa-sm">
      <div class="row">
        <div class="col">
          Grupo: B - Fiat Mobi 1.0 ou similar
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="content q-pa-none">
      <div class="row">
        <div class="col-4">
          <img src="https://www.localiza.com/brasil-site/geral/Frota/MOBI.png" alt="car">
        </div>
        <q-separator vertical/>
        <div class="col-5 features">
          <automobile-feature icon="mdi-snowflake" title="Ar-Condicionado"/>
          <automobile-feature icon="mdi-car-door" title="4 Portas"/>
          <automobile-feature icon="mdi-car-shift-pattern" title="Cambio Manual"/>
          <automobile-feature icon="mdi-car-seat" title="5 Assentos"/>
        </div>
        <q-separator vertical/>
        <div class="col text-center price-section">
          <div class="subtitle">
            A Partir De
          </div>
          <div class="price">
            <span class="symbol">R$</span>
            <span class="value">746,79</span>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';
import AutomobileFeature from 'components/automobile/AutomobileFeature';

export default defineComponent({
  name: 'Automobile',
  components: { AutomobileFeature }
});
</script>

<style scoped lang="sass">
.automobile
  cursor: pointer
  &:hover
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%) !important
  img
    width: 100%
  .content .row
    & > div
      padding: 16px
  .features
    display: flex
    flex-wrap: wrap
    text-align: center
    justify-content: center
    padding-left: 0
  .price-section
    display: flex
    flex-direction: column
    justify-content: center
    .subtitle
      font-weight: 600
      font-size: 12px
      line-height: 0.3
    .price
      font-size: 28px
      font-weight: 600
      .symbol
        font-size: 14px
        margin-right: 4px
</style>

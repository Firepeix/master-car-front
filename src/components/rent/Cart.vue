<template>
  <q-card class="cart" bordered flat>
    <q-card-section class="title q-pb-sm">
      <div class="row">
        <div class="col-md-12">
          <m-title>Reserva</m-title>
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <div class="row">
        <div class="col">
          <cart-resume />
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section>
      <div class="row">
        <div class="col">
          <q-btn color="primary" :to="{name: 'rent.agencies'}" class="full-width" icon-right="mdi-chevron-right">Prosseguir</q-btn>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';
import CartResume from 'components/rent/cart/CartResume';
import MTitle from 'components/helpers/MTitle';

export default defineComponent({
  name: 'Cart',
  components: { MTitle, CartResume }
});
</script>

<style scoped lang="sass">
.title
  font-size: 1.8rem
  text-transform: uppercase
  font-weight: 500
  letter-spacing: 1px
  text-align: center
</style>

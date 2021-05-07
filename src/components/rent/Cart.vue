<template>
  <q-card class="cart" bordered flat>
    <q-card-section class="title q-pb-sm">
      <div class="row">
        <div class="col-md-12">
          <m-title>Reserva</m-title>
        </div>
      </div>
    </q-card-section>
    <template v-if="criteria.id !== undefined">
      <q-separator/>
      <q-card-section>
        <div class="row">
          <div class="col">
            <cart-resume :chosen-group="chosenAutomobile.group?.data?.name" :criteria="criteria"/>
          </div>
        </div>
      </q-card-section>
    </template>
    <template v-if="chosenAutomobile.groupId !== undefined && !shouldHaveAgency">
      <q-separator/>
      <q-card-section>
        <div class="row">
          <div class="col">
            <q-btn color="primary" :to="{name: 'rent.agencies', params: { id: criteria.id, groupId: chosenAutomobile.groupId}}" class="full-width" icon-right="mdi-chevron-right">Prosseguir</q-btn>
          </div>
        </div>
      </q-card-section>
    </template>
    <template v-if="shouldHaveAgency && chosenAgency.id !== undefined">
      <q-separator/>
      <q-card-section>
        <div class="row">
          <div class="col">
            <div>Valor Total</div>
            <div  class="price">
              <span class="symbol">R$ </span>
              <span>{{ numberPrimitive.toReal(chosenAgency.price * criteria.daily)}}</span>
            </div>
          </div>
        </div>
      </q-card-section>
      <template v-if="!final">
        <q-separator/>
        <q-card-section>
          <div class="row">
            <div class="col">
              <q-btn color="primary" :to="{name: 'rent.checkout', params: { id: criteria.id, groupId: chosenAutomobile.groupId, agencyId: chosenAgency.token}}" class="full-width" icon-right="mdi-chevron-right">Prosseguir</q-btn>
            </div>
          </div>
        </q-card-section>
      </template>
    </template>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';
import CartResume from 'components/rent/cart/CartResume';
import MTitle from 'components/helpers/MTitle';
import NumberPrimitive from 'src/Primitives/NumberPrimitive';

export default defineComponent({
  name: 'Cart',
  setup () {
    return {
      numberPrimitive: NumberPrimitive
    }
  },
  props: {
    criteria: {
      type: Object,
      default () {
        return {};
      }
    },
    chosenAutomobile: {
      type: Object,
      default () {
        return {};
      }
    },
    shouldHaveAgency: {
      type: Boolean,
      default: false
    },
    final: {
      type: Boolean,
      default: false
    },
    chosenAgency: {
      type: Object,
      default () {
        return {};
      }
    }
  },
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
.price
  font-size: 28px
  font-weight: 600
  text-align: center
  .symbol
    font-size: 14px
    margin-right: 4px
</style>

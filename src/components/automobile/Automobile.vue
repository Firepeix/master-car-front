<template>
  <q-card flat bordered :class="['automobile', {'can-hover': price}]">
    <q-card-section class="q-pa-sm">
      <div class="row">
        <div class="col">
          Grupo: {{ automobile.group !== undefined ? automobile.group.data.name : '' }} - {{ automobile.name }}
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="content q-pa-none">
      <div class="row">
        <div class="col-4">
          <q-img v-if="automobile.thumbnailPath !== null" class="thumbnail" :src="`http://localhost/${automobile.thumbnailPath}`" />
          <no-image class="thumbnail" v-else />
        </div>
        <q-separator vertical/>
        <div class="col features" v-if="automobile.features !== undefined">
          <automobile-feature :key="feature.id" v-for="feature in automobile.features.data" :icon="feature.icon" :title="feature.description"/>
        </div>
        <q-separator vertical v-if="price"/>
        <div class="col-3 text-center price-section" v-if="price">
          <div class="subtitle">
            A Partir De
          </div>
          <div class="price">
            <span class="symbol">R$</span>
            <span class="value">{{numberPrimitive.toReal(automobile.lowestPrice * daily)}}</span>
          </div>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { defineComponent } from 'vue';
import AutomobileFeature from 'components/automobile/AutomobileFeature';
import NumberPrimitive from 'src/Primitives/NumberPrimitive';
import NoImage from 'components/automobile/NoImage';

export default defineComponent({
  name: 'Automobile',
  setup () {
    return {
      numberPrimitive: NumberPrimitive
    }
  },
  props: {
    price: {
      type: Boolean,
      default: true
    },
    automobile: {
      type: Object,
      default () {
        return {}
      }
    },
    daily: {
      type: Number,
      default: 1
    }
  },
  components: { NoImage, AutomobileFeature }
});
</script>

<style scoped lang="sass">
.automobile
  &.can-hover
    cursor: pointer
  &.can-hover:hover
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%) !important
  .thumbnail
    max-width: 100%
  .content .row
    & > div
      padding: 16px
  .features
    display: flex
    flex-wrap: wrap
    text-align: center
    justify-content: center
    align-items: center
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

<template>
  <q-card flat bordered :class="agencyClass" @click="$emit('select', id)">
    <q-card-section class="q-pa-sm">
      <div class="row flex justify-between">
        <div class="col">
          {{ agency.automobiles.data[0].template.data.name }} - {{ name }}
        </div>
        <div class="col-3 text-right">
          R$ {{ numberPrimitive.toReal(agency.price * criteria.daily)}}
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { computed, defineComponent } from 'vue';
import NumberPrimitive from 'src/Primitives/NumberPrimitive';

export default defineComponent({
  name: 'Agency',
  setup (props) {

    const agencyClass = computed(() => {
      return {
        agency: true,
        selected: props.selected
      }
    })

    return {
      agencyClass,
      numberPrimitive: NumberPrimitive

    }
  },
  props: {
    id: {
      type: Number,
      default: 0
    },
    name: {
      type: String,
      default: ''
    },
    agency: {
      type: Object,
      default () {
        return {

        }
      }
    },
    criteria: {
      type: Object,
      default () {
        return {

        }
      }
    },
    selected: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style scoped lang="sass">
.agency
  font-weight: 700
  cursor: pointer
  &:hover
    box-shadow: 0 0 10px 0 rgb(0 0 0 / 15%) !important
  &.selected
    background-color: #efffe0
    border-color: #40ac00
</style>

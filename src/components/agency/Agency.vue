<template>
  <q-card flat bordered :class="agencyClass" @click="$emit('select', id)">
    <q-card-section class="q-pa-sm">
      <div class="row flex justify-between">
        <div class="col">
          {{ name }}
        </div>
        <div class="col-3 text-right">
          R$ 462,00
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { computed, defineComponent } from 'vue';

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
      agencyClass
    }
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
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

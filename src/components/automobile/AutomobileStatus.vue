<template>
  <div class="full-width text-white rounded-borders status" :style="`background: ${color};`">
    {{ label }}
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutomobileStatus',
  setup (props) {
    const STATUS = {
      1: { color: '#21BA45', label: 'Disponível' },
      2: { color: '#7460ee', label: 'Em Uso' },
      3: { color: '#ef6c00', label: 'Em Manutenção' }
    }

    const color = STATUS[props.id].color
    const label = STATUS[props.id].label

    return {
      label,
      color
    }
  },
  props: {
    id: {
      type: Number,
      default: 1
    }
  }
});
</script>

<style scoped lang="sass">
.status
  font-weight: 700
  font-size: 15px
</style>

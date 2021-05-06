<template>
  <div :class="['dotted-menu', align]" :style="`font-size: ${size};margin-right:${offset}` ">
    <q-icon v-ripple.center style="border-radius: 100%" class="more-details" name="mdi-dots-vertical" />
    <q-menu >
      <q-list style="min-width: 100px">
        <slot />
      </q-list>
    </q-menu>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DotMenu',
  props: {
    size: {
      type: String,
      default: '24px'
    },
    align: {
      type: String,
      default: 'justify-end'
    },
    offset: {
      type: String,
      default: '0'
    }
  }
});
</script>

<style lang="sass" scoped>
.dotted-menu
  display: flex
  cursor: pointer

</style>

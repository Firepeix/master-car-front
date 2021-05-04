<template>
  <div class="feature">
    <div>
      <q-icon class="icon" :name="icon"/>
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AutomobileFeature',
  props: {
    icon: {
      type: String,
      default: 'mdi-home'
    },
    title: {
      type: String,
      default: 'Ar Condicionado'
    }
  }
});
</script>

<style scoped lang="sass">
.feature
  flex-basis: 50%
.title
  font-weight: 400
  font-size: 12px
  padding-right: 10px
.icon
  font-size: 26px
  padding-bottom: 1px
</style>

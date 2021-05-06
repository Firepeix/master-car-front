<template>
  <div :class="featureClass">
    <div>
      <q-icon class="icon" :name="icon"/>
    </div>
    <div class="title">{{ title }}</div>
  </div>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'AutomobileFeature',
  setup (props) {
    const featureClass = computed(() => {
      return {
        feature: true,
        big: props.size === 'lg'
      }
    })
    return {
      featureClass
    }
  },
  props: {
    icon: {
      type: String,
      default: 'mdi-home'
    },
    title: {
      type: String,
      default: 'Ar Condicionado'
    },
    size: {
      type: String,
      default: 'md'
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
.big
  flex-basis: auto
  .icon
    font-size: 2.5rem
  .title
    font-size: 16px
    font-weight: 700
</style>

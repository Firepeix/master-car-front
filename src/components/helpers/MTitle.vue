<template>
<div class="title">
  <slot />
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MTitle'
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

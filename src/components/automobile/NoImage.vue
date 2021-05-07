<template>
  <div class="no-image">Sem Imagem</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NoImage'
});
</script>

<style scoped lang="sass">
.no-image
  width: 300px
  display: flex
  align-items: center
  justify-content: center
  font-size: 1.5rem
  text-transform: uppercase
  font-weight: 800
  background-color: #e6e6e6
  border-radius: 8px
  height: 150px
</style>

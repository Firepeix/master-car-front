<template>
  <div class="row automobile-template">
    <div class="col">
      <div class="row q-pr-md q-pl-md">
        <div class="col">
          <div class="flex justify-between">
            <div class="third-width column flex items-center">
              <h5 class="title text-center">{{ automobile.name }}</h5>
              <q-img v-if="automobile.thumbnailPath !== null" class="thumbnail" :src="`http://localhost/${automobile.thumbnailPath}`"/>
              <no-image v-else/>
            </div>
            <div class="third-width column text-title flex items-end">
              <h5 class="title">{{ automobile.protocol }}</h5>
              <div v-if="automobile.group !== undefined">Grupo: {{ automobile.group.data.name }}</div>
              <div style="line-height: 1;font-size: 17px;" v-if="automobile.group !== undefined">{{ automobile.group.data.description }}</div>
            </div>
          </div>
        </div>
      </div>
      <template v-if="automobile.features !== undefined">
        <q-separator class="q-mt-lg q-mb-lg"/>
        <div class="row q-pr-md q-pl-md">
          <div class="col features">
            <automobile-feature :key="feature.id" v-for="feature in automobile.features.data" size="lg" :icon="feature.icon" :title="feature.description"/>
          </div>
        </div>
      </template>
      <template v-if="automobile.automobiles !== undefined">
        <q-separator class="q-mt-lg q-mb-lg"/>
        <div class="row q-pr-md q-pl-md">
          <div class="col">
            <automobile-table @update="$emit('update')" :automobiles="automobile.automobiles.data"/>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
import AutomobileFeature from 'components/automobile/AutomobileFeature';
import AutomobileTable from 'components/automobile/AutomobileTable';
import NoImage from 'components/automobile/NoImage';

export default defineComponent({
  name: 'AutomobileTemplate',
  setup (props, context) {
    const updateInterval = ref(null);
    const autoUpdate = () => {
      updateInterval.value = setInterval(() => {
        context.emit('update')
      }, 2000);
    };

    const finishUpdate = () => {
      clearInterval(updateInterval.value);
      updateInterval.value = null
    };

    onMounted(() => autoUpdate());
    onUnmounted(() => finishUpdate());

    return {
      updateInterval
    };
  },
  props: {
    automobile: {
      type: Object,
      default () {
        return {};
      }
    }
  },
  components: { NoImage, AutomobileTable, AutomobileFeature },
  emits: ['update']
});
</script>

<style scoped lang="sass">
.automobile-template
  .title
    font-weight: 700
    text-transform: uppercase
    margin: 0

  .thumbnail
    width: 300px

  .text-title
    font-size: 21px

  .features
    display: flex
    flex-wrap: wrap
    text-align: center
    justify-content: flex-start
    padding-left: 0

    & > div
      padding: 16px
</style>

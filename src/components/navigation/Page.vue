<template>
  <q-page class="flex">
    <div class="row full-width q-pa-lg">
      <div class="col">
        <q-card>
          <q-card-section v-if="title !== ''" class="title-page q-pb-md">
            <div class="row">
              <div class="col-5 title-card" style="height: 36px">
                <q-icon :name="icon" style="margin-right: 10px"/>
                <span style="height: 23px"> {{ title }}</span>
              </div>
              <div class="col actions">
                <slot name="actions" />
              </div>
            </div>
          </q-card-section>
          <q-separator />
          <q-card-section class="page-content q-pa-none">
            <slot />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Page',
  props: {
    title: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'mdi-home'
    }
  }
});
</script>

<style scoped lang="sass">
.title-page
  span
    font-size: 1.4rem
  i
    font-size: 2rem
    vertical-align: sub
.actions
  display: flex
  justify-content: flex-end
</style>
<style lang="sass">
.page-content
  & > div:first-child
    padding-top: 16px
  & > div:not(.no-page-padding)
    padding-left: 16px
    padding-right: 16px
  & > div:last-child
    padding-bottom: 16px
</style>

<template>
  <q-layout view="hHh lpR lfr">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="mdi-menu" aria-label="Menu" @click="toggleNavBar" />

        <q-toolbar-title>
          BackOffice Master Car
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer v-model="isNavBarOpen" show-if-above bordered class="bg-grey-1">
      <q-scroll-area style="height: calc(100% - 150px); border-right: 1px solid #ddd">
        <q-list padding>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="mdi-inbox" />
            </q-item-section>

            <q-item-section>
              Inbox
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const isNavBarOpen = ref(false)

    return {
      isNavBarOpen,
      toggleNavBar () {
        isNavBarOpen.value = !isNavBarOpen.value
      }
    }
  }
})
</script>

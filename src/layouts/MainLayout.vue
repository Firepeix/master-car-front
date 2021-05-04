<template>
  <q-layout view="hHh lpR lfr">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="mdi-menu" aria-label="Menu" @click="toggleNavBar" />
        <q-toolbar-title>
          Master Car
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="isNavBarOpen" show-if-above bordered class="bg-grey-1">
      <q-scroll-area style="height: calc(100% - 150px); border-right: 1px solid #ddd">
        <q-list padding>
          <q-item-label header>Alugar</q-item-label>
          <q-item clickable v-ripple :to="{ name: 'rent.index' }">
            <q-item-section avatar>
              <q-icon name="mdi-car" />
            </q-item-section>
            <q-item-section>
              Automóvel
            </q-item-section>
          </q-item>
          <q-separator />
          <q-item-label header>Gestão</q-item-label>
          <q-item clickable v-ripple :to="{ name: 'automobiles.index' }">
            <q-item-section avatar>
              <q-icon name="mdi-car-3-plus"/>
            </q-item-section>
            <q-item-section>
              Automóveis
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
import { defineComponent, ref } from 'vue';

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

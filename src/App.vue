<template>
  <router-view />
</template>
<script>
import { defineComponent, provide } from 'vue';
import AgencyRepository from 'src/repositories/AgencyRepository';
import AutomobileRepository from 'src/repositories/AutomobileRepository';
import { api } from 'boot/axios';

export default defineComponent({
  name: 'App',
  setup () {
    provide('agencyRepository', new AgencyRepository(api))
    provide('automobileRepository', new AutomobileRepository(api))
  }
})
</script>

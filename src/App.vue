<template>
  <router-view />
</template>
<script>
import { defineComponent, provide, ref } from 'vue';
import AgencyRepository from 'src/repositories/AgencyRepository';
import AutomobileRepository from 'src/repositories/AutomobileRepository';
import { api } from 'boot/axios';
import NotifyService from 'src/services/NotifyService';

export default defineComponent({
  name: 'App',
  setup () {
    const route = ref(null)
    const router = ref(null)
    provide('agencyRepository', new AgencyRepository(api))
    provide('automobileRepository', new AutomobileRepository(api))
    provide('notifyService', new NotifyService())
    provide('router', router)
    provide('route', route)
    return {
      router,
      route
    }
  },
  watch: {
    $route () {
      // noinspection JSValidateTypes
      this.route = this.$route
    }
  },
  methods: {
    makeRouter () {
      // noinspection JSValidateTypes
      this.route = this.$route
      // noinspection JSValidateTypes
      this.router = this.$router
    }
  },
  mounted () {
    this.$nextTick(() => this.makeRouter())
  }
})
</script>

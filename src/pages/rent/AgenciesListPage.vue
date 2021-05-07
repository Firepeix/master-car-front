<template>
  <page title="Selecionar Agencia" icon="mdi-store">
    <div class="row q-pb-md q-col-gutter-lg">
      <div class="col">
        <div class="row">
          <div class="col" v-if="isLoaded">
            <automobile :automobile="automobile" :price="false"/>
          </div>
        </div>
        <div class="row q-mt-lg">
          <div class="col">
            <q-card flat bordered>
              <div class="row q-pt-md q-pb-sm">
                <div class="col-md-12">
                  <m-title>Selecionar Agencia</m-title>
                </div>
              </div>
              <q-separator class="q-mb-lg"/>
              <div class="row q-pr-md q-pl-md q-pb-md">
                <div class="col agencies">
                  <agency :selected="selectedAgency.token === agency.token" v-for="agency in agencies.withdraw" :criteria="criteria" :agency="agency"
                          :key="agency.id" :id="agency.id" :name="agency.description" @select="selectAgency(agency)"/>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-4" v-if="isLoaded">
        <cart should-have-agency :chosen-agency="selectedAgency" :chosen-automobile="automobile" :criteria="criteria"/>
      </div>
    </div>
  </page>
</template>

<script>
import { defineComponent, inject, onMounted, ref, watch } from 'vue';
import Page from 'components/navigation/Page';
import Automobile from 'components/automobile/Automobile';
import Cart from 'components/rent/Cart';
import Agency from 'components/agency/Agency';
import MTitle from 'components/helpers/MTitle';

export default defineComponent({
  name: 'AgenciesListPage',
  components: {
    MTitle,
    Automobile,
    Agency,
    Cart,
    Page
  },
  setup () {
    const searchService = inject('searchService')
    const agencies = ref({
      withdraw: [],
      deposit: []
    });
    const isLoaded = ref(false)
    const searchId = ref(null)
    const criteria = ref(null)
    const automobile = ref({ })
    const route = inject('route');

    const setUpAgencies = async (id, groupId) => {
      const response = await searchService.getAgencies(id, groupId)
      agencies.value.withdraw = response.agencies
      automobile.value = response.automobile
      criteria.value = response.criteria
      isLoaded.value = true
      searchId.value = id
    }

    let selectedAgency = ref({  });
    const selectAgency = (agency) => {
      selectedAgency.value = agency;
    };


    watch(route, (route) => {
      if (searchId.value === null || (route.params.id !== undefined && searchId.value !== Number(route.params.id))) {
        setUpAgencies(route.params.id, route.params.groupId)
      }
    })


    onMounted(() => setUpAgencies(route.value.params.id, route.value.params.groupId))

    return {
      agencies,
      selectedAgency,
      selectAgency,
      automobile,
      isLoaded,
      criteria
    };
  }
});
</script>

<style scoped lang="sass">
.agencies
  & > div:not(:first-child)
    margin-top: 1rem
</style>

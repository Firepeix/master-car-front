<template>
  <page title="Checkout" icon="mdi-check-outline">
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
                  <m-title>Dados do Motorista</m-title>
                </div>
              </div>
              <q-separator class="q-mb-lg"/>
              <div class="row q-pr-md q-pl-md q-pb-md">
                <div class="col">
                  <driver-form />
                </div>
              </div>
            </q-card>
          </div>
        </div>
        <div class="row q-mt-lg">
          <div class="col">
            <q-card flat bordered>
              <div class="row q-pt-md q-pb-sm">
                <div class="col-md-12">
                  <m-title>Dados de Pagamento</m-title>
                </div>
              </div>
              <q-separator class="q-mb-lg"/>
              <div class="row q-pr-md q-pl-md q-pb-md">
                <div class="col">
                  <payment-form />
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-4" v-if="isLoaded">
        <cart final should-have-agency :chosen-agency="agency" :chosen-automobile="automobile" :criteria="criteria"/>
      </div>
    </div>
  </page>
</template>

<script>
import { defineComponent, inject, onMounted, ref, watch } from 'vue';
import Page from 'components/navigation/Page';
import Automobile from 'components/automobile/Automobile';
import Cart from 'components/rent/Cart';
import MTitle from 'components/helpers/MTitle';
import DriverForm from 'components/checkout/DriverForm';
import PaymentForm from 'components/checkout/PaymentForm';

export default defineComponent({
  name: 'AgenciesListPage',
  components: {
    PaymentForm,
    DriverForm,
    MTitle,
    Automobile,
    Cart,
    Page
  },
  setup () {
    const agencies = {
      withdraw: [
        {id: "AACON", description: 'ROD. LMG 800, KM 3, GOIABEIRAS'},
        {id: "AACAI", description: 'AV PRESIDENTE CARLOS LUZ, 561, CAICARAS'},
        {id: "AABHZ", description: 'AV CRISTIANO MACHADO, 2875, IPIRANGA'},
        {id: "AABRA", description: 'AV OLINTO MEIRELES, 440, BARREIRO'},
        {id: "AAPAM", description: 'AV PROFESSOR MAGALHAES PENIDO, 269, PAMPULHA'}
      ],
      deposit: []
    };
    const selectedAgencyId = ref(null);
    const selectAgency = (id) => {
      selectedAgencyId.value = id;
    };
    const searchService = inject('searchService')

    const isLoaded = ref(false)
    const searchId = ref(null)
    const criteria = ref(null)
    const automobile = ref({ })
    const agency = ref({ })
    const route = inject('route');

    const setUpCheckout = async (id, groupId, agencyId) => {
      const response = await searchService.getCheckout(id, groupId, agencyId)
      agency.value = response.agency
      automobile.value = response.automobile
      criteria.value = response.criteria
      isLoaded.value = true
      searchId.value = id
    }

    watch(route, (route) => {
      if (searchId.value === null || (route.params.id !== undefined && searchId.value !== Number(route.params.id))) {
        setUpCheckout(route.params.id, route.params.groupId, route.agencyId)
      }
    })


    onMounted(() => setUpCheckout(route.value.params.id, route.value.params.groupId, route.value.params.agencyId))


    return {
      agencies,
      selectedAgencyId,
      selectAgency,
      isLoaded,
      searchId,
      criteria,
      automobile,
      agency,
    };
  }
});
</script>

<style scoped lang="sass">

</style>

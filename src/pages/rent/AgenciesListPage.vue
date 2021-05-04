<template>
  <page title="Selecionar Agencia" icon="mdi-store">
    <div class="row q-pb-md q-col-gutter-lg">
      <div class="col">
        <div class="row">
          <div class="col">
            <automobile :price="false"/>
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
                  <agency :selected="selectedAgencyId === agency.id" v-for="agency in agencies.withdraw"
                          :key="agency.id" :id="agency.id" :name="agency.description" @select="selectAgency"/>
                </div>
              </div>
            </q-card>
          </div>
        </div>
      </div>
      <div class="col-4">
        <cart/>
      </div>
    </div>
  </page>
</template>

<script>
import { defineComponent, ref } from 'vue';
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
    return {
      agencies,
      selectedAgencyId,
      selectAgency
    };
  }
});
</script>

<style scoped lang="sass">
.agencies
  & > div:not(:first-child)
    margin-top: 1rem
</style>

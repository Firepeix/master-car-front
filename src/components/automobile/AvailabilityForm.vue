<template>
  <q-card flat bordered>
    <q-card-section>
      <q-table style="height: 300px" flat :rows="availability"
               :columns="availabilityColumns" row-key="id"
               virtual-scroll v-model:pagination="availabilityPagination"
               :rows-per-page-options="[0]">
        <template v-slot:body-cell-quantity="props">
          <q-td :props="props">
            <q-input mask="########" dense v-model="props.row.quantity" :model-value="props.row.quantity"/>
          </q-td>
        </template>
        <template v-slot:body-cell-price="props">
          <q-td :props="props">
            <q-input mask="#######,##" reverse-fill-mask dense v-model="props.row.price" :model-value="props.row.price">

            </q-input>
          </q-td>
        </template>
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn @click="removeFromAvailability(props.row.id)" icon="mdi-close" color="negative" size="sm" round />
          </q-td>
        </template>
        </q-table>
    </q-card-section>
    <q-separator/>
    <q-card-actions>
      <div class="row full-width q-col-gutter-md">
        <div class="col">
          <q-select v-model="selectedAgency" label="Adicionar Agencia" option-label="name" :options="agencies"
                    :model-value="selectedAgency"/>
        </div>
        <div class="col-3 flex column justify-center">
          <q-btn class="full-width" @click="addToAvailability" color="positive" icon="mdi-plus">Adicionar</q-btn>
        </div>
      </div>
    </q-card-actions>
  </q-card>
</template>

<script>
import { defineComponent, inject, onMounted, ref } from 'vue';

export default defineComponent({
  name: 'AvailabilityForm',
  setup () {
    const agencyRepository = inject('agencyRepository');
    const agencies = ref([]);
    const setUpAgencies = async () => {
      agencies.value = await agencyRepository.getAgencies();
    };

    onMounted(setUpAgencies);

    const selectedAgency = ref(null);

    const availability = ref([])

    const addToAvailability = () => {
      if (availability.value.find(agency => agency.id === selectedAgency.value.id) === undefined) {
        selectedAgency.value.quantity = null
        selectedAgency.value.price = null
        availability.value.push(selectedAgency.value)
        selectedAgency.value = null
      }
    }

    const removeFromAvailability = (id) => {
      availability.value = availability.value.filter(agency => agency.id !== id)
    }

    const getAvailability = () => {
      return availability.value.filter(agency => agency)
    }

    return {
      selectedAgency,
      agencies,
      addToAvailability,
      removeFromAvailability,
      availability,
      availabilityColumns: agencyRepository.getAvailabilityColumns(),
      availabilityPagination: {
        rowsPerPage: 0,
        rowsNumber: availability.value.length
      },
      getAvailability
    }
  }
});
</script>

<style scoped>

</style>

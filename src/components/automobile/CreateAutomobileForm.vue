<template>
  <q-form>
    <div class="row q-col-gutter-xl">
      <div class="col-6">
        <q-input label="Nome Do Veiculo" v-model="name" :model-value="name"/>
      </div>
      <div class="col-6">
        <q-select v-model="group" option-label="name" :options="availableGroups" label="Grupo" :model-value="group">
          <template #option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label>{{ scope.opt.name }} - {{ scope.opt.description }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
    </div>
    <div class="row q-col-gutter-xl q-mt-md">
      <div class="col-6 q-pt-none">
        <q-select v-model="features" multiple option-label="description" :options="availableFeatures" label="Funcionalidades" :model-value="features">
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section avatar>
                <q-icon :name="scope.opt.icon"/>
              </q-item-section>
              <q-item-section>
                <q-item-label v-html="scope.opt.description"/>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
      </div>
      <div class="col-6 q-pt-none">
        <q-file v-model="thumbnail" label="Thumbnail" :model-value="thumbnail">
          <template v-slot:prepend>
            <q-icon name="attach_file"/>
          </template>
        </q-file>
      </div>
    </div>
    <div class="row q-mt-md" v-show="!edit">
      <div class="col">
        <availability-form ref="availabilityForm"/>
      </div>
    </div>
  </q-form>
</template>

<script>
import { defineComponent, inject, onMounted, ref } from 'vue';
import AvailabilityForm from 'components/automobile/AvailabilityForm';

export default defineComponent({
  name: 'CreateAutomobileForm',
  components: { AvailabilityForm },
  setup (props) {
    const automobileRepository = inject('automobileRepository')
    const name = ref(props.edit ? props.savedAutomobile.name : null);
    const group = ref(props.edit ? props.savedAutomobile.group.data : null);
    const availableGroups = ref([]);
    const setGroups = async () => {
      availableGroups.value = await automobileRepository.getGroups()
    };

    onMounted(setGroups)

    const thumbnail = ref(null);
    const features = ref(props.edit ? props.savedAutomobile.features.data : null);
    const availableFeatures = ref([]);
    const setFeatures = async () => {
      availableFeatures.value = await automobileRepository.getAvailableFeatures()
      if (props.edit) {
        availableFeatures.value = availableFeatures.value.filter(feature => {
          return features.value.find(newFeature => feature.description === newFeature.description) === undefined
        }).concat(features.value)
      }
    };

    onMounted(setFeatures)

    const availabilityForm = ref(null)

    const getAutomobileTemplate = () => {
      return {
        name: name.value,
        group: group.value,
        thumbnail: thumbnail.value,
        features: features.value,
        availability: props.edit ? [] : availabilityForm.value.getAvailability()
      }
    }

    return {
      name,
      group,
      availableGroups,
      thumbnail,
      features,
      availableFeatures,
      availabilityForm,
      getAutomobileTemplate
    };
  },
  props: {
    edit: {
      type: Boolean,
      default: false
    },
    savedAutomobile: {
      type: Object,
      default () {
        return {

        }
      }
    }
  }
});
</script>

<style scoped>

</style>

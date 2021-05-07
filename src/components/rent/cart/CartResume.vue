<template>
<div class="resume">
  <div class="title" v-if="chosenGroup !== ''">
    <div>Grupo: {{ chosenGroup }}</div>
  </div>
  <div class="body" :style="`${chosenGroup !== '' ? '' : ' border-top: solid #9e9e9e 1px'}`">
    <div id="daily"><span>Total de Diárias:</span><span>{{ criteria.daily }}</span></div>
    <q-separator class="q-mt-sm q-mb-sm"/>
    <div id="withdraw" class="criteria">
      <div class="type"><q-icon class="icon" name="mdi-car-hatchback "/> Retirada</div>
      <div class="datetime">
        <div class="time"><q-icon name="mdi-clock-outline" /> <span> {{ criteria.withdrawDate.split(' ')[1].slice(0, 5) }}H</span></div>
        <div class="date"><span>{{ criteria.withdrawDate.split(' ')[0].split('-').reverse().join('/') }}</span></div>
      </div>
    </div>
    <div id="deposit" class="criteria">
      <div class="type"> <q-icon class="icon" name="mdi-car-hatchback "/> Devolução</div>
      <div class="datetime">
        <div class="time"><q-icon name="mdi-clock-outline" /> <span> {{ criteria.depositDate.split(' ')[1].slice(0, 5) }}H</span></div>
        <div class="date"><span>{{ criteria.depositDate.split(' ')[0].split('-').reverse().join('/') }}</span></div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CartResume',
  props: {
    criteria: {
      type: Object,
      default () {
        return {

        }
      }
    },
    chosenGroup: {
      type: String,
      default: ''
    }
  },
});
</script>

<style scoped lang="sass">
.resume
  font-size: 1rem
  .title
    border: solid #9e9e9e 1px
    border-top-left-radius: 7px
    border-top-right-radius: 7px
    text-align: center
    background-color: #eeeeee
    font-weight: 700
  .body
    border: solid #9e9e9e 1px
    border-top: none
    padding: 10px
    #daily
      display: flex
      font-weight: 700
      justify-content: space-between
      i
        vertical-align: sub
    .criteria
      .type
        font-weight: 700
        text-align: center
      .icon
        font-size: 28px
        padding-right: 5px
    #withdraw
      .icon::before
        transform: rotateY(180deg)
    .datetime
      display: flex
      justify-content: space-between
      i
        vertical-align: baseline
</style>

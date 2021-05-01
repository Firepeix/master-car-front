<template>
  <q-card class="cart" bordered flat>
    <q-card-section class="title">
      <div class="row">
        <div class="col-md-12">
          <div class="cart-title">Reserva</div>
        </div>
      </div>
    </q-card-section>
    <q-separator />
    <q-separator />
    <!--div class="row">
  <div class="col-md-12">
    <div id="main">
      <div id="info">
        <div id="rental"><img src="https://static.app.onfly.com.br/statics/images/travel/renter/localiza.gif" alt="Localiza"></div>
        <div id="general" style="justify-content: center;">
          <div id="group">Grupo: B</div>
        </div>
      </div>
      <div id="body">
        <div id="daily"><span>Total de Diarias:</span><span>8</span></div>
        <hr>
        <div id="withdraw" class="criteria"><span class="icon"><i class="mdi mdi-car-hatchback"></i></span>
          <div class="location">
            <div class="title">Retirada</div>
            <div class="datetime">
              <div class="date"><span><i class="mdi mdi-calendar"></i></span><span>13/05/2021</span></div>
              <div class="time"><span><i class="mdi mdi-clock-outline"></i></span><span>12:00H</span></div>
            </div>
          </div>
        </div>
        <div id="deposit" class="criteria"><span class="icon"><i class="mdi mdi-car-hatchback"></i></span>
          <div class="location">
            <div class="title">Devolução</div>
            <div class="datetime">
              <div class="date"><span><i class="mdi mdi-calendar"></i></span><span>21/05/2021</span></div>
              <div class="time"><span><i class="mdi mdi-clock-outline"></i></span><span>12:00H</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="row">
  <div class="col-md-12">
    <div id="price">
      <div class="d-flex align-items-center">Total:</div>
      <div><span>R$</span> <span>746,79</span></div>
    </div>
  </div>
</div>
<div class="row mt-1">
  <div class="col-md-12"><span class="alert alert-onf alert-warning reserve-warning">
    Após 1 (uma) hora do horário de retirada, está reserva sera considerada como "No-Show", e a locadora cobra multa de uma diária,
    caso for atrasar entre em contato conosco em nossos canais de atendimento
  </span></div>
</div>
<div class="row">
  <div class="col-md-12 text-center pt-3"><a href="https://app.onfly.com.br/automobiles/location/481f2cecc837198f1b8706b63c173ac2/feb6b805acd9a72c0a35a8512768288fe9749803">
    <button class="btn btn-onf btn-buy-car waves-effect waves-light">Prosseguir<i class="mdi mdi-chevron-double-right"></i></button>
  </a>
  </div>
</div-->

  </q-card>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cart'
});
</script>

<style scoped lang="sass">
.title
  height: 66px
  font-size: 1.8rem
  text-transform: uppercase
  font-weight: 500
  letter-spacing: 1px
  text-align: center
</style>

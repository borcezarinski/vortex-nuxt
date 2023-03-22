<template>
  <v-container  class="overflow-hidden">
    <v-row>
      <v-col cols="12" md="7" lg="6"  class="d-flex flex-column justify-content-center">
        <div class="order-2 order-lg-0" data-cues="slideInDown" data-group="page-title" data-delay="600" data-disabled="true">
          <h1 class="mb-3 text-center text-md-start">Вистински цени <span class="text-nowrap"><br />на вистинско место</span></h1>
          <client-only>
         <h2 class="my-5 text-center text-md-start">Продажба и сервис на <br /><vue-typer
              :text='["компјутери","компјутерска опрема","лаптопи"]'
              :repeat='Infinity'
              :shuffle='false'
              initial-action='typing'
              :pre-type-delay='70'
              :type-delay='70'
              :pre-erase-delay='2000'
              :erase-delay='250'
              erase-style='select-all'
              :erase-on-complete='false'
              caret-animation='blink'
         ></vue-typer></h2>
          </client-only>
          <div class="mt-3 d-flex justify-content-center justify-content-lg-start" data-cues="slideInDown" data-group="page-title-buttons" data-delay="900" data-cue="slideInDown" data-disabled="true" data-show="true" style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 900ms; animation-direction: normal; animation-fill-mode: both;">
            <span data-cue="slideInDown" data-group="page-title-buttons" data-delay="900" data-show="true" style="animation-name: slideInDown; animation-duration: 700ms; animation-timing-function: ease; animation-delay: 1200ms; animation-direction: normal; animation-fill-mode: both;"><v-btn color="primary" rounded @click="$router.push('/cenovnik')">Види цени<v-icon class="ml-2">mdi-arrow-right</v-icon></v-btn></span>
          </div>
        </div>
      </v-col>
        <v-col cols="12" md="5" lg="6">
        <laptop-wrapper />
      </v-col>
    </v-row>
    <v-row class="pb-15 py-lg-15 mb-5">
      <cenovnik-table class="pb-15 py-lg-10" :simple="true" />

    </v-row>


  </v-container>
</template>
<script>
import LaptopWrapper from "@/components/laptopWrapper";
import cenovnikTable from "@/components/cenovnikTable";
import ContactCard from "@/components/ui/contactCard";
import VortexLoader from "@/components/ui/vortexLoader";

export default{
  components: {VortexLoader, ContactCard, cenovnikTable, LaptopWrapper}
}
</script>

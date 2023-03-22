<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      <div><img class="mr-2" :src="program.icon" style="max-height:32px;width:auto;min-width:auto;max-width:100%;" :alt="program.name + 'program link'"/></div>
      <div>{{ program.name }}</div>
      <div><v-btn class="float-end me-5" color="blue" @click="gotolink(program.link)">Download</v-btn></div>
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      {{ program.description }}
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default{
  name:"programPanel",
  props:{
    program:{
      type:Object,
      required:true
    }
  },
  methods:{
    gotolink(link){
      window.open(link, '_blank');
    }
  }
}
</script>

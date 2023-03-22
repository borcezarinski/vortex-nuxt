<template>
  <v-app>
    <v-container>
      <cenovnik-table :filter-mode="true" :download-mode="true" />
    </v-container>
  </v-app>

</template>

<script>
import cenovnikTable from "@/components/cenovnikTable"
export default{
  components:{
    cenovnikTable
  },
  name:"cenovnikPage"
}
</script>

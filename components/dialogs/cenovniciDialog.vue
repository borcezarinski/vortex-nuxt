<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="600px"
    >
      <v-card>
        <v-card-title class="border-bottom">Вортекс Компјутери ценовник</v-card-title>
        <v-card-text class="px-3 py-5">
          <v-flex>
            <v-btn color="#E50D0A" class="mr-3" @click="download('/Cenovnici/kompleten.xls')">Комплетен<v-icon>mdi-file-excel-box</v-icon></v-btn>
            <v-btn color="#E50D0A" class="mr-3" @click="download('/Cenovnici/kompleten.pdf')">Комплетен<v-icon>mdi-file-pdf-box</v-icon></v-btn>
          </v-flex>

        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  methods:{
    download(cenovnik){
      window.open(cenovnik);
    }
  },
  data () {
    return {
      dialog: false,
    }
  },
}
</script>

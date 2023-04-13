<template>
  <div class="mt-3">
  <v-row>
    <v-col cols="12" class="mb-3" v-if="downloadMode">
      <h4 class="d-block">Превземи ценовник<v-icon class="ml-2">mdi-download</v-icon></h4>
      <v-btn color="#107C41" class="mt-2 mr-3"><a href="/Cenovnici/VORTEX-CENOVNIK.xls" download class="text-white text-decoration-none w-100">Комплетен(excel)<v-icon>mdi-file-excel</v-icon></a></v-btn>
      <v-btn color="#E50D0A" class="mt-2 mr-3"><a href="/Cenovnici/kompleten.pdf" download class="text-white text-decoration-none w-100">Комплетен(pdf)<v-icon>mdi-file-pdf-box</v-icon></a></v-btn>
      <v-btn color="#E50D0A" class="mt-2 mr-3"><a href="/Cenovnici/prenosni.pdf" download class="text-white text-decoration-none w-100">Лаптопи<v-icon>mdi-file-pdf-box</v-icon></a></v-btn>
      <v-btn color="#107C41" class="mt-2 mr-3"><a href="/Cenovnici/akcija.xls" download class="text-white text-decoration-none w-100">Акција<v-icon>mdi-file-excel</v-icon></a></v-btn>
    </v-col>
  </v-row>

    <v-row class="flex-column-reverse flex-md-row">

      <v-col cols="12" md="6" class="mb-3">
        <v-text-field v-model="search_temp" @input="searchDatatable" outlined placeholder="Пребарувај продукти" prepend-icon="mdi-search" label="Пребарувај" />
      </v-col>
        <v-col cols="12" md="6" v-if="filterMode">
          <category-dropdown  @filterByCategory="filterByCategory($event)" />
        </v-col>
      <v-col cols="12" :md="filterMode ? 12 : 6">
        <v-alert color="info">Цените се со вклучено ДДВ.</v-alert>
      </v-col>


    </v-row>

  <v-data-table     :headers="headers" :search="search" :key="'datatable-' + datatableKey"
                   :items="cenovnik" class="elevation-1 table-striped">
    <template #item.name="{ item }">
      <long-string  :long-string="item.name" :character-cut-off="35" v-if="$vuetify.breakpoint.mdAndUp"  />
      <span v-else >{{ item.name }}</span>
    </template>
    <template #item.description="{ item }">
      <long-string :long-string="item.description" :character-cut-off="65" />
    </template>
  </v-data-table>
  </div>
</template>
<script>
import cenovnikJson from '/static/Cenovnici/cenovnik.json';
import _ from 'lodash';
import LongString from "@/components/ui/longString";
import VortexLoader from "@/components/ui/vortexLoader";
import categoryDropdown from "@/components/dropdown/categoryDropdown";
export default{
  name:"cenovnik",
  components: { VortexLoader, LongString, categoryDropdown},
  methods:{
    searchDatatable: _.debounce(function() {
      this.search = _.clone(this.search_temp);
      this.datatableKey++;
    },600),
    filterByCategory(category){
      this.cenovnik = category ? _.cloneDeep(this.rcenovnik.filter(x => x.category == category)) : _.cloneDeep(this.rcenovnik);
      this.datatableKey++;
    },
    download(link){
      var links = document.createElement('a');
      document.body.appendChild(links);
      links.download = link;
      links.href = link;
      links.click();
      document.body.removeChild(link);
    },
  },
  computed:{
    headers(){
      return this.$vuetify.breakpoint.smAndDown ? ["category", "brand", "name", "price", "description","warranty", "tax","lager"].map((h, index) => ({value: h, text:this.csvHeaders[index]}))  :  ["category", "brand", "name", "akcija", "price", "description","warranty", "tax","lager"].map((h, index) => ({value: h, text:this.csvHeaders[index]}));
    },
    csvHeaders(){
      return this.$vuetify.breakpoint.smAndDown ? ["Категорија","Brand","Име на производ","Цена(ден)","Карактеристики","Гар(м)","ДДВ","лагер"] : ["Категорија","Brand","Име на производ","АКЦИЈА","Цена(ден)","Карактеристики","Гар(м)","ДДВ","лагер"];
    }
  },
  watch:{
    search:{
      handler(val){
      _.debounce(function(){
        this.search = val;
      },600)
      }
    }
  },
  props:{
    simple:{
      type:Boolean,
      default:false
    },
    filterMode:{
      type:Boolean
    },
    downloadMode:{
      type:Boolean
    }
  },
  data(){
    return{
      cenovnik: cenovnikJson,
      rcenovnik: cenovnikJson,
      search_temp:"",
      search: "",
      datatableKey:1
    }
  }
}
</script>

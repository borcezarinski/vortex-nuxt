<template>
  <v-autocomplete
    v-model="select"
    v-model:search="search"
    :loading="loading"
    :items="categories"
    density="comfortable"
    hide-no-data
    hide-details
    outlined
    clearable
    label="Категорија"
    item-text="name"
    item-value="name"
    @change="$emit('filterByCategory', $event)"
>
</v-autocomplete>
</template>
<script>
import categoryJson from '/static/Cenovnici/category.json';
export default {
  data () {
    return {
      loading: false,
      items: [],
      search: null,
      select: null,
      categories: categoryJson
    }
  },
  watch: {
    search (val) {
      val && val !== this.select && this.querySelections(val)
    },
  },
  methods: {
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
     /*   this.categories = this.categories.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })*/
        this.loading = false
      }, 500)
    },
  },
}
</script>

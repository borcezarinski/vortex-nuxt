<template>
  <div class="text-center">
    <v-dialog
        v-model="dialog"
        width="600px"
    >
      <v-card>
        <v-card-title class="border-bottom">{{ product.name }}</v-card-title>
        <v-card-text class="px-3 py-5">
        <h3>Карактериски</h3>
          <p>{{ product.description && product.description.length > 1 ? product.description : '/' }}</p>
          <hr />
          <h3>Цена</h3>
          <p>{{ product.price }}ден.</p>
          <hr />
          <h3>Лагер</h3>
          <p>{{ product.lager }}</p>

        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  props:{
    product:{
      type:Object,
      required:true
    }
  },
  data () {
    return {
      dialog: false
    }
  },
}
</script>

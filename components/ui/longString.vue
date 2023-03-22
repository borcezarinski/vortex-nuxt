<template>
  <div class="longstring position-relative overflow-visible"
       @mouseover="cutReveal == 'hover' ? hover = true : hover = false" @mouseleave="hover = false"
       @mouseout="stringCut = $props.longString.substr(0, $props.characterCutOff)">
    <div v-if="longString.length > characterCutOff">
      <div class="info-t  overflow-visible" v-if="cutReveal == 'tooltip'">
        <Tooltip :text="longString" :alignment="alignment" text-direction="left" :alt="longString"
                 :min-width="longString.length*4 < 600 ? longString.length*4 : 600" alignment="left">
          {{ $props.longString.substr(0, $props.characterCutOff) }}...
        </Tooltip>
      </div>
      <span v-else-if="cutReveal == 'hover'" class="hovering-string text-word-break text-wrap"><span
          class="text-prewrap text-word-break">{{
          stringCut
        }}</span>{{
          hover == true ? $props.longString.substr(characterCutOff, $props.longString.length) : '...'
        }}</span>
      <span v-else>
        {{
          stringCut
        }}
      </span>
    </div>
    <span v-else>{{ stringCut }}</span>
  </div>

</template>

<script>
import Tooltip from "@/components/ui/Tooltip";

export default {
  name: "longString",
  components: {Tooltip},

  props: {
    longString: {
      type: String,
      required: true
    },
    alignment: {
      type: String,
      default: "left"
    },
    characterCutOff: {
      type: Number,
      default: 60
    },
    cutReveal: {
      type: String,
      default: 'tooltip'
    }
  },
  data() {
    return {
      stringCut: this.$props.longString.substr(0, this.$props.characterCutOff),
      hover: false
    }
  }
}
</script>

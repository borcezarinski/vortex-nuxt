<template>

  <div :class="'tooltip-box2  text-' + alignment" @mouseover="positionTooltip">
    <slot/>
    <div
        :class="textDirection ? 'tooltip2 text-' + textDirection : 'tooltip2 text-' + alignment">
      <span
          class="text" style="font-size:0.9rem !important;font-weight:400 !important;z-index:1900 !important;"
          v-html="text"
          v-bind:class="{'left-arrow': arrow == 'left' || (!arrow && alignment == 'left'), 'center-arrow': arrow == 'center' || (!arrow && alignment == 'center'), 'right-arrow': alignment == 'right'}"
      ></span>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';
import $ from 'jquery';
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    alignment: {
      type: String,
      default: 'center'
    },
    textDirection: {
      type: String,
    },
    arrow: {
      type: String
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll() {
      $('.tooltip2').removeAttr('style');
    },
    positionTooltip(event) {
      let tooltip_box = $(event.target);
      let longstring = $(tooltip_box).closest('.longstring');
      let content = $(tooltip_box).closest('.tooltip2');
      if ($(longstring).get(0)) {
        let {top, height, left} = $(longstring).get(0).getBoundingClientRect();
        content.css('position', 'fixed');
        let scrolled = window.scrollY;
        let positionTop = Number(top) + Number(height) + Number(scrolled);
        this.$nextTick(() => {
          content.css('top', `${positionTop}px`);
          content.css('left', `${left}px`);
          content.css('marginTop', -scrolled + 'px');
        })
      }

    }

  }
};
</script>

<style scoped>
.tooltip-box2 {
  position: static;
  z-index: 999;
}

.tooltip-box2:hover .tooltip2 {
  opacity: 1;
  display: inline-block;
  z-index: 999 !important;
}

.tooltip2.text-center {
  left: 50%;
}

.tooltip2 {
  display: none;
  color: #ffffff;
  padding: 12.5px 10px;
  min-width: 120px;
  position: absolute;
  max-width: 40vw;
  word-break: break-all;
  white-space: pre-wrap;
  left: 0;
  top: -5%;
  background: darkgray;
  opacity: 0;
  transition: opacity 1s;
  border-radius: 5px;
  z-index: 999;
}

/*.left-arrow.text::after{
  left: 3rem;
}
.right-arrow.text::after{
  left: 75%;
}
.center-arrow.text::after{
  left: 50%;
}*/
/*.text::after {
  content:'';
  position: absolute;
  top: 100%;
  margin-left: -2.5px;
  width: 0;
  height: 0;

}*/
/*
.dropdown-menu .left-arrow.text::after{
  left: 1.5rem;
}
.dropdown-menu .tooltip2{
  margin-left:-50px;
}
*/

</style>

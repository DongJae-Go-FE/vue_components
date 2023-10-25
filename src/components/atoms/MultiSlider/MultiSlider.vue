<template>
  <Styled>
    <input type="range" min="0" max="100" value="25" />
    <input type="range" min="0" max="100" value="75" />
    <div class="slider">
      <div class="track"></div>
      <div class="range"></div>
      <div class="thumb left"></div>
      <div class="thumb right"></div>
    </div>
  </Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "MultiSliderComponent",
  mounted() {
    //라이프 사이클
    //beforeCreate();
    //created();
    //beforeMount();
    //mounted();
    //beforeUpdate();
    //updated();
    //beforeUnmount();
    //unmounted();
  },
  components: {
    Styled,
  },
  methods: {},
  props: {},
  data() {
    return {};
  },
};
</script>

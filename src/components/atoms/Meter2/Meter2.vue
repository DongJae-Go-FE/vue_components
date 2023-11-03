<template>
  <Styled :value="value">
    <div>
      <p>{{ value }}</p>
      <span>ms</span>
    </div>
    <div>
      <meter :value="value" id="meter"></meter>
      <label ref="circle" for="meter"
        ><span>{{ value + `ms` }}</span></label
      >
    </div>
  </Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "Meter2Component",
  mounted() {
    this.circle = this.$refs.circle;
    this.circle.style.left = this.value + "%";
  },
  components: {
    Styled,
  },
  methods: {},
  props: {
    value: Number,
  },
  data() {
    return {
      circle: "",
    };
  },
};
</script>

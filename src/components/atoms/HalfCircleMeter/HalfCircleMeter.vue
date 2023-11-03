<template>
  <Styled :value="value">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        v-for="(data, i) in pathData"
        :d="data.title"
        :opacity="data.opacity"
        :key="i"
        :strokeMiterlimit="10"
        ref="path"
      />
    </svg>
    <div>{{ value }} <span>%</span></div>
  </Styled>
</template>

<script>
import Styled from "./styled";
import { dummy } from "./data/dummy";
export default {
  name: "HalfCircleMeterComponent",
  mounted() {
    this.pathValue = this.$refs.path;
    for (let i = 0; i < this.setValue; i++) {
      this.pathValue[i].style.stroke = this.ColorReturn();
    }
  },
  components: {
    Styled,
  },
  methods: {
    ColorReturn() {
      if (79 < this.value) {
        return "#FF3B30";
      } else if (40 < this.value) {
        return "#FF9500";
      } else {
        return "#34C759";
      }
    },
  },
  props: {
    value: Number,
  },
  data() {
    return {
      pathValue: "",
      setValue: Math.floor(this.value / 1.66),
      pathData: dummy,
    };
  },
};
</script>

<template>
  <Styled :setValue="setValue">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="139"
      height="67"
      viewBox="0 0 139 67"
      fill="none"
    >
      <path
        v-for="(data, i) in pathData"
        :d="data.title"
        :opacity="data.opacity"
        :key="i"
        :strokeMiterlimit="10"
      />
    </svg>
    <div>{{ value }} %</div>
  </Styled>
</template>

<script>
import Styled from "./styled";
import { dummy } from "./data/dummy";
export default {
  name: "HalfCircleMeterComponent",
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
  props: {
    value: Number,
  },
  data() {
    return {
      setValue: Math.floor(this.value / 1.66),
      pathData: dummy,
    };
  },
};
</script>

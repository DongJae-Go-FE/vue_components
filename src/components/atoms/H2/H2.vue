<template>
  <Styled :color="color">{{ text }}</Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "H2Component",
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
    text: String,
    color: String,
  },
  data() {
    return {};
  },
};
</script>

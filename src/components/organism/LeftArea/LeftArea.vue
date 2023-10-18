<template>
  <Styled>샘플용</Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "sampleComponent",
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

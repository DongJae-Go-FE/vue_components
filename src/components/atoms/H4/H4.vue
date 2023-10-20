<template>
  <Styled :color="color"
    >{{ text }} <span v-if="subText !== null">{{ subText }}</span>
  </Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "H4Component",
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
    subText: String,
    color: String,
  },
  data() {
    return {};
  },
};
</script>

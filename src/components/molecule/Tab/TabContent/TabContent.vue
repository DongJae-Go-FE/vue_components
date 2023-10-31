<template>
  <Styled v-if="tabOn === sub">{{ content }}</Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "TabContentComponent",
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
  props: { content: String, tabOn: Number, sub: Number },
  data() {
    return {};
  },
};
</script>

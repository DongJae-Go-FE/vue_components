<template>
  <Teleport to="body" v-if="dimState === true">
    <Styled @click="dimClickOff(e)">
      <slot></slot>
    </Styled>
  </Teleport>
</template>

<script>
import Styled from "./styled";
export default {
  name: "DimComponent",
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
  methods: {
    dimClickOff() {
      this.dimState = false;
    },
  },
  props: {},
  data() {
    return {
      dimState: true,
    };
  },
};
</script>

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

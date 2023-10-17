<template>
  <Styled :type="type" :size="size">{{ text }}</Styled>
</template>

<script>
import Styled from "./styled";

export default {
  name: "TextButton",
  components: {
    Styled,
  },
  methods: {},
  props: { type: String, text: String, size: String },
  data() {
    return {};
  },
};
</script>

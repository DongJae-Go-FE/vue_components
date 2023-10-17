<template>
  <Styled :type="type" :size="size" :isCapsule="isCapsule" :isBlock="isBlock">{{
    text
  }}</Styled>
</template>

<script>
import Styled from "./styled";

export default {
  name: "ButtonComponent",
  components: {
    Styled,
  },
  props: {
    text: String,
    type: String,
    size: String,
    isCapsule: Boolean,
    isBlock: Boolean,
  },
};
</script>

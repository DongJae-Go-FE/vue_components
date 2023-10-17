<template>
  <Styled :state="state">{{ render() }}</Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "TagComponent",
  components: {
    Styled,
  },
  methods: {
    render() {
      switch (this.state) {
        case "장애": {
          return "장애";
        }
        case "주의": {
          return "주의";
        }
        case "정상":
        default: {
          return "정상";
        }
      }
    },
  },
  props: {
    state: String,
  },
};
</script>

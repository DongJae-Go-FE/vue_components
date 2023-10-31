<template>
  <Styled :tabOn="tabOn" :headerKey="headerKey">
    <button type="button" @click="$emit('tabOnChange', headerKey)">
      {{ title }}
    </button>
  </Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "TabHeaderComponent",
  mounted() {},
  components: {
    Styled,
  },
  methods: {},
  props: {
    title: String,
    headerKey: Number,
    tabOn: Number,
  },
  data() {
    return {};
  },
};
</script>

<template>
  <Styled :tabOn="tabOn" :headerKey="headerKey">
    <button
      type="button"
      role="tab"
      @click="$emit('tabOnChange', headerKey)"
      :id="'tabCom' + headerKey"
      :aria-controls="'tab' + headerKey"
      :aria-selected="tabOn === headerKey ? true : false"
    >
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

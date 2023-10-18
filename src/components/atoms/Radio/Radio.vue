<template>
  <Styled :for="id">
    <input type="radio" :name="name" :id="id" :value="value" />
    <span>{{ value }}</span>
  </Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "RadioComponent",
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
    value: String,
    id: String,
    name: String,
  },
  data() {
    return {};
  },
};
</script>

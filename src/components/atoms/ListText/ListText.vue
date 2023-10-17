<template>
  <Styled>
    <li v-for="(data, i) in listData" :key="i">{{ data }}</li>
  </Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "ListTextComponent",
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
    listData: Object,
  },
  data() {
    return {};
  },
};
</script>

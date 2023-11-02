<template>
  <Styled>
    <ul>
      <ListItemTwoVue v-for="(data, i) in dummy" :key="i" :data="data" />
    </ul>
  </Styled>
</template>

<script>
import { dummy } from "@/data/dummy";
import ListItemTwoVue from "@/components/molecule/ListItemTwo/ListItemTwo.vue";
import Styled from "./styled";
export default {
  name: "RightAreaComponent",
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
    ListItemTwoVue,
  },
  methods: {},
  props: {},
  data() {
    return {
      dummy: dummy,
    };
  },
};
</script>

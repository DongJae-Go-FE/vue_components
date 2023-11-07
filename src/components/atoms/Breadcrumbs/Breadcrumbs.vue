<template>
  <Styled>
    <li v-for="(Data, i) in list" :key="i">
      <a :href="Data.path">{{ Data.title }}</a>
      <!--나중에 라우터로 교체 예정-->
    </li>
  </Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "BreadcrumbsComponent",
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
    list: Array,
  },
  data() {
    return {};
  },
};
</script>

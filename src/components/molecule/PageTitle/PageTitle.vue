<template>
  <Styled>
    <H2 :text="title" color="black" />
    <Breadcrumbs :list="list" />
  </Styled>
</template>

<script>
import Styled from "./styled";
import H2 from "../../atoms/H2/H2.vue";
import Breadcrumbs from "../../atoms/Breadcrumbs/Breadcrumbs.vue";
export default {
  name: "PageTitleComponent",
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
    H2,
    Breadcrumbs,
  },
  methods: {},
  props: {
    title: String,
    list: Array,
  },
  data() {
    return {};
  },
};
</script>

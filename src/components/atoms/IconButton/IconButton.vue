<template>
  <Styled type="button">
    <CloseSvg v-if="icon === 'close'" />
    <PeoplesSvg v-else-if="icon === 'peoples'" />
    <RssSvg v-else-if="icon === 'rss'" />
    <span>{{ iconText }}</span>
  </Styled>
</template>

<script>
import Styled from "./styled";
import CloseSvg from "./svg/CloseSvg";
import PeoplesSvg from "./svg/PeoplesSvg";
import RssSvg from "./svg/RssSvg";

export default {
  name: "IconButtonComponent",
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
    CloseSvg,
    PeoplesSvg,
    RssSvg,
  },
  methods: {},
  props: {
    icon: String,
    iconText: String,
  },
  data() {
    return {};
  },
};
</script>

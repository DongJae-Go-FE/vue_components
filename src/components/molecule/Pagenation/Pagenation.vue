<template>
  <Styled>
    <button type="button"><span>이전 버튼</span><LeftArrowSvg /></button>
    <div>
      <span>1</span>
      <span>/</span>
      <span>5</span>
    </div>
    <button type="button"><span>다음 버튼</span><LeftArrowSvg /></button>
  </Styled>
</template>

<script>
import LeftArrowSvg from "./LeftArrowSvg";
import Styled from "./styled";
export default {
  name: "PagenationComponent",
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
    LeftArrowSvg,
  },
  methods: {},
  props: {},
  data() {
    return {};
  },
};
</script>

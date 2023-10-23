<template>
  <Styled> 
    <div>
      <h4>타이틀</h4>
      <button type="button">닫기</button>
    </div>
    <div>
      콘텐츠
    </div>
    <div>
      닫기
    </div>
  </Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "ToastComponent",
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
  props: {},
  data() {
    return {};
  },
};
</script>

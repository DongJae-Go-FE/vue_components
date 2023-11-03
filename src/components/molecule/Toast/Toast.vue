<template>
  <Styled :state="state" role="alert">
    <div>
      <h4>{{ title }}</h4>
      <IconButton icon="close" color="white" />
    </div>
    <div>CPU, 부하량 서버가 ‘{{ state }}’ 상태입니다.</div>
    <div>
      <Button type="button" size="small" text="상세보기" />
    </div>
  </Styled>
</template>

<script>
import Styled from "./styled";
import IconButton from "@/components/atoms/IconButton/IconButton.vue";
import Button from "@/components/atoms/Button/Button.vue";
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
    IconButton,
    Button,
  },
  methods: {},
  props: {
    title: String,
    content: String,
    state: String,
  },
  data() {
    return {};
  },
};
</script>

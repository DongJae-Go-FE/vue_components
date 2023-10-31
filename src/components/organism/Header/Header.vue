<template>
  <Styled>
    <h1><LogoSvg /></h1>
    <div>
      <ul>
        <li><button type="button">통합관제</button></li>
        <li><button type="button">단지별관제</button></li>
      </ul>
      <div>
        <ul>
          <li><Button type="button" text="Data" size="small" color="gray01" /></li>
          <li><Button type="button" text="Maps" size="small" color="gray02" /></li>
        </ul>
        <IconButton icon="peoples" iconText="내정보 아이콘" />
      </div>
    </div>
  </Styled>
</template>

<script>
import Styled from "./styled";
import Button from "@/components/atoms/Button/Button.vue";
import IconButton from "@/components/atoms/IconButton/IconButton.vue";
import LogoSvg from "./LogoSvg";

export default {
  name: "HeaderComponent",
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
    LogoSvg,
    Button,
    IconButton,
  },
  methods: {},
  props: {},
  data() {
    return {};
  },
};
</script>

<template>
  <Styled>
    <h1><LogoSvg /></h1>
    <div>
      <ul>
        <li><TextButton text="통합관제" /></li>
        <li><TextButton text="단지별관제" /></li>
      </ul>
      <div>
        <ul>
          <li><Button text="Data" /></li>
          <li><Button text="Maps" /></li>
        </ul>
        <IconButton icon="peoples" iconText="내정보 아이콘" />
      </div>
    </div>
  </Styled>
</template>

<script>
import Styled from "./styled";
import Button from "@/components/atoms/Button/Button.vue";
import TextButton from "@/components/atoms/TextButton/TextButton.vue";
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
    TextButton,
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

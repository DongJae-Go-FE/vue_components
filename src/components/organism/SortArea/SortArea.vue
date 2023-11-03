<template>
  <Styled
    ><ul>
      <li><Button text="전체" size="large" color="green" /></li>
      <li><Button text="정상" size="large" color="gray02" /></li>
      <li><Button text="주의" size="large" color="gray02" /></li>
      <li><Button text="장애" size="large" color="gray02" /></li>
    </ul>
    <ul>
      <li><Dropdown :list="list" size="large"/></li>
      <li><Dropdown :list="list" size="large"/></li>
      <li><Dropdown :list="list" size="large"/></li>
      <li><Dropdown :list="list" size="large"/></li>
    </ul>
    <div>
      <SearchInput id="search" label="지역명 검색" placeholder="지역명을 검색하세요."/>
      <Dropdown :list="list" size="large"/>
    </div>
  </Styled>
</template>

<script>
import Styled from "./styled";
import Button from "@/components/atoms/Button/Button.vue";
import Dropdown from "@/components/atoms/Dropdown/Dropdown.vue";
import SearchInput from "@/components/atoms/SearchInput/SearchInput.vue";
export default {
  name: "SortAreaComponent",
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
    Button,
    Dropdown,
    SearchInput,
  },
  methods: {},
  props: {},
  data() {
    return {
      list: [{ title: "목록1" }, { title: "목록2" }, { title: "목록3" }],
    };
  },
};
</script>

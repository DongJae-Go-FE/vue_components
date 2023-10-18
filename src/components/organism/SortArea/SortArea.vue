<template>
  <Styled
    ><ul>
      <li><Button text="버튼" /></li>
      <li><Button text="버튼" /></li>
      <li><Button text="버튼" /></li>
      <li><Button text="버튼" /></li>
    </ul>
    <ul>
      <li><Dropdown :list="list" /></li>
      <li><Dropdown :list="list" /></li>
      <li><Dropdown :list="list" /></li>
      <li><Dropdown :list="list" /></li>
    </ul>
    <div>
      <SearchInput />
      <Dropdown :list="list" />
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

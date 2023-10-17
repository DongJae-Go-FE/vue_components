<template>
  <Styled>
    <SearchSvg />
    <label :for="id">{{ label }}</label>
    <input type="search" :id="id" :placeholder="placeholder" v-model="search" />
  </Styled>
</template>

<script>
import Styled from "./styled";
import SearchSvg from "./SearchSvg";
export default {
  name: "SearchInput",
  components: {
    Styled,
    SearchSvg,
  },
  methods: {},
  props: { id: String, label: String, placeholder: String }, 
  data() {
    return {
      search: null,
    };
  },
};
</script>

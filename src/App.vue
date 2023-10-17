<template>
  <Button type="button" text="테스트" />
  <Tag state="정상" />
  <Tag state="주의" />
  <Tag state="장애" />
  <Dropdown :list="list" />
  <Dropdown :list="list" />
  <TextButton type="button" text="테스트" />
  <SearchInput id="test" label="테스트" placeholder="검색어를 입력하세요." />
  <IconButton icon="close" />
  <IconButton icon="peoples" />
  <IconButton icon="rss" />
  <ListText :listData="list2" />
  <Dim />
</template>

<script>
import Button from "./components/atoms/Button/Button.vue";
import Tag from "./components/atoms/Tag/Tag.vue";
import TextButton from "./components/atoms/TextButton/TextButton.vue";
import SearchInput from "./components/atoms/SearchInput/SearchInput.vue";
import Dropdown from "./components/atoms/Dropdown/Dropdown.vue";
import Dim from "./components/atoms/Dim/Dim.vue";
import IconButton from "./components/atoms/IconButton/IconButton.vue";
import ListText from "./components/atoms/ListText/ListText.vue";
import "../src/assets/global.css";

export default {
  name: "App",
  components: {
    Button,
    Tag,
    TextButton,
    SearchInput,
    Dropdown,
    Dim,
    IconButton,
    ListText,
  },
  data() {
    return {
      list: [{ title: "목록1" }, { title: "목록2" }, { title: "목록3" }],
      list2: ["대외", "서울시 송파구", "2023년 9월 입주 (900세대)"],
    };
  },
};
</script>

<style></style>

<template>
  <Header />
  <Content>
    <LeftArea color="white" />
    <div>
      <SortArea />
      <div>
        <ul>
          <ListItem v-for="(data, i) in dummy" :key="i" :data="data" />
        </ul>
      </div>
    </div>
  </Content>
</template>

<script>
import Header from "./components/organism/Header/Header.vue";
import Content from "./components/organism/Content/Content.vue";
import LeftArea from "./components/organism/LeftArea/LeftArea.vue";
import SortArea from "./components/organism/SortArea/SortArea.vue";
import ListItem from "./components/molecule/ListItem/ListItem.vue";
import { dummy } from "../src/data/dummy";

import "../src/assets/global.css";

export default {
  name: "App",
  components: {
    Header,
    Content,
    LeftArea,
    SortArea,
    ListItem,
  },
  mounted() {},
  data() {
    return {
      list: [{ title: "목록1" }, { title: "목록2" }, { title: "목록3" }],
      list2: ["대외", "서울시 송파구", "2023년 9월 입주 (900세대)"],
      dummy: dummy,
    };
  },
};
</script>

<style></style>

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
  <RightArea />
  <Toast title="테스트" content="콘텐츠" state="주의" />
  <MeterArea />
  <MultiSlider />
  <Tab :data="tabData" />
  <HalfCircleMeter :value="50" />
</template>

<script>
import Header from "./components/organism/Header/Header.vue";
import Content from "./components/organism/Content/Content.vue";
import LeftArea from "./components/organism/LeftArea/LeftArea.vue";
import SortArea from "./components/organism/SortArea/SortArea.vue";
import ListItem from "./components/molecule/ListItem/ListItem.vue";
import RightArea from "./components/organism/RightArea/RightArea.vue";
import Toast from "./components/molecule/Toast/Toast.vue";
import MeterArea from "./components/molecule/MeterArea/MeterArea.vue";
import MultiSlider from "./components/atoms/MultiSlider/MultiSlider.vue";
import Tab from "./components/molecule/Tab/Tab.vue";
import HalfCircleMeter from "./components/atoms/HalfCircleMeter/HalfCircleMeter.vue";
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
    RightArea,
    Toast,
    MeterArea,
    MultiSlider,
    Tab,
    HalfCircleMeter,
  },
  mounted() {},
  data() {
    return {
      list: [{ title: "목록1" }, { title: "목록2" }, { title: "목록3" }],
      list2: ["대외", "서울시 송파구", "2023년 9월 입주 (900세대)"],
      dummy: dummy,
      tabData: [
        {
          key: "1",
          label: "Tab 1",
          children: "Content of Tab Pane 1",
        },
        {
          key: "2",
          label: "Tab 2",
          children: "Content of Tab Pane 2",
        },
        {
          key: "3",
          label: "Tab 3",
          children: "Content of Tab Pane 3",
        },
      ],
    };
  },
};
</script>

<style></style>

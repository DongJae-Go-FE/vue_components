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
  <HalfCircleMeter :value="90" />
  <Meter2 :value="90" />
  <Table2 :tableData="tableData" />
  <Table3 caption="테이블 설명" :header="header" :TableData="tabData2" />
  <PageTitle title="타이틀" :list="list3" />
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
import Meter2 from "./components/atoms/Meter2/Meter2.vue";
import Table2 from "./components/atoms/Table2/Table2.vue";
import Table3 from "./components/atoms/Table3/Table3.vue";
import PageTitle from "./components/molecule/PageTitle/PageTitle.vue";
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
    Meter2,
    Table2,
    Table3,
    PageTitle,
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
      tableData: [
        [
          {
            key: 1,
            title: "타이틀1",
            content: "테스트1",
          },
        ],
        [
          {
            key: 2,
            title: "타이틀2",
            content: "테스트2",
          },
          {
            key: 3,
            title: "타이틀3",
            content: "테스트3",
          },
        ],
        [
          {
            key: 4,
            title: "타이틀4",
            content: "테스트4",
          },
          {
            key: 5,
            title: "타이틀5",
            content: "테스트5",
          },
          {
            key: 6,
            title: "타이틀6",
            content: "테스트6",
          },
        ],
      ],
      header: [
        {
          key: 0,
          title: "지역",
          value: "region",
          width: "25%",
          style: { color: "#999999" },
        },
        {
          key: 1,
          title: "정상",
          value: "normal",
          width: "25%",
          style: { fontWeight: 700, color: "#34C759" },
        },
        {
          key: 2,
          title: "주의",
          value: "caution",
          width: "25%",
          style: { fontWeight: 700, color: "#FF9500" },
        },
        {
          key: 3,
          title: "장애",
          value: "obstacle",
          width: "25%",
          style: { fontWeight: 700, color: "#FF3b30" },
        },
      ],
      tabData2: [
        {
          region: "서울(29)",
          normal: 28,
          caution: 0,
          obstacle: 1,
        },
        {
          region: "경기(32)",
          normal: 31,
          caution: 1,
          obstacle: 0,
        },
        {
          region: "인천(13)",
          normal: 12,
          caution: 0,
          obstacle: 1,
        },
        {
          region: "부산(7)",
          normal: 7,
          caution: 0,
          obstacle: 0,
        },
        {
          region: "대구(8)",
          normal: 8,
          caution: 8,
          obstacle: 8,
        },
      ],
      list3: [
        { title: "HOME", path: "/path1" },
        { title: "1차 메뉴", path: "/path1/path2" },
        { title: "2차 메뉴", path: "path1/path2/path3" },
      ],
    };
  },
};
</script>

<style></style>

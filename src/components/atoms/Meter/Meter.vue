<template>
  <Styled :value="value">
    <div>
      <div v-if="lable === '네트워크'">
        <LinkCloudSvg />
        <p>네트워크<span>(ping)</span></p>
      </div>
      <div v-else-if="lable === '메모리'">
        <MemoryOneSvg />
        <p>메모리</p>
      </div>
      <div v-else-if="lable === 'cpu'">
        <CpuSvg />
        <p>CPU</p>
      </div>
      <div v-else-if="lable === '부하량'">
        <ChipSvg />
        <p>부하량</p>
      </div>
      <div>
        <p>
          {{ value }} <span>{{ unit }}</span>
        </p>
      </div>
    </div>
    <meter
      min="0"
      max="100"
      :low="low"
      :high="hugh"
      :optimum="optimum"
      :value="value"
    />
  </Styled>
</template>

<script>
import Styled from "./styled";
import LinkCloudSvg from "../IconTextButton/svg/LinkCloudSvg";
import MemoryOneSvg from "../IconTextButton/svg/MemoryOneSvg";
import CpuSvg from "../IconTextButton/svg/CpuSvg";
import ChipSvg from "../IconTextButton/svg/ChipSvg";
export default {
  name: "MeterComponent",
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
    LinkCloudSvg,
    MemoryOneSvg,
    CpuSvg,
    ChipSvg,
  },
  methods: {},
  props: {
    lable: String,
    value: Number,
    low: Number,
    high: Number,
    optimum: Number,
    unit: String,
  },
  data() {
    return {};
  },
};
</script>

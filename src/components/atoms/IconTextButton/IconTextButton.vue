<template>
  <Styled type="button" :iconState="iconState">
    <LinkCloudSvg v-if="icon === '네트워크'" />
    <ChipSvg v-if="icon === '메모리'" />
    <CpuSvg v-if="icon === 'CPU'" />
    <MemoryOneSvg v-if="icon === '부하량'" />
    {{ icon }}
  </Styled>
</template>

<script>
import LinkCloudSvg from "./svg/LinkCloudSvg";
import ChipSvg from "./svg/ChipSvg";
import CpuSvg from "./svg/CpuSvg";
import MemoryOneSvg from "./svg/MemoryOneSvg";
import Styled from "./styled";

export default {
  name: "IconTextButtonComponent",
  mounted() {},
  components: {
    Styled,
    LinkCloudSvg,
    ChipSvg,
    CpuSvg,
    MemoryOneSvg,
  },
  methods: {},
  props: {
    icon: String,
    iconState: String,
  },
  data() {
    return {};
  },
};
</script>

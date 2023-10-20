<template>
  <Styled :color="color">
    <H2 text="Smart Manage" color="black" />
    <Dropdown :list="list" size="large" />
    <H4 text="전체 현황" sub-text="(136)" color="black" />
    <!-- 리스트는 재사용 고민 -->
    <ul>
      <li>
        <div><CheckOneSvg />정상</div>
        <div>
          <p>
            시스템은 정상 작동 중이며,<br />
            모든 서비스 및 기능이 정상 작동 중입니다.
          </p>
          <p>128</p>
        </div>
      </li>
      <li>
        <div><AttentionSvg />주의</div>
        <div>
          <p>
            시스템에서 일부 문제가 감지되었으며,<br />
            모든 서비스 및 기능의 모니터링이 필요합니다.
          </p>
          <p>4</p>
        </div>
      </li>
      <li>
        <div><CloseOneSvg />장애</div>
        <div>
          <p>
            시스템에 중대한 문제가 발생하여,<br />
            모든 서비스 및 기능에 즉각 조치가 필요합니다.
          </p>
          <p>4</p>
        </div>
      </li>
    </ul>

    <p>ⓒ HDC Labs</p>
  </Styled>
</template>

<script>
import H2 from "../../atoms/H2/H2.vue";
import Dropdown from "@/components/atoms/Dropdown/Dropdown.vue";
import H4 from "../../atoms/H4/H4.vue";
import CheckOneSvg from "../LeftArea/svg/CheckOneSvg";
import AttentionSvg from "../LeftArea/svg/AttentionSvg";
import CloseOneSvg from "../LeftArea/svg/CloseOneSvg";
import Styled from "./styled";
export default {
  name: "LeftAreaComponent",
  mounted() {},
  components: {
    Styled,
    H2,
    Dropdown,
    H4,
    CheckOneSvg,
    AttentionSvg,
    CloseOneSvg,
  },
  methods: {},
  props: {
    color: String,
  },
  data() {
    return {
      list: [{ title: "목록1" }, { title: "목록2" }, { title: "목록3" }],
    };
  },
};
</script>

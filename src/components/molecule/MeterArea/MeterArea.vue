<template>
  <Styled>
    <Meter
      label="네트워크"
      :low="40"
      :high="80"
      :optimum="81"
      :value="30"
      unit="ms"
    />
    <Meter
      label="메모리"
      :low="40"
      :high="80"
      :optimum="81"
      :value="34"
      unit="%"
    />
    <Meter
      label="cpu"
      :low="40"
      :high="80"
      :optimum="81"
      :value="79"
      unit="%"
    />
    <Meter
      label="부하량"
      :low="40"
      :high="80"
      :optimum="81"
      :value="96"
      unit="%"
    />
  </Styled>
</template>

<script>
import Styled from "./styled";
import Meter from "../../atoms/Meter/Meter.vue";
export default {
  name: "MeterAreaComponent",
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
    Meter,
  },
  methods: {},
  props: {},
  data() {
    return {};
  },
};
</script>

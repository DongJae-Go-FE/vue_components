<template>
  <Styled>
    <Meter lable="네트워크" low="40" high="79" optimum="80" value="30" unit="ms"/>
    <Meter lable="메모리" low="40" high="79" optimum="80" value="34" unit="%"/>
    <Meter lable="cpu" low="40" high="79" optimum="80" value="78" unit="%"/>
    <Meter lable="부하량" low="40" high="79" optimum="80" value="96" unit="%"/>
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

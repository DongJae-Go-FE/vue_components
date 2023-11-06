<template>
  <Styled>
    <ul>
      <li v-for="(data, i) in tableData" :key="i">
        <div v-for="(sub, subKey) in data" :key="subKey">
          <div>
            {{ data[subKey].title }}
          </div>
          <div>{{ data[subKey].content }}</div>
        </div>
      </li>
    </ul>
  </Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "Table2Component",
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
  },
  methods: {},
  props: {
    caption: String,
    tableData: Array,
  },
  data() {
    return {};
  },
};
</script>

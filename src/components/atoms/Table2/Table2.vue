<template>
  <Styled>
    <caption>
      {{
        caption
      }}
    </caption>
    <tbody>
      <tr v-for="(data, i) in tableData" :key="i">
        <th>{{ data[0].title }}</th>
        <td>{{ data[0].content }}</td>
      </tr>
    </tbody>
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

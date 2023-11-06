<template>
  <Styled>
    <caption>
      {{
        caption
      }}
    </caption>
    <colgroup>
      <col
        v-for="(headerData, i) in header"
        :style="headerData.width"
        :key="i"
      />
    </colgroup>
    <thead>
      <tr>
        <th v-for="(headerData, i) in header" :key="i">
          {{ headerData.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(Data, i) in TableData" :key="i">
        <td v-for="SubData in headerKey()" :key="SubData + i">
          {{ Data[SubData] }}
        </td>
      </tr>
    </tbody>
  </Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "Table3Component",
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
  methods: {
    headerKey() {
      return this.header.map((Header) => Header.value);
    },
  },
  props: {
    caption: String,
    header: Array,
    TableData: Array,
  },
  data() {
    return {};
  },
};
</script>

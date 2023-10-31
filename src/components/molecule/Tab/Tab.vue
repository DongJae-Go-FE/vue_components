<template>
  <Styled>
    <ul>
      <TabHeader
        v-for="(data, i) in tabData"
        :key="i"
        :title="data.label"
        :headerKey="i"
        :tabOn="tabOn"
        @tabOnChange="tabOn = $event"
      />
    </ul>
    <div>
      <TabContent
        v-for="(data, i) in tabData"
        :key="i"
        :content="data.children"
        :tabOn="tabOn"
        :sub="i"
      />
    </div>
  </Styled>
</template>

<script>
import TabHeader from "./TabHeader/TabHeader.vue";
import TabContent from "./TabContent/TabContent.vue";
import Styled from "./styled";
export default {
  name: "TabComponent",
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
    TabHeader,
    TabContent,
  },
  methods: {},
  props: {
    data: Array,
  },
  data() {
    return {
      tabData: this.data,
      tabOn: 0,
    };
  },
};
</script>

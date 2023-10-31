<template>
  <Styled>
    <div>
      <div>
        <Tag :state="data.state" />
        <p>{{ data.title }}</p>
      </div>
      <IconButtom icon="rss" />
    </div>
    <ListText :listData="data.list" />
    <div>
      <ul>
        <li><IconTextButton icon="네트워크" :iconState="data.network" /></li>
        <li><IconTextButton icon="메모리" :iconState="data.memory" /></li>
        <li><IconTextButton icon="CPU" :iconState="data.cpu" /></li>
        <li><IconTextButton icon="부하량" :iconState="data.load" /></li>
      </ul>
      <div>
        <TextButton type="button" size="small" text="상세정보" />
        <TextButton type="button" size="small" text="단지관리" />
      </div>
    </div>
  </Styled>
</template>

<script>
import Tag from "../../atoms/Tag/Tag.vue";
import IconButtom from "../../atoms/IconButton/IconButton.vue";
import ListText from "@/components/atoms/ListText/ListText.vue";
import TextButton from "@/components/atoms/TextButton/TextButton.vue";
import IconTextButton from "../../atoms/IconTextButton/IconTextButton.vue";
import Styled from "./styled";
export default {
  name: "ListItemTwoComponent",
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
    Tag,
    IconButtom,
    ListText,
    TextButton,
    IconTextButton,
  },
  methods: {},
  props: {
    data: Object,
  },
  data() {
    return {};
  },
};
</script>

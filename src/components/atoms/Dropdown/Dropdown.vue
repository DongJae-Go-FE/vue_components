<template>
  <Styled
    v-click-outside="onClickOutside"
    ref="dorp"
    :size="size"
    :isDisabled="isDisabled"
    :listState="listState"
  >
    <button type="button" @click="listOpen" ref="btn">
      {{ title }} <DownSvg />
    </button>
    <Teleport to="body" v-if="listState === true">
      <ListStyled
        :size="size"
        :style="{
          position: 'absolute',
          top: `${comPosY + dropHeight + 4}px`,
          left: `${comPosX}px`,
          zIndex: `1000`,
        }"
      >
        <li v-for="(data, i) in list" :key="i" @click="listTitleChange(i)">
          <button type="button">
            {{ data.title }}
          </button>
        </li>
      </ListStyled>
    </Teleport>
  </Styled>
</template>

<script>
import Styled from "./styled";
import ListStyled from "./styledList";
import DownSvg from "./DownSvg";
import vClickOutside from "click-outside-vue3";
export default {
  name: "DropDown",
  directives: {
    clickOutside: vClickOutside.directive,
  },
  components: {
    Styled,
    ListStyled,
    DownSvg,
  },

  data() {
    return {
      title: this.list[0].title,
      listState: false,
      comPosX: 0,
      comPosY: 0,
      dropHeight: 0,
    };
  },
  mounted() {
    this.comPosY = this.$refs.dorp.$el.getBoundingClientRect().top;
    this.comPosX = this.$refs.dorp.$el.getBoundingClientRect().left;
    this.dropHeight = this.$refs.btn.clientHeight;
  },
  methods: {
    listOpen() {
      this.listState = !this.listState;
    },
    listTitleChange(i) {
      this.title = this.list[i].title;
      this.listState = false;
    },
    onClickOutside() {
      this.listState = false;
    },
  },
  props: {
    list: Array,
    size: String,
    isDisabled: Boolean,
  },
};
</script>

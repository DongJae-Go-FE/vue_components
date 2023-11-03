<template>
  <Styled>
    <input
      type="range"
      min="0"
      max="100"
      value="25"
      ref="inputLeft"
      id="leftRange"
    />
    <input
      type="range"
      min="0"
      max="100"
      value="75"
      ref="inputRight"
      id="RightRange"
    />
    <div>
      <div></div>
      <div ref="range"></div>
      <div ref="thumbLeft">
        <label for="leftRange">슬라이더 최소 수치 조절 레인지</label>
      </div>
      <div ref="thumbRight">
        <label for="RightRange">슬라이더 최대 수치 조절 레인지</label>
      </div>
      <div ref="rangeLeft"></div>
      <div ref="rangeRight"></div>
    </div>
  </Styled>
</template>

<script>
import Styled from "./styled";
export default {
  name: "MultiSliderComponent",
  mounted() {
    this.inputLeft = this.$refs.inputLeft;
    this.inputRight = this.$refs.inputRight;
    this.thumbLeft = this.$refs.thumbLeft;
    this.thumbRight = this.$refs.thumbRight;
    this.range = this.$refs.range;
    this.rangeLeft = this.$refs.rangeLeft;
    this.rangeRight = this.$refs.rangeRight;
    this.inputLeft.addEventListener("input", this.setLeftValue);
    this.inputRight.addEventListener("input", this.setRightValue);
  },
  components: {
    Styled,
  },
  methods: {
    setLeftValue() {
      const [min, max] = [
        parseInt(this.inputLeft.min),
        parseInt(this.inputLeft.max),
      ];
      this.inputLeft.value = Math.min(
        parseInt(this.inputLeft.value),
        parseInt(this.inputRight.value) - 2
      );
      const percent = ((this.inputLeft.value - min) / (max - min)) * 100;
      this.thumbLeft.style.left = percent + "%";
      this.range.style.left = percent + "%";
      this.rangeLeft.style.width = percent + "%";
    },
    setRightValue() {
      const [min, max] = [
        parseInt(this.inputRight.min),
        parseInt(this.inputRight.max),
      ];
      this.inputRight.value = Math.max(
        parseInt(this.inputRight.value),
        parseInt(this.inputLeft.value) + 2
      );
      const percent = ((this.inputRight.value - min) / (max - min)) * 100;
      this.thumbRight.style.right = 100 - percent + "%";
      this.range.style.right = 100 - percent + "%";
      this.rangeRight.style.width = 100 - percent + "%";
    },
  },
  props: {},
  data() {
    return {
      inputLeft: "",
      inputRight: "",
      thumbLeft: "",
      thumbRight: "",
      range: "",
    };
  },
};
</script>

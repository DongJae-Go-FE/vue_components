import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
//import { getColor } from "@/assets/colors";

const Styled = styled.div`
  position: relative;
  width: 296px;

  > div {
    position: relative;
    z-index: 1;
    height: 45px;

    div {
      height: 16px;
      &:nth-child(1) {
        height: 8px;
        position: absolute;
        z-index: 1;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 5px;
        background-color: #c6aee7;
      }

      &:nth-child(2) {
        height: 8px;
        position: absolute;
        z-index: 2;
        left: 25%;
        right: 25%;
        top: 0;
        bottom: 0;
        border-radius: 5px;
        background-color: #6200ee;
      }

      &:nth-child(3),
      &:nth-child(4) {
        position: absolute;
        z-index: 3;
        width: 6px;
        height: 16px;
        background-color: #6200ee;
        border-radius: 100px;
      }

      &:nth-child(3) {
        left: 25%;
        transform: translate(-15px, -10px);
      }
      &:nth-child(4) {
        right: 25%;
        transform: translate(15px, -10px);
      }
    }
  }
  input[type="range"] {
    position: absolute;
    pointer-events: none;
    -webkit-appearance: none;
    z-index: 2;
    height: 10px;
    width: 100%;
    opacity: 0;

    &::-webkit-slider-thumb {
      pointer-events: all;
      width: 30px;
      height: 30px;
      border-radius: 0;
      border: 0 none;
      background-color: red;
      cursor: pointer;
      -webkit-appearance: none;
    }
  }
`;

export default Styled;

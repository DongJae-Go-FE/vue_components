import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  width: 296px;
  margin: 20px 0;
  position: relative;

  > div {
    height: 8px;
    position: relative;
    z-index: 1;

    > div {
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
        background: linear-gradient(
          90deg,
          #ffbf66 0%,
          #ffb54d 25%,
          #fa3 51.56%,
          #ffa01a 75.52%,
          #ff9500 100%
        );
      }

      &:nth-child(3),
      &:nth-child(4) {
        width: 6px;
        height: 16px;
        position: absolute;
        z-index: 3;
        ${getColor("background-color", "white")};
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
        border-radius: 100px;
        transform: translateY(-5px);

        label {
          position: absolute;
          clip: rect(0 0 0 0);
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
        }
      }

      &:nth-child(3) {
        left: 25%;
      }
      &:nth-child(4) {
        right: 25%;
      }

      &:nth-child(5),
      &:nth-child(6) {
        width: 75px;
        height: 8px;
        position: absolute;
        z-index: 2;
        top: 0;
        bottom: 0;
      }
      &:nth-child(5) {
        left: 0;
        background: linear-gradient(
          90deg,
          #72ee90 0%,
          #5fe781 25%,
          #4edf72 51.56%,
          #3fd564 75.52%,
          #34c759 100%
        );
        border-radius: 2px 0px 0px 2px;
      }

      &:nth-child(6) {
        right: 0;
        background: linear-gradient(
          90deg,
          #ff9a94 0%,
          #ff817a 25%,
          #ff6961 50%,
          #ff5147 75%,
          #ff3b30 100%
        );
        border-radius: 0px 2px 2px 0px;
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
      width: 30px;
      height: 30px;
      border-radius: 0;
      border: 0 none;
      background-color: red;
      cursor: pointer;
      pointer-events: all;
      -webkit-appearance: none;
    }
  }
`;

export default Styled;

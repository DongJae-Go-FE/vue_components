import styled from "vue3-styled-components"; //{css}
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  display: flex;
  align-items: center;
  gap: 0 8px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: transparent;
    border: 1px solid;
    ${getColor("border-color", "gray200")};
    border-radius: 4px;
    cursor: pointer;

    &:nth-of-type(2) {
      transform: rotateY(180deg);
    }

    span {
      position: absolute;
      clip: rect(0 0 0 0);
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
    }
  }

  div {
    display: flex;
    align-items: center;

    span {
      ${typography.body03M};

      &:nth-child(1),
      &:nth-child(3) {
        display: flex;
        align-items: center;
        height: 24px;
        padding: 0 8px;
      }

      &:nth-child(2),
      &:nth-child(3){
        ${getColor("color", "gray500")};
      }
    }
  }
`;

export default Styled;

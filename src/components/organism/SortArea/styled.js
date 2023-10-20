import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;

  ul {
    display: flex;
    gap: 0 8px;
    margin-right: 31px;
    list-style: none;

    &:not(:last-child) {
      position: relative;
      &::after {
        content: "";
        display: block;
        width: 1px;
        height: 24px;
        position: absolute;
        top: 50%;
        right: -17px;
        transform: translateY(-50%);
        ${getColor("background-color", "gray100")};
      }
    }
  }
  > div {
    display: flex;
    align-items: center;
    gap: 0 8px;
    margin-left: auto;
  }
`;

export default Styled;

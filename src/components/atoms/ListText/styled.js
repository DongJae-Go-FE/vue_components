import styled from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.ul`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  li {
    position: relative;
    ${typography.body03M};
    ${getColor("color", "gray500")};

    &:not(:last-child) {
      margin-right: 10px;

      &::after{
        content: "";
        display: block;
        width: 1px;
        height: 10px;
        position: absolute;
        top: 50%;
        right: -5.5px;
        transform: translateY(-50%);
        ${getColor("background-color", "gray500")};
      }
    }
  }
`;

export default Styled;

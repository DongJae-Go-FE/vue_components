import styled from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";
import Right from "./right.png";

const Styled = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  li {
    position: relative;

    &:not(:last-child) {
      margin-right: 22px;

      &::after {
        content: "";
        display: block;
        width: 14px;
        height: 14px;
        position: absolute;
        top: 50%;
        right: -18px;
        transform: translateY(-50%);
        background: url(${Right}) no-repeat center;
      }
    }

    a {
      ${typography.body03M};
      ${getColor("color", "gray500")};
      text-decoration: none;
    }
  }
`;

export default Styled;

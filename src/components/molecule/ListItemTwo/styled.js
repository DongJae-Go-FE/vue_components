import styled from "vue3-styled-components"; //{css}
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.li`
  height: 111px;
  padding: 16px 16px 8px 16px;
  border-radius: 16px;
  ${getColor("background-color", "white")};
  box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.08);

  > div {
    &:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 3px;

      div {
        display: flex;
        align-items: center;
        gap: 0 8px;

        p {
          ${typography.body01B}
        }
      }
    }

    &:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 9px;
      padding-top: 8px;
      border-top: 1px solid;
      ${getColor("border-top-color", "gray100")}

      span {
        ${typography.body03M}
        ${getColor("color", "gray500")}
      }

      div {
        display: flex;
        align-items: center;
      }
    }
  }

  ul {
    display: flex;
    gap: 0 4px;
    list-style: none;

    &:nth-of-type(2) {
      margin-top: 19px;
    }
  }

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export default Styled;

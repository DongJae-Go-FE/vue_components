import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.li`
  button {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 224px;
    padding: 8px 24px;
    ${typography.body01M};
    ${getColor("background-color", "white")};
    border: none;
    cursor: pointer;
  }
  ${({ tabOn, headerKey }) => {
    if (tabOn === headerKey) {
      return css`
        button {
          position: relative;
          ${getColor("background-color", "gray100")};
          ${getColor("color", "gray900")};
          &::after {
            content: "";
            display: block;
            width: 2px;
            height: 100%;
            position: absolute;
            top: 0;
            right: -1.5px;
            ${getColor("background-color", "gray900")};
          }
        }
      `;
    } else {
      return css`
        button {
          ${getColor("color", "gray600")};
        }
      `;
    }
  }}
`;

export default Styled;

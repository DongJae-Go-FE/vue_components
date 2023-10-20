import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.h4`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  ${typography.heading04B}

  span {
    ${typography.heading04M}
    ${getColor("color", "gray500")}
  }

  ${({ color }) => {
    switch (color) {
      case "white":
        return css`
          ${getColor("color", "white")}
        `;
      case "black":
      default:
        return css`
          ${getColor("color", "black")}
        `;
    }
  }}
`;

export default Styled;

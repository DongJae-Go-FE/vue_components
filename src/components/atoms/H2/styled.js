import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.h2`
  margin-bottom: 32px;
  ${typography.heading02B}

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

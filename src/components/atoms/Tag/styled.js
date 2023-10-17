import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const StyledTag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  padding: 0 8px;
  border-radius: 4px;
  ${getColor("color", "white")};
  ${typography.body03M};

  ${({ state }) => {
    switch (state) {
      case "장애": {
        return css`
          ${getColor("background", "red500")};
        `;
      }
      case "주의": {
        return css`
          ${getColor("background", "orange500")};
        `;
      }
      case "정상":
      default: {
        return css`
          ${getColor("background", "green500")};
        `;
      }
    }
  }}
`;

export default StyledTag;

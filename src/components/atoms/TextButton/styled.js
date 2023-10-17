import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const StyledTag = styled.button`
  display: flex;
  align-items: center;
  padding: 0 8px;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 5px;
  }

  &:disabled {
    ${getColor("color", "gray200")};
    cursor: default;

    &:hover {
      text-decoration: none;
    }
  }

  ${({ size }) => {
    switch (size) {
      case "small": {
        return css`
          ${typography.body03M};
        `;
      }
      case "large": {
        return css`
          ${typography.body01M};
        `;
      }
      case "medium":
      default: {
        return css`
          ${typography.body02M};
        `;
      }
    }
  }}
`;

export default StyledTag;

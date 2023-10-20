import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const StyledDropDown = styled.div`
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 4px;

    border: 1px solid;
    ${getColor("border-color", "gray200")}
    ${getColor("background-color", "white")}

    svg {
      transition: 0.2s;
    }

    ${({ isDisabled }) => {
      if (isDisabled) {
        return css`
          ${getColor("color", "gray200")}

          cursor: default;

          svg {
            path {
              ${getColor("fill", "gray200")}
            }
          }
        `;
      } else {
        return css`
          ${getColor("color", "gray900")}

          cursor: pointer;
        `;
      }
    }}

    ${({ listState }) => {
      if (listState) {
        return css`
          svg {
            transform: rotate(-180deg);
          }
        `;
      } else {
        return css`
          svg {
            transform: rotate(0deg);
          }
        `;
      }
    }}

    ${({ size }) => {
      switch (size) {
        case "x-small":
          return css`
            padding: 0px 8px;
            height: 24px;
            border-radius: 4px;
            ${typography.body03R}
            svg {
              width: 12px;
              height: 12px;
            }
          `;
        case "small":
          return css`
            padding: 0px 8px;
            height: 32px;
            border-radius: 4px;
            ${typography.body02M}
            svg {
              width: 14px;
              height: 14px;
            }
          `;
        case "large":
          return css`
            justify-content: space-between;
            width: 128px;
            height: 48px;
            padding: 0px 16px;
            border-radius: 6px;
            ${typography.body01M}
            svg {
              width: 16px;
              height: 16px;
            }
          `;
        case "medium":
        default:
          return css`
            padding: 0px 16px;
            height: 40px;
            border-radius: 6px;
            ${typography.body02M}
            svg {
              width: 14px;
              height: 14px;
            }
          `;
      }
    }}
  }
`;

export default StyledDropDown;

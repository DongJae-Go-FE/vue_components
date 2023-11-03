import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const StyledDropDownList = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  padding: 4px 0;

  list-style-type: none;
  margin: 0;

  ${getColor("background", "white")}
  border: 1px solid;
  ${getColor("border-color", "gray200")}

  li {
    display: flex;
    align-items: center;
    button {
      width: 100%;
      height: 100%;
      border: none;
      text-align: left;
      cursor: pointer;

      ${getColor("color", "gray400")}
      ${getColor("background", "white")}

      &:hover {
        ${getColor("color", "gray900")}
        ${getColor("background", "gray100")}
      }
    }
  }

  ${({ size }) => {
    switch (size) {
      case "x-small":
        return css`
          border-radius: 4px;
          li {
            button {
              padding: 0 8px;
              height: 24px;
              ${typography.body03R}
            }
          }
        `;
      case "small":
        return css`
          border-radius: 4px;
          li {
            button {
              padding: 0 8px;
              height: 32px;
              ${typography.body02M}
            }
          }
        `;
      case "large":
        return css`
          width: 128px;
          border-radius: 6px;
          li {
            button {
              padding: 0 16px;
              height: 48px;
              ${typography.body01M}
            }
          }
        `;
      case "medium":
      default:
        return css`
          border-radius: 6px;
          li {
            button {
              padding: 0 16px;
              height: 40px;
              ${typography.body02M}
            }
          }
        `;
    }
  }}
`;

export default StyledDropDownList;

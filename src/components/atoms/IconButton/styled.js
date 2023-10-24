import styled, { css } from "vue3-styled-components"; //
//import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const IconButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;

  span {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  ${({ color }) => {
    switch (color) {
      case "white": {
        return css`
          svg {
            path {
              ${getColor("fill", "white")};
            }
          }
        `;
      }
      case "black":
      default: {
        return css`
          svg {
            path {
              ${getColor("fill", "black")};
            }
          }
        `;
      }
    }
  }}
`;

export default IconButtonStyled;

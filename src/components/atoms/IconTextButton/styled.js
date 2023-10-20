import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const IconButtonTextStyled = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0 8px;
  padding: 0 8px;
  ${typography.body03M}
  white-space: nowrap;
  //size 모름 캡슐
  border-radius: 100px;
  border: none;
  cursor: pointer;

  ${({ iconState }) => {
    switch (iconState) {
      case "장애": {
        return css`
          font-weight: bold;
          ${getColor("color", "red500")};
          background-color: rgba(255, 154, 148, 0.24);
          svg {
            path {
              ${getColor("fill", "red500")};
            }
          }
        `;
      }
      case "주의": {
        return css`
          font-weight: bold;
          ${getColor("color", "orange500")};
          background-color: rgba(255, 191, 102, 0.24);
          svg {
            path {
              ${getColor("fill", "orange500")};
            }
          }
        `;
      }
      case "정상":
      default: {
        return css`
          ${getColor("color", "gray700")};
          ${getColor("background-color", "gray100")};
          svg {
            path {
              ${getColor("fill", "gray700")};
            }
          }
        `;
      }
    }
  }}
`;

export default IconButtonTextStyled;

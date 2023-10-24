import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  width: 500px;
  height: 162px;
  padding: 24px;
  border-radius: 16px;
  ${({ state }) => {
    switch (state) {
      case "장애": {
        return css`
          ${getColor("background-color", "red500")};

          div{
            &:nth-child(3){
              button{
                ${getColor("background-color", "white")};
                ${getColor("color", "red500")};
                border: none;
              }
            }
          }
        `;
      }
      case "주의": {
        return css`
          ${getColor("background-color", "orange500")};

          div{
            &:nth-child(3){
              button{
                ${getColor("background-color", "white")};
                ${getColor("color", "orange500")};
                border: none;
              }
            }
          }
        `;
      }
      case "정상":
      default: {
        return css`
          ${getColor("background-color", "white")};
        `;
      }
    }
  }}

  div {
    ${getColor("color", "white")};
    &:nth-child(1) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 4px;

      h4 {
        ${typography.heading04B};
      }
    }

    &:nth-child(2) {
      height: 48px;
      ${typography.body01M};
    }
  }
`;

export default Styled;

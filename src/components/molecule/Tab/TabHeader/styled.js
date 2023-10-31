import styled, { css } from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
//import { getColor } from "@/assets/colors";

const Styled = styled.li`
  button {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 224px;
    padding: 8px 24px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
  ${({ tabOn, headerKey }) => {
    if (tabOn === headerKey) {
      return css`
        button {
          font-weight: bold;
        }
      `;
    } else {
      return css``;
    }
  }}
`;

export default Styled;

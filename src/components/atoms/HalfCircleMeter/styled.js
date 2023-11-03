import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  width: 139px;
  position: relative;
  background-color: lightgray; // 임시 배경색
  svg {
    height: 70px;
    path {
      ${getColor("stroke", "white")}
    }
  }

  > div {
    display: flex;
    align-items: center;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 48px;
    gap: 0 4px;
    ${typography.heading02M}

    ${({ value }) => {
      if (79 < value) {
        return css`
          ${getColor("color", "red500")};
        `;
      } else if (40 < value) {
        return css`
          ${getColor("color", "orange500")};
        `;
      } else {
        return css`
          ${getColor("color", "green500")};
        `;
      }
    }}

    span {
      position: relative;
      top: 5px;
      ${getColor("color", "gray500")}
      ${typography.body02M}
    }
  }
`;

export default Styled;

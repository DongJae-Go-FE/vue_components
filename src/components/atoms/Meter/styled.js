import styled, { css } from "vue3-styled-components"; //{css}
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.li`
  padding-bottom: 16px;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
      display: flex;
      align-items: center;
      gap: 0 4px;
      svg {
        width: 14px;
        height: 14px;
        path {
          ${getColor("fill", "gray500")};
        }
      }
      > p {
        ${typography.body02M};
        ${getColor("color", "gray500")};

        > span {
          ${typography.body04R};
        }
      }

      &:nth-child(2) {
        p {
          ${({ value }) => {
            if (79 < Number(value)) {
              return css`
                ${getColor("color", "red500")};
              `;
            } else if (40 < Number(value)) {
              return css`
                ${getColor("color", "orange500")};
              `;
            } else {
              return css`
                ${getColor("color", "green500")};
              `;
            }
          }}
        }

        span {
          ${getColor("color", "gray500")};
        }
      }
    }
  }
  meter {
    width: 100%;
    height: 20px;

    &::-webkit-meter-bar {
      border: none;
      border-radius: 100px;
      ${getColor("background-color", "gray200")};
    }

    &::-webkit-meter-even-less-good-value {
      ${getColor("background-color", "green500")};
    }
    &::-webkit-meter-suboptimum-value {
      ${getColor("background-color", "orange500")};
    }
    &::-webkit-meter-optimum-value {
      ${getColor("background-color", "red500")};
    }
  }

  &:not(:last-child) {
    margin-bottom: 16px;
    border-bottom: 1px solid;
    ${getColor("border-bottom-color", "gray200")};
  }
`;

export default Styled;

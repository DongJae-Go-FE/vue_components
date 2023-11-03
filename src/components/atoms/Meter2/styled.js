import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  > div {
    &:nth-child(1) {
      display: flex;
      align-items: center;
      gap: 0 4px;

      p {
        ${typography.heading02M}

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
        ${typography.body02M}
        ${getColor("color", "gray500")}
      }
    }

    &:nth-child(2) {
      width: 152px;
      height: 16px;
      position: relative;

      meter {
        width: 100%;
        height: 8px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);

        &::-webkit-meter-bar {
          border: none;
          border-radius: 44px;
          ${({ value }) => {
            if (79 < Number(value)) {
              return css`
                background: linear-gradient(
                  90deg,
                  #ff9a94 0%,
                  #ff817a 25%,
                  #ff6961 50%,
                  #ff5147 75%,
                  #ff3b30 100%
                );
              `;
            } else if (40 < Number(value)) {
              return css`
                background: linear-gradient(
                  90deg,
                  #ffbf66 0%,
                  #ffb54d 25%,
                  #fa3 51.56%,
                  #ffa01a 75.52%,
                  #ff9500 100%
                );
              `;
            } else {
              return css`
                background: linear-gradient(
                  90deg,
                  #72ee90 0%,
                  #5fe781 25%,
                  #4edf72 51.56%,
                  #3fd564 75.52%,
                  #34c759 100%
                );
              `;
            }
          }}
        }

        &::-webkit-meter-even-less-good-value,
        &::-webkit-meter-suboptimum-value,
        &::-webkit-meter-optimum-value {
          background: transparent;
        }
      }

      > label {
        display: block;
        width: 8px;
        height: 8px;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        ${getColor("background-color", "white")}
        border-radius: 8px;
        border: 2px solid #333;

        span {
          position: absolute;
          clip: rect(0 0 0 0);
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
        }
      }
    }
  }
`;

export default Styled;
``;

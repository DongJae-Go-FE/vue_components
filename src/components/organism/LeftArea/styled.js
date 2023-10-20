import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  display: flex;
  flex-direction: column;
  width: 440px;
  height: calc(100vh - 128px);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.1);

  ${({ color }) => {
    switch (color) {
      case "white":
        return css`
          ${getColor("background-color", "white")};
        `;
      case "black":
      default:
        return css`
          ${getColor("background-color", "black")};
        `;
    }
  }}

  > div {
    margin-bottom: 64px;
    button {
      width: 100%;
    }
  }

  > ul {
    list-style: none;

    li {
      width: 100%;
      height: 154px;

      div {
        display: flex;
        align-items: center;
        width: 100%;
        &:nth-child(1) {
          height: 62px;
          padding: 19px 24px;
          ${typography.heading04B}
          border-radius: 16px 16px 0 0;
          ${getColor("background-color", "gray200")};
          ${getColor("color", "gray500")}
          gap: 8px;
        }

        &:nth-child(2) {
          height: 92px;
          justify-content: space-between;
          padding: 25px 24px;
          border-radius: 0 0 16px 16px;
          ${getColor("background-color", "gray100")};

          p {
            &:nth-child(1) {
              ${typography.body02M}
              ${getColor("color", "gray500")}
            }

            &:nth-child(2) {
              ${typography.heading01B}
            }
          }
        }
      }

      &:not(:last-child) {
        margin-bottom: 16px;
      }

      &:nth-child(1) {
        div {
          &:nth-child(2) {
            p {
              &:nth-child(2) {
                ${getColor("color", "green500")};
              }
            }
          }
        }
      }
      &:nth-child(2) {
        div {
          &:nth-child(2) {
            p {
              &:nth-child(2) {
                ${getColor("color", "orange500")};
              }
            }
          }
        }
      }
      &:nth-child(3) {
        div {
          &:nth-child(2) {
            p {
              &:nth-child(2) {
                ${getColor("color", "red500")};
              }
            }
          }
        }
      }
    }
  }

  > p {
    margin-top: auto;
    ${typography.body01M}
    ${getColor("color", "gray500")}
  }
`;

export default Styled;

import styled from "vue3-styled-components"; //{css}
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.header`
  display: flex;
  align-items: center;
  gap: 0 24px;
  width: 100%;
  height: 80px;
  padding: 0 40px 0 32px;
  border-bottom: 1px solid;
  ${getColor("border-bottom-color", "gray200")};

  h1 {
    width: 240px;
    height: 100%;

    svg {
      height: 100%;
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: calc(100% - 171px);
    height: 100%;

    ul {
      display: flex;
      align-items: center;
      list-style: none;
    }

    > ul {
      &:nth-child(1) {
        > li {
          height: 100%;
          button {
            height: 100%;
            padding: 25px 32px;
            background-color: transparent;
            border: none;
            ${typography.heading04B};
            ${getColor("color", "gray400")};
            cursor: pointer;
          }
        }
      }
    }

    > div {
      display: flex;
      align-items: center;
      gap: 0 24px;

      ul {
        gap: 0 8px;
      }
    }
  }
`;

export default Styled;

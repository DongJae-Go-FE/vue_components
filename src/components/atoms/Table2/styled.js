import styled from "vue3-styled-components"; //{css}
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  ul {
    list-style: none;
    li {
      display: flex;
      > div {
        width: 100%;
        display: flex;
        align-items: center;
        > div {
          padding: 10px 15px;
          ${typography.body02M}
          &:nth-child(odd) {
            width: 130px;
            ${getColor("color", "gray900")}
          }
          &:nth-child(even) {
            width: calc(100% - 130px);
            ${getColor("color", "gray600")}
          }
        }
      }
    }
  }
`;

export default Styled;

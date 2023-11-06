import styled from "vue3-styled-components"; //{css}
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.table`
  table-layout: fixed;
  border-collapse: collapse;
  caption {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
  thead {
    tr {
      th {
        padding: 10px 16px;
        ${typography.body02M}
        text-align: center;
        ${getColor("color", "gray500")};
        border-bottom: 1px solid;
        ${getColor("border-bottom-color", "gray200")};
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 10px 16px;
        ${typography.body02M}
        text-align: center;
        border-bottom: 1px solid;
        ${getColor("border-bottom-color", "gray200")};
      }
    }
  }
`;

export default Styled;

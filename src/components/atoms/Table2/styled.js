import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
//import { getColor } from "@/assets/colors";

const Styled = styled.table`
  caption {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
  tbody{
    tr{
      th, td{
        padding: 10px 16px;
      }
      th{
        width: 130px;
      }
      td{
        width: calc(100% - 130px);
      }
    }
  }
`;

export default Styled;

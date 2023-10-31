import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  display: flex;
  height: 200px;

  ul {
    list-style: none;
    border-right: 1px solid;
    ${getColor("border-right-color", "gray200")};
  }

  > div {
    width: calc(100% - 224px);
  }
`;

export default Styled;

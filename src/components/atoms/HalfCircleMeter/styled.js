import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  width: 139px;
  background-color: red;
  path {
    ${getColor("stroke", "white")}
  }
`;

export default Styled;

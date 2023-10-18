import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  width: 440px;
  height: 100%;
  border-radius: 16px;
  box-shadow: 0px 1px 12px 0px rgba(0, 0, 0, 0.10);
  ${getColor("background-color", "black")};
`;

export default Styled;

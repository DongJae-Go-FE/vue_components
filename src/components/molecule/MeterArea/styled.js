import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.ul`
  width: 410px;
  padding: 20px;
  border-radius: 8px;
  ${getColor("background-color", "white")};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
  list-style: none;
`;

export default Styled;

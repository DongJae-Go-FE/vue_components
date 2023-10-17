import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
//import { getColor } from "@/assets/colors";

const IconButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  
  span {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }
`;

export default IconButtonStyled;

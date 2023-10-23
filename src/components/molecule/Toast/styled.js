import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
//import { getColor } from "@/assets/colors";

const Styled = styled.div`
  width: 500px;
  height: 162px;
  padding: 24px;
  border-radius: 16px;

  div{
    &:nth-child(1){
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export default Styled;

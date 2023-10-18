import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
//import { getColor } from "@/assets/colors";

const Styled = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;

  ul {
    display: flex;
    gap: 0 8px;
    margin-right: 33px;
    list-style: none;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 0 8px;
  }
`;

export default Styled;

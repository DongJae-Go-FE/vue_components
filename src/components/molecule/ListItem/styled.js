import styled from "vue3-styled-components"; //{css}
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.li`
  height: 179px;
  padding: 16px 16px 8px 16px;
  border-radius: 16px;
  ${getColor("background-color", "white")};
  box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.08);

  > div {
    &:nth-child(1) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 4px;
    }

    &:nth-of-type(2){
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 8px;
      padding-top: 8px;
      border-top: 1px solid;
      ${getColor("border-top-color", "gray100")}

      span{
        ${typography.body03M}
        ${getColor("color", "gray500")}
      }

      div{
        display: flex;
        align-items: center;
      }
    }
  }

  p {
    margin-bottom: 4px;
    ${typography.body01B}
  }

  ul{
    display: flex;
    gap: 0 4px;
    list-style: none;

    &:nth-of-type(2){
      margin-top: 19px;
    }
  }
`;

export default Styled;

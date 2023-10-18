import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  display: flex;
  gap: 0 24px;
  width: 100%;
  height: 100vh;
  padding: 24px;
  ${getColor("background-color", "gray100")};

  > div {
    display: flex;
    flex-wrap: wrap;
    gap: 0 20px;

    &:nth-child(2){
      width: calc(100% - 464px);
    }

    > div {
      &:nth-child(2) {
        > ul {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          width: 100%;
          height: 100%;

          list-style: none;

          li {
            width: 340px;
            height: 179px;
            border-radius: 16px;
            ${getColor("background-color", "white")};
            box-shadow: 0px 0px 48px 0px rgba(0, 0, 0, 0.08);
          }
        }
      }
    }
  }
`;

export default Styled;

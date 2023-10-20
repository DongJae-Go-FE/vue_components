import styled from "vue3-styled-components"; //{css}
//import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.div`
  display: flex;
  gap: 0 24px;
  width: 100%;
  height: auto;
  padding: 24px;
  ${getColor("background-color", "gray100")};

  > div {
    &:nth-child(2) {
      display: flex;
      flex-wrap: wrap;
      gap: 20px 0;
      align-content: baseline;
      width: calc(100% - 464px);
    }

    > div {
      width: 100%;
      &:nth-child(2) {
        > ul {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          width: 100%;
          height: 100%;

          list-style: none;

        }
      }
    }
  }
`;

export default Styled;

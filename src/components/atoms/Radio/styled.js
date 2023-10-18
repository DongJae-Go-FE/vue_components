import styled from "vue3-styled-components"; //{css}
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 0 4px;
  cursor: pointer;

  input {
    cursor: pointer;
    &[type="radio"] {
      appearance: none;
      width: 14px;
      height: 14px;
      border: 1px solid;
      ${getColor("border-color", "gray900")};
      border-radius: 100%;

      &:checked {
        position: relative;

        &::after {
          content: "";
          display: block;
          width: 8px;
          height: 8px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 100%;
          ${getColor("background-color", "gray900")};
        }
      }
    }
  }

  span {
    ${typography.body03R};
    ${getColor("color", "black")};
  }

  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export default Styled;

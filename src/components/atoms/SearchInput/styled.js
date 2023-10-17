import styled from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid;
  ${getColor("border-bottom-color", "gray200")}

  svg {
    width: 24px;
    height: 24px;
  }

  label {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  input {
    padding: 0 8px;
    border: none;
    outline: none;

    &::placeholder,
    &::-webkit-input-placeholder,
    &:-ms-input-placeholder {
      ${typography.body01M};
    }

    &::-webkit-search-decoration,
    &::-webkit-search-cancel-button,
    &::-webkit-search-results-button,
    &::-webkit-search-results-decoration {
      display: none;
    }
  }
`;

export default StyledTag;

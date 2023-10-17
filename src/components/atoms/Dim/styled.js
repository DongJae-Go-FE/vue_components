import styled from "vue3-styled-components";
import { getColor } from "@/assets/colors";

const StyledDim = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  ${getColor("background-color", "grayDimmedEffectBlack70D")}
`;

export default StyledDim;

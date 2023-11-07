import styled, { css } from "vue3-styled-components";
import { typography } from "@/assets/typography";
import { getColor } from "@/assets/colors";

const Styled = styled.table`
  margin-bottom: 33px;
  border-collapse: collapse;
  table-layout: fixed;

  caption {
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  }

  thead {
    tr {
      th {
        padding: 10px 16px;
        ${typography.body02M}
        text-align: center;
        border-bottom: 1px solid;
        ${getColor("border-bottom-color", "gray200")};
      }
    }
  }

  tbody {
    tr {
      td {
        padding: 10px 16px;
        ${typography.body02M}
        text-align: center;
        border-bottom: 1px solid;
      }
    }
  }

  ${({ type }) => {
    switch (type) {
      case "type2": {
        return css`
          thead {
            tr {
              th {
                ${getColor("color", "gray500")};
              }
            }
          }
          tbody {
            tr {
              td {
                ${getColor("color", "gray500")};
                ${getColor("border-bottom-color", "gray200")};
              }
            }
          }
        `;
      }
      case "type1":
      default: {
        return css`
          border-top: 1px solid;
          ${getColor("border-top-color", "gray200")};
          thead {
            tr {
              th {
                ${getColor("color", "gray800")};
              }
            }
          }

          tbody {
            tr {
              td {
                ${getColor("color", "gray800")};
                ${getColor("border-bottom-color", "gray100")};
              }

              &:last-child {
                td {
                  ${getColor("border-bottom-color", "gray200")};
                }
              }
            }
          }
        `;
      }
    }
  }}
`;

export default Styled;

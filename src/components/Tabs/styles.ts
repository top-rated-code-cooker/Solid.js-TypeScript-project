import { styled } from "solid-styled-components";

export const TabPane = styled("ul")`
  display: flex;
  width: 100%;
  list-style-type: none;
  border-bottom: 1px solid #2f2b2b;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    color: #717070;
    cursor: pointer;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 16px;
    margin-right: 30px;
    padding: 16px 5px;
    padding-left: 0;
    transition: 0.3s all;

    &:before {
      position: absolute;
      content: "";
      height: 2px;
      width: 100%;
      bottom: -4px;
      transition: 0.3s all;
    }

    &:hover {
      color: ${({ theme }) => theme?.colors?.primaryText};
    }

    &.selected {
      color: ${({ theme }) => theme?.colors?.primaryText};
      transition: 0.3s ease-in;

      &:before {
        bottom: -1px;
        background-color: ${({ theme }) => theme?.colors?.primaryText};
      }
    }
  }
`;

export const TabContent = styled("div")``;

import { styled } from "solid-styled-components";

const PlusIcon = styled("i")`
  position: relative;
  background-color: ${({ color }: any) => color};
  width: 10px;
  height: 2px;

  &,
  &::after {
    display: block;
    box-sizing: border-box;
    background-color: ${({ color }: any) => color};
    border-radius: 10px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 10px;
    margin: auto;
    left: 0;
    top: 0;
    right: 0px;
    bottom: 0;
  }
`;

export default PlusIcon;

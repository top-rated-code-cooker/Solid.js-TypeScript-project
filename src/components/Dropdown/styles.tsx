import { styled } from "solid-styled-components";

const Wrapper: any = styled("div")`
  &.dropdown {
    position: relative;
  }
`;

export const DropdownMenu = styled("div")`
  position: absolute;
  min-width: 100px;
  top: 28px;
  left: ${({ position }: any) => (position === "left" ? "0" : "auto")};
  right: ${({ position }: any) => (position === "right" ? "0" : "auto")};
  box-shadow: 0px 2px 10px 2px rgb(0 0 0 / 25%);
  z-index: 9;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 3px;
`;

export const MenuWrapper = styled("div")`
  color: ${({ theme }) => theme.colors.inActive};
  cursor: pointer;
  padding: 8px 10px;

  &:hover {
    background: ${({ theme }) => theme.colors.grey};
    color: ${({ theme }) => theme.colors.primaryText};
  }
`;

export default Wrapper;

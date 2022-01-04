import { Component } from "solid-js";
import { MenuWrapper } from "./styles";

const DropdownMenu: Component<any> = (props) => (
  <MenuWrapper onClick={props.onClick}>{props?.children}</MenuWrapper>
);

export default DropdownMenu;

import { Component } from "solid-js";
import { styled } from "solid-styled-components";

const Wrapper: any = styled("tr")`
  cursor: default !important;
  background-color: transparent !important;

  td {
    font-size: 14px;
    color: ${(props) => props.theme.colors.inActive} !important;
    cursor: auto !important;
    font-weight: 500 !important;
    text-align: center !important;
    padding: 60px 15px !important;
  }

  .icon-inbox {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 30px;
    height: 30px;
    border: 2px solid;
    box-shadow: inset 0 -2px 0 0;
    border-radius: 3px;
    margin: auto;
    margin-bottom: 20px;
  }
  .icon-inbox::after,
  .icon-inbox::before {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    background: currentColor;
    height: 9px;
    width: 9px;
    border-radius: 2px;
    bottom: -2px;
  }
  .icon-inbox::before {
    left: -2px;
  }
  .icon-inbox::after {
    right: -2px;
  }
`;

const EmptyState = (props: any) => (
  <Wrapper>
    <td colSpan={props?.colSpan}>
      <div>
        <i className="icon-inbox" />
        {props.children}
      </div>
    </td>
  </Wrapper>
);

export default EmptyState;

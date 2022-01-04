import { styled } from "solid-styled-components";

export default styled("i")`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: auto;
  padding: 25px 0;

  &:after {
    content: " ";
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

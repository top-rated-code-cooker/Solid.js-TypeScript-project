import { Component, Show } from "solid-js";
import { styled } from "solid-styled-components";
import LoadingIcon from "./LoadingIcon";

const Wrapper = styled("div")`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  z-index: 999;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.5s all;

  .para {
    color: ${(props) => props.theme.colors.primaryText};
  }
`;

const DefaultLoading = () => (
  <div className="loading--wrapper">
    <div className="loading--icon">
      <LoadingIcon />
    </div>
    <p className="para">Loading data...</p>
  </div>
);

const LoadingState: Component<any> = (props) => (
  <Wrapper>
    <Show when={props.children} fallback={<DefaultLoading />}>
      {props.children}
    </Show>
  </Wrapper>
);

export default LoadingState;

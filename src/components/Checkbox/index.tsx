import { Component, Show } from "solid-js";
import CheckboxGroup from "./Group";
import Wrapper from "./styles";

const Checkbox: Component<any> = (props: any) => {
  return (
    <Wrapper inline={props.inline}>
      <label
        className={`container ${props.disabled ? "checkbox--disabled" : ""}`}
      >
        <input type="checkbox" {...props} />
        <span class="checkmark"></span>
        <Show when={props.label}>{props.label}</Show>
      </label>
    </Wrapper>
  );
};

export { CheckboxGroup };
export default Checkbox;

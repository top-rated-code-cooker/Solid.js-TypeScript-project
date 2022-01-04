import { Component, Show } from "solid-js";
import RadioGroup from "./Group";
import RadioWrapper from "./styles";

const Radio: Component<any> = (props) => {
  const { label, labelPosition = "right", className, ...rest } = props;

  return (
    <RadioWrapper
      className={`radio ${className || ""} ${
        rest.disabled ? "radio--disabled" : ""
      }`}
    >
      <Show when={labelPosition !== "right"}>{props.label}</Show>
      <input
        {...rest}
        type="radio"
        id={label}
        className={`${props.checked ? "input--active" : ""}`}
      />
      <span className={`checkmark`}></span>
      <Show when={labelPosition === "right"}>{props.label}</Show>
    </RadioWrapper>
  );
};

export { RadioGroup };
export default Radio;

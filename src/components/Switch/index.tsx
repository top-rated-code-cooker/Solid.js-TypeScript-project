import { Component, Show } from "solid-js";
import SwitchWrapper from "./styles";

const Switch: Component<any> = (props) => {
  const {
    style,
    size,
    checkedLabel,
    unCheckedLabel,
    className,
    ...rest
  } = props;
  return (
    <SwitchWrapper
      className={`${className || ""} switch--${size || "sm"} ${
        props.checked ? "switch--checked" : "switch--unchecked"
      } ${props.disabled ? "disabled" : ""}`}
      style={style}
    >
      <Show when={unCheckedLabel}>
        <div className="label--unchecked">{unCheckedLabel}</div>
      </Show>
      <input type="checkbox" {...rest} checked={props.checked} />
      <span className={`slider round`}></span>
      <Show when={checkedLabel}>
        <div className="label--checked">{checkedLabel}</div>
      </Show>
    </SwitchWrapper>
  );
};

export default Switch;

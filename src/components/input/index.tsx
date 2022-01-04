import { Show, Component } from "solid-js";
import InputWrapper from "./styles";

// interface IInputProps {
//   label?: any;
//   placeholder?: any;
// }

const Input: Component<any> = (props) => {
  const { iconLeft, iconRight, size, label, ...rest } = props;
  return (
    <InputWrapper iconLeft={!!iconLeft} iconRight={!!iconRight}>
      <Label label={label} />
      <div className={`input--wrapper input--${size}`}>
        <Icon icon="left">{iconLeft}</Icon>
        <input type="text" {...rest} />
        <Icon icon="right">{iconRight}</Icon>
      </div>
    </InputWrapper>
  );
};

const Icon: any = (props: any) => (
  <Show when={props.children}>
    <span className={`icon icon--${props.icon}`}>{props.children}</span>
  </Show>
);

const Label: any = (props: any) => (
  <Show when={props.label}>
    <label className="input--label">{props.label}</label>
  </Show>
);

export default Input;

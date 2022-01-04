import { Component, For } from "solid-js";
import Checkbox from ".";

const Group: Component<any> = (props) => {
  return (
    <div onChange={props.onChange} className={props.className || ""}>
      <For each={props.options}>
        {(option: any) => (
          <Checkbox
            value={option.value}
            checked={props.values.includes(option.value)}
            label={option.label}
            inline={props.inline}
            disabled={option.disabled}
          />
        )}
      </For>
    </div>
  );
};

export default Group;

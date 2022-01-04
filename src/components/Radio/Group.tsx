import { Component, createComputed, createSignal } from "solid-js";
import { styled } from "solid-styled-components";

const Wrapper: any = styled("div")`
  &.inline {
    display: flex;

    .radio {
      padding-right: 20px;
    }
  }
`;

const RadioGroup: Component<any> = (props) => {
  const [items, setItems] = createSignal(props.children);

  createComputed(() => {
    setItems(
      props.children.map((item: any) => {
        if (item.firstChild.tagName === "INPUT") {
          item.firstChild.checked = item.firstChild.value === props.selected;
          item.firstChild.value === props.selected
            ? item.firstChild.classList.add("input--active")
            : item.firstChild.classList.remove("input--active");
        } else {
          item.lastChild.checked = item.lastChild.value === props.selected;
          item.lastChild.value === props.selected
            ? item.lastChild.classList.add("input--active")
            : item.lastChild.classList.remove("input--active");
        }
        return item;
      })
    );
  });

  const onChange = (e: any) => {
    props.onChange && props.onChange(e.target.value, e);
  };

  return (
    <Wrapper onChange={onChange} className={`${props.inline ? "inline" : ""}`}>
      {items}
    </Wrapper>
  );
};

export default RadioGroup;

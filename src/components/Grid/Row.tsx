import { Component } from "solid-js";

const Row: Component<any> = (props: any) => {
  return (
    <div className={`flex ${props.className || ''}`}>
      {props.children}
    </div>
  )
};

export default Row;

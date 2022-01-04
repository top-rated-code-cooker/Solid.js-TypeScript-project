import { Component } from 'solid-js';

const Column: Component<any> = (props) => {
  return (
    <div className={`${props.className || ''}`}>
      {props.children}
    </div>
  )
}

export default Column;

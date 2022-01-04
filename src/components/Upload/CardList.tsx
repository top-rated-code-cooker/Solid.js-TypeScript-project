import { Component } from 'solid-js';

const CardList: Component<any> = (props) => (
  <div className="card--item">
    <img src={props.imgSrc} />
    <span className="delete--icon" onClick={props.onDelete}>
      X
    </span>
  </div>
)

export default CardList;

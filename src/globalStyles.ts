import { glob } from "solid-styled-components";

export default glob`
html,
body {
  background: #262323;
  font-family: 'Inter', sans-serif;
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

.line {
  fill: none;
  stroke: #ffab00;
  stroke-width: 3;
}
  
.overlay {
  fill: none;
  pointer-events: all;
}

.dot {
  fill: #ffab00;
  stroke: #fff;
  height: 100px;
}
  
.focus {
  fill: #fff;
  stroke: steelblue;
  cursor: pointer;
}

.btn--wrap {
  > button {
    margin-right: 10px;
  }
}
`;

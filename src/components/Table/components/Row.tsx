import { Component, For } from "solid-js";
import Cell from "./Cell";

interface IRowProps {
  headers: any[];
  row: any;
  isSelected: boolean;
  toggleRow: Function;
}

const Row: Component<IRowProps> = (props: any) => (
  <tr className={props.isSelected ? "active" : ""}>
    <For each={props.headers}>
      {(column) => (
        <Cell
          row={props.row}
          column={column}
          isSelected={props.isSelected}
          toggleRow={props.toggleRow}
        />
      )}
    </For>
  </tr>
);

export default Row;

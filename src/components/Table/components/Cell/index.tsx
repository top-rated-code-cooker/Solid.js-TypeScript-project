import { Component, createComputed, onMount, Show } from "solid-js";
import Td from "./styles";

interface ICellProps {
  column: any;
  row: any;
  isSelected: boolean;
  toggleRow: any;
}

const Cell: Component<ICellProps> = (props: any) => {
  return (
    <Td
      className={
        props?.column?.fixed ? `fixed__cell cell--${props.column.fixed}` : ""
      }
    >
      <Show
        when={props.column.cellRenderer}
        fallback={props.row[props.column.accessor]}
      >
        <props.column.cellRenderer
          isSelected={props.isSelected}
          toggleRow={props.toggleRow}
        />
      </Show>
    </Td>
  );
};

export default Cell;

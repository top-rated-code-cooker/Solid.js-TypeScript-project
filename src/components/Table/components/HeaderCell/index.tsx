import { Component, Show } from "solid-js";
import { renderHeaderIcon } from "../sortHeaderIcon";
import Th from "./styles";

interface IHeaderCellProps {
  column: any;
  anySelected: any;
  toggleAll: any;
  onClick?: any;
  sortDirection: any;
  columnID: any;
  hasHorizontalScrollbar?: any;
}

const HeaderCell: Component<IHeaderCellProps> = (props: any) => (
  <Th
    colSpan={props.column.colSpan}
    className={`${
      props?.column?.fixed ? `fixed__header header--${props.column.fixed}` : ""
    }`}
  >
    <div
      className={`${props.column.sort ? "th__sorter" : ""}`}
      onClick={props?.onClick ?? null}
    >
      <Show when={props.column.render} fallback={props.column.header}>
        <props.column.render
          anySelected={props.anySelected}
          toggleAll={props.toggleAll}
        />
      </Show>
      <Show when={props.column.sort}>
        {renderHeaderIcon(props.sortDirection, props.columnID)}
      </Show>
    </div>
  </Th>
);

export default HeaderCell;

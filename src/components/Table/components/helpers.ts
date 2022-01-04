export const defaultSorter = (props: any): any => {
  if (!props?.rows?.length) {
    return props.rows;
  }

  let rowsNew: any = [];
  const columnID = props?.sortDirection?.[0];
  if (typeof props?.rows[0] === "object") {
    rowsNew = props?.rows?.sort((r1: any, r2: any) => {
      const r1_val = r1[columnID];
      const r2_val = r2[columnID];

      if (r1_val === r2_val) {
        return 0;
      } else if (r1_val < r2_val) {
        return -1;
      } else {
        return 1;
      }
    });
  } else {
    rowsNew = props?.rows?.sort();
  }

  return props?.sortDirection?.[1] === "asc" ? rowsNew.reverse() : rowsNew;
};

export const onSortHandler = (props: any) => {
  let sortDirectionNew: any;

  if (props.append) {
    sortDirectionNew = [null, null];
  } else if (props?.sortDirection?.[0] === props.columnID) {
    sortDirectionNew = [
      props.sortDirection[0],
      props.sortDirection[1] === "asc" ? "desc" : "asc",
    ];
  } else {
    sortDirectionNew = [props.columnID, "asc"];
  }
  return sortDirectionNew;
};

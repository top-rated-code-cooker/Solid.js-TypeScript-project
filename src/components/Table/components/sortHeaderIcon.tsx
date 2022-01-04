export const renderHeaderIcon = (sortDirection: any, columnID: any) => {
  return (
    <span className="sort-icon">
      <span
        className={`${
          sortDirection[0] === columnID && sortDirection[1] === "asc"
            ? "active"
            : ""
        }`}
      >
        &#x25B2;
      </span>
      <span
        className={
          sortDirection[0] === columnID && sortDirection[1] === "desc"
            ? "active"
            : ""
        }
      >
        &#x25BC;
      </span>
    </span>
  );
};

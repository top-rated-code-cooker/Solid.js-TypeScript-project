import { Component, For, createMemo } from "solid-js";
import Dropdown, { DropdownMenu } from "../../../Dropdown";
import PaginationWrapper from "./styles";

const Pagination: Component<any> = (props) => {
  const totalPages = createMemo(() => props?.pagination?.totalPages || 1),
    pageNo = createMemo(() => props?.pagination?.pageNo || 1),
    onNext = () => {
      if (pageNo() < totalPages()) {
        props.onPageChange(props.pagination.pageNo + 1);
      }
    },
    onPrev = () => {
      if (pageNo() > 1) {
        props.onPageChange(pageNo() - 1);
      }
    },
    PAGINATION_LIMIT = [5, 10, 15, 20, 50],
    renderDropdown = () => (
      <Dropdown
        renderButton={(isVisible: any) => (
          <span style={{ cursor: "default" }}>
            {props?.pagination?.pageSize || 0}
            <i className={`icon ${isVisible ? "icon-up" : "icon-down"}`} />
          </span>
        )}
      >
        <For each={PAGINATION_LIMIT}>
          {(limit) => (
            <DropdownMenu onClick={() => props.changeLimit(limit)}>
              {limit}
            </DropdownMenu>
          )}
        </For>
      </Dropdown>
    );

  return (
    <PaginationWrapper>
      <div className="pagination--result">
        <div className="results">
          <span className="total--count">{props?.pagination?.total || 0}</span>
          <span className="result--text">results</span>
          {renderDropdown()}
        </div>
      </div>
      <div className="pagination--items">
        <div className="results">
          <i
            className={`icon icon-double-left ${
              pageNo() === 1 ? "disabled" : ""
            }`}
            onClick={() => props.onPageChange(1)}
          />
          <i
            className={`icon icon-left ${pageNo() === 1 ? "disabled" : ""}`}
            onClick={() => onPrev()}
          />
          <span className="page--number">
            {pageNo()}/{totalPages()}
          </span>
          <i
            className={`icon icon-right ${
              totalPages() === pageNo() ? "disabled" : ""
            }`}
            onClick={() => onNext()}
          />
          <i
            className={`icon icon-double-right ${
              totalPages() === pageNo() ? "disabled" : ""
            }`}
            onClick={() => props.onPageChange(totalPages() || 1)}
          />
        </div>
      </div>
    </PaginationWrapper>
  );
};

export default Pagination;

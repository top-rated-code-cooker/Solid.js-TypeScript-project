import { createMemo, createSignal } from "solid-js";
import Table from "./Table";
import Dropdown, { DropdownMenu } from "../Dropdown";
import Button from "../ButtonNew";

const App: any = () => {
  const generateData = () => {
      const items = [];
      for (let i = 0; i <= 50; i++) {
        items.push({
          name: `Group ${Math.floor(Math.random() * 10)}`,
          date: `Apr ${Math.floor(Math.random() * 31)}, 2021`,
          members: Math.floor(Math.random() * 30000).toLocaleString(),
          posts: `${Math.floor(Math.random() * 1000)}K`,
          ctr: `${(Math.random() * 10).toFixed(2)}%`,
          feed: `${Math.floor(Math.random() * 1000)}K`,
        });
      }
      return items;
    },
    [data, setData] = createSignal(generateData()),
    [loading, setLoading] = createSignal(false),
    [fixedHeaders, setFixedheaders] = createSignal(true),
    [fixedColum, setFixedColum] = createSignal(["left", "right"]),
    [ShowPagination, setShowPagination] = createSignal(false),
    [pagination, setPagiantion] = createSignal({
      pageNo: 1,
      pageSize: 10,
      total: generateData().length,
      totalPages: Math.ceil(generateData().length / 10),
    }),
    headers = createMemo(() => [
      {
        header: "checkbox",
        render: (props: any) => (
          <input
            type="checkbox"
            checked={props.anySelected()}
            onInput={props.toggleAll}
          />
        ),
        cellRenderer: (props: any) => (
          <input
            type="checkbox"
            checked={props.isSelected}
            onInput={() => props.toggleRow(!props.isSelected)}
          />
        ),
      },
      {
        header: "Group",
        accessor: "name",
        sort: true,
        fixed: fixedColum()?.[0],
      },
      {
        header: "Date",
        accessor: "date",
      },
      {
        header: "Members",
        accessor: "members",
      },
      {
        header: "Posts",
        accessor: "posts",
      },
      {
        header: "CTR",
        accessor: "ctr",
        sort: true,
      },
      {
        header: "Feed",
        accessor: "feed",
        sort: true,
        fixed: fixedColum()?.[1],
      },
      {
        header: "",
        accessor: "action",
        cellRenderer: () => {
          return (
            <Dropdown
              renderButton={() => (
                <div>
                  <div className="ellipsis"></div>
                  <div className="ellipsis"></div>
                  <div className="ellipsis"></div>
                </div>
              )}
              position="right"
            >
              <DropdownMenu>Edit</DropdownMenu>
              <DropdownMenu>Delete</DropdownMenu>
            </Dropdown>
          );
        },
      },
    ]);

  return (
    <div>
      <div style={{ margin: "20px", "margin-left": 0 }} className="btn--wrap">
        <Button onClick={() => setLoading(!loading())}>Toggle Loading</Button>
        <Button onClick={() => setFixedheaders(!fixedHeaders())}>
          Toggle Fixed Headers
        </Button>
        <Button onClick={() => setShowPagination(!ShowPagination())}>
          Toggle ShowPagination
        </Button>
        <Button
          onClick={() =>
            setFixedColum(fixedColum().length ? [] : ["left", "right"])
          }
        >
          Toggle Fixed Columns
        </Button>
        <Button
          onClick={() => {
            setData(data().length ? [] : generateData());
            setPagiantion({
              pageNo: 1,
              pageSize: 10,
              total: data().length,
              totalPages: Math.ceil(data().length / 10),
            });
          }}
        >
          Toggle Empty State
        </Button>
      </div>
      <Table
        headers={headers()}
        data={data()}
        className="table"
        wrapperClass="wrapper--class"
        pagination={pagination()}
        fixedHeaders={fixedHeaders()}
        loading={loading()}
        hidePagination={ShowPagination()}
      />
    </div>
  );
};

export default App;

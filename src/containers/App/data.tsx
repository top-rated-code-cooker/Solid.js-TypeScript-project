const CheckBox = (props: any) => {
  return <input type="checkbox" checked={props.checked} onChange={() => props?.onInput?.()} />
}

export const headers: any = [
  {
    header: 'Index',
    accessor: 'index',
    render: ({
      toggleAllCheckBox,
      selectedRows,
    }: any) => {
      return <CheckBox checked={!!selectedRows?.()?.length} onInput={() => toggleAllCheckBox()} />;
    },
    cellRenderer: ({
      selectedRows,
      index,
      toggleCheckbox,
    }: any) => {
      const checked = selectedRows?.()?.findIndex((item: any) => item.index === index) !== -1;
      return <CheckBox checked={checked} onInput={() => toggleCheckbox(index)}/>;
    }
  },
  {
    header: 'Group',
    accessor: 'name',
  },
  {
    header: 'Date',
    accessor: 'date'
  },
  {
    header: 'Members',
    accessor: 'members'
  },
  {
    header: 'Posts',
    accessor: 'posts'
  },
  {
    header: 'CTR',
    accessor: 'ctr',
  },
  {
    header: '',
    accessor: 'action',
    cellRenderer: () => {
      return (
        <div>
          <div className="ellipsis"></div>
          <div className="ellipsis"></div>
          <div className="ellipsis"></div>
        </div>
      )
    }
  },
];

export const data = [
  {
    name: 'Group 1',
    date: 'Apr 30, 2021',
    members: '30,545',
    posts: '100K',
    ctr: '5.67%',
  },
  {
    name: 'Group 4',
    date: 'Apr 31, 2021',
    members: '34,764',
    posts: '90K',
    ctr: '4.67%',
  },
  {
    name: 'Group 2',
    date: 'Apr 31, 2021',
    members: '34,764',
    posts: '90K',
    ctr: '4.67%',
  },
  {
    name: 'Group 3',
    date: 'Apr 30, 2021',
    members: '30,545',
    posts: '100K',
    ctr: '5.67%',
    dest: 'fdasd',
  },
];

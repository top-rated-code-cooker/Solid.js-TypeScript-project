interface ITabList {
  label: any;
  content: any;
}

export const parseTabList = (children: any): ITabList[] =>
  children?.map((item: any) => ({
    label: item[0],
    content: item[1],
  })) || [];

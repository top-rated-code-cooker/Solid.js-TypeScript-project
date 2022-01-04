import { Component } from "solid-js";

interface IProps {
  label: string;
}

const Tab: Component<IProps> = ({ label, children }) => {
  return (
    <>
      {label}
      <div>{children}</div>
    </>
  );
};

export default Tab;

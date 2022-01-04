import { styled } from "solid-styled-components";

const Scrollbar: any = styled("div")`
  overflow: auto;
  scrollbar-width: 5px;
  padding-bottom: 5px;
  border-bottom: 1px solid #2f2b2b;
  width: 100%;
  max-height: ${({ fixed }: any) => (fixed ? "400px" : "auto")};

  &:hover {
    &::-webkit-scrollbar {
      overflow: hidden;
    }
  }

  &::-webkit-scrollbar {
    margin-top: 10px;
    width: 6px;
    height: 6px;
    border-radius: 15px;
  }

  &::-webkit-scrollbar-track {
    background: #1211111a;
    border-radius: 15px;
  }

  &::-webkit-scrollbar-track:hover {
    opacity: 1;
    cursor: auto;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #69696914;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.03);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
`;

export default Scrollbar;

import { styled } from "solid-styled-components";

const Td = styled("td")`
  &.fixed__cell {
    position: sticky;
    background: ${({ theme }) => theme.colors.primary};
    -webkit-backface-visibility: hidden;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      bottom: -1px;
      width: 30px;
      transition: box-shadow 0.3s;
      pointer-events: none;
    }

    &.cell--left {
      left: 0;

      &:before {
        transform: translateX(100%);
        box-shadow: inset 10px 0 8px -8px rgb(0 0 0 / 15%);
        right: 0;
      }
    }

    &.cell--right {
      right: 0;

      &:before {
        left: 0;
        transform: translateX(-100%);
        box-shadow: inset -10px 0 8px -8px rgb(0 0 0 / 15%);
      }
    }

    @media (max-width: 768px) {
      position: relative;

      &:before,
      &:after {
        visibility: hidden;
        opacity: 0;
      }
    }
  }
`;

export default Td;

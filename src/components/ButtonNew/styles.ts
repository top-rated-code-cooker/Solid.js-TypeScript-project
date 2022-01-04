import { styled } from "solid-styled-components";

const ButtonWrapper: any = styled("button")`
  color: ${(props) => props.theme.colors.primaryText};
  background: #121111;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  align-items: center;
  line-height: 0;
  border: 1px solid #121111;
  border-radius: 0.75em;
  transform: scale(1);
  -webkit-font-smoothing: subpixel-antialiased;
  transition: 0.15s ease-in;

  .btn--inner {
    display: flex;
  }

  .icon--left {
    margin-right: 11px;
  }

  .icon--right {
    margin-left: 11px;
  }

  &:active,
  &:visited,
  &:focus,
  &:hover {
    outline: none;
  }

  &:hover {
    background: #1c1b1b;
    border-color: #1c1b1b;
  }

  &:active,
  &.active {
    transform: scale(0.95);
  }

  &.btn--xl {
    font-size: 1em;
    height: 56px;
    padding: 0 40px;
  }

  &.btn--lg {
    font-size: 1em;
    height: 48px;
    padding: 0 32px;
  }

  &.btn--md {
    font-size: 0.875em;
    font-weight: 500;
    height: 40px;
    padding: 0 24px;
  }

  &.btn--sm {
    font-size: 0.75em;
    font-weight: normal;
    height: 36px;
    padding: 0 20px;
  }

  &.btn--xs {
    font-size: 0.75em;
    font-weight: normal;
    height: 32px;
    padding: 0 16px;
  }

  &.btn--primary {
    background-color: #0095f8;
    border: 1px solid #0095f8;

    &:hover {
      background-color: #0089e4;
      border: 1px solid #0089e4;
    }
  }

  &.btn--danger {
    background-color: #ff464f;
    border-color: #ff464f;

    &:hover {
      background-color: #ff323c;
      border-color: #ff323c;
    }
  }

  &.btn--ghost {
    background-color: transparent;
    border-color: #444141;

    &:hover {
      background-color: transparent;
      border-color: #635d5d;
    }
  }

  &.btn--ghost-primary {
    color: #0095f8;
    background-color: transparent;
    border-color: #0095f8;

    &:hover {
      color: #0089e4;
      background-color: transparent;
      border-color: #0089e4;
    }
  }

  &.btn--ghost-danger {
    color: #ff464f;
    background-color: transparent;
    border-color: #ff464f;

    &:hover {
      color: #ff323c;
      background-color: transparent;
      border-color: #ff323c;
    }
  }

  &.btn--disabled {
    color: rgba(243, 243, 243, 0.32);
    background-color: rgba(18, 17, 17, 0.32);
    border-color: rgba(18, 17, 17, 0);
    cursor: not-allowed;

    &:active,
    &:visited,
    &:focus {
      transform: none;
    }
  }

  .loading--icon {
    i:after,
    i {
      height: 10px;
      width: 10px;
      padding: 0;
      transform: translateY(-2px);
      margin-right: 13px;
    }
  }

  &.btn--loading {
    pointer-events: none;
    opacity: 0.4;
  }

  &.btn--block {
    width: 100%;
    text-align: center;
    justify-content: center;
    height: 48px;

    &:active,
    &.active {
      transform: scale(0.985);
    }
  }
`;

export default ButtonWrapper;

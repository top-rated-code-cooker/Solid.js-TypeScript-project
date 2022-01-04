import { styled } from "solid-styled-components";

const InputWrapper: any = styled("div")<any>`
  .input--wrapper {
    position: relative;
    height: 40px;
    line-height: 40px;

    input {
      display: flex;
      color: ${(props) => props.theme.colors.primaryText};
      background-color: transparent;
      border: 1px solid #444141;
      box-sizing: border-box;
      border-radius: 0.75em;
      width: 100%;
      height: 40px;
      outline: none;
      align-items: center;
      padding: 0px 20px;
      padding-left: ${({ iconLeft }) => (iconLeft ? "45px" : "auto")};
      padding-right: ${({ iconRight }) => (iconRight ? "45px" : "auto")};
    }

    &.input--lg {
      &,
      input[type="text"] {
        height: 56px;
        line-height: 56px;
        font-size: 1em;
      }
    }

    &.input--md {
      &,
      input[type="text"] {
        height: 48px;
        line-height: 48px;
        font-size: 1em;
      }
    }

    &.input--sm {
      &,
      input[type="text"] {
        height: 40px;
        line-height: 40px;
        font-size: 0.9375em;
      }
    }

    &.input--xs {
      &,
      input[type="text"] {
        height: 32px;
        line-height: 32px;
        font-size: 0.875em;
        border-radius: 0.5em;
      }
    }

    .icon {
      position: absolute;
      top: 0;
      bottom: 0;
      height: 2px;
      margin: auto;
      color: #fff;

      &.icon--left {
        left: 20px;
      }

      &.icon--right {
        right: 20px;
      }
    }
  }

  .input--label {
    font-size: 0.8125em;
    color: ${(props) => props.theme.colors.primaryText};
    margin-bottom: 8px;
    display: block;
  }
`;

export default InputWrapper;

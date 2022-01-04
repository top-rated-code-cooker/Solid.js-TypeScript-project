import { styled } from "solid-styled-components";

const SwitchWrapper: any = styled("label")`
  position: relative;
  display: inline-block;
  min-width: 60px;
  height: 24px;
  transition: 0.4s all;
  animation-direction: alternate;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: ${(props) => props.theme.colors.inActive};
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 0;
    top: 0;
    margin: auto;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
  }

  input:checked + .slider:before {
    transform: translateX(35px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }

  .label--unchecked,
  .label--checked {
    position: absolute;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primaryText};
    font-size: 0.875em;
    top: 0;
    bottom: 0;
    margin: auto;
  }

  &.switch--lg {
    min-width: 150px;
    height: 56px;
    line-height: 56px;

    input:checked + .slider:before {
      transform: translateX(92px);
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 42px;
      width: 42px;
      left: 8px;
    }

    .label--unchecked,
    .label--checked {
      font-size: 1em;
      font-weight: 500;
    }
  }

  &.switch--md {
    min-width: 120px;
    height: 48px;
    line-height: 48px;

    input:checked + .slider:before {
      transform: translateX(70px);
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 38px;
      width: 38px;
      left: 6px;
    }

    .label--unchecked,
    .label--checked {
      font-size: 0.9375em;
      font-weight: 500;
    }
  }

  &.switch--sm {
    min-width: 100px;
    height: 40px;
    line-height: 40px;

    input:checked + .slider:before {
      transform: translateX(58px);
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 32px;
      width: 32px;
      left: 5px;
    }
  }

  &.switch--xs {
    min-width: 80px;
    height: 32px;
    line-height: 32px;

    input:checked + .slider:before {
      transform: translateX(48px);
    }

    .slider:before {
      position: absolute;
      content: "";
      height: 24px;
      width: 24px;
      left: 4px;
    }
  }

  .label--checked {
    left: 22%;
    right: auto;
  }

  .label--unchecked {
    right: 22%;
    left: auto;
  }

  &.switch--checked {
    transition: 0.4s all;

    .label--checked {
      visibility: visible;
      opacity: 1;
    }

    .label--unchecked {
      visibility: hidden;
      opacity: 0;
    }
  }

  &.switch--unchecked {
    transition: 0.4s all;

    .label--unchecked {
      visibility: visible;
      opacity: 1;
      z-index: 1;
    }

    .label--checked {
      visibility: hidden;
      opacity: 0;
    }
  }

  &.disabled,
  &.disabled > * {
    cursor: not-allowed;
    opacity: 0.4;
  }
`;

export default SwitchWrapper;

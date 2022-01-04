import { styled } from "solid-styled-components";

const RadioWrapper = styled("label")`
  &.radio {
    position: relative;
    display: block;
    color: ${(props) => props.theme.colors.inActive};
    cursor: pointer;
    font-size: 15px;
    padding-left: 25px;
    margin-bottom: 12px;
    user-select: none;
    transition: 0.3s all;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      height: 14px;
      width: 14px;
      background-color: ${(props) => props.theme.colors.primary};
      border: 3px solid ${(props) => props.theme.colors.primary};
      box-shadow: 0 0 0px 1px ${(props) => props.theme.colors.inActive};
      border-radius: 50%;
    }

    &:hover {
      color: ${(props) => props.theme.colors.primaryText};

      input ~ .checkmark {
        box-shadow: 0 0 0px 1px ${(props) => props.theme.colors.primaryText};
      }
    }
    &:hover .input--active ~ .checkmark,
    .input--active ~ .checkmark {
      background-color: #0095f8;
      border: 3px solid ${(props) => props.theme.colors.primary};
      box-shadow: 0 0 0px 1px ${(props) => props.theme.colors.primaryText};
    }
  }

  &.radio--disabled {
    cursor: not-allowed;

    &,
    &:hover,
    input {
      cursor: not-allowed;
      color: rgba(243, 243, 243, 0.32);
      opacity: 0.5;
      color: ${(props) => props.theme.colors.inActive};
    }

    &:hover {
      input ~ .checkmark {
        box-shadow: 0 0 0px 1px ${(props) => props.theme.colors.inActive};
      }
    }

    input {
      opacity: 0;
    }
  }

  input[type="radio" i] {
    margin: 0;
  }
`;

export default RadioWrapper;

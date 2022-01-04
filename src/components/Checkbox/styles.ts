import { styled } from 'solid-styled-components';

const Wrapper = styled('div')`    
  display: ${(props: any) => props.inline ? 'inline-block' : 'block'};
  margin-right: ${(props: any) => props.inline ? '20px' : 'auto'};

  label {
    cursor: pointer;
    display: flex;
    position: relative;
    color: ${(props) => props.theme.colors.inActive};
    font-size: 15px;
    align-items: center;
    padding: 10px 0;
    padding-left: 25px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      height: 0;
      width: 0;
      margin-right: 10px;
    }
    
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      margin: auto;
      height: 16px;
      width: 16px;
      background-color: #eee;
    }
    
    .container:hover input ~ .checkmark {
      background-color: #ccc;
    }
    
    input:checked ~ .checkmark {
      background-color: #2196F3;
    }
    
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
    
    input:checked ~ .checkmark:after {
      display: block;
    }

    &.checkbox--disabled,
    input:disabled ~ .checkmark {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .checkmark:after {
      left: 0;
      top: -4px;
      bottom: 0;
      right: 0;
      margin: auto;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
`;

export default Wrapper;

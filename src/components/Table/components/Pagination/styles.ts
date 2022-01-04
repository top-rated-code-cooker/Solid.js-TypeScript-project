import { styled } from 'solid-styled-components';

const PaginationWrapper = styled('div')`
  width: 99%;
  display: flex;
  padding: 10px 0;
  justify-content: space-between;

  .pagination--items,
  .pagination--result {
    display: flex;
    
    .results {
      color: #717070;
      font-weight: 600;
      font-size: 13px;
      padding: 10px 0;

      i,
      span {
        cursor: pointer;
        margin-right: 7px;
        margin-left: 7px;
        
        &.item--count {
          cursor: pointer;
          margin-right: 0;
        }

        &.total--count {
          margin-right: 3px;
        }

        &.result--text {
          margin-left: 0;
        }
        
        &.page--number {
          cursor: default;
        }
      }
    }
  }

  .dropdown {
    display: inline-block;
  }

  .icon {
    &:hover {
      &:before,
      &:after {
        border-color: ${({ theme }) => theme.colors.primaryText};
      }
    }

    &.disabled {
      cursor: not-allowed !important;
    }
  }

  .icon-up {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: translateY(2px);
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    border-radius: 100px;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 8px;
      height: 8px;
      border-top: 2px solid;
      border-right: 2px solid;
      transform: rotate(-45deg);
      left: 4px;
    }
  }

  .icon-double-right {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: translateY(-7px);
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    border-radius: 100px;
    cursor: pointer;

    &::after,
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 8px;
      height: 8px;
      border-right: 2px solid;
      border-top: 2px solid;
      transform: rotate(45deg);
      top: 7px;
      right: 6px;
    }
    &::after {
      right: 12px;
    }
  }

  .icon-double-left {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: translateY(-7px);
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    border-radius: 100px;
    cursor: pointer;

    &::after,
    &::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 8px;
      height: 8px;
      border-left: 2px solid;
      border-bottom: 2px solid;
      transform: rotate(45deg);
      top: 7px;
      left: 6px;
    }

    &::after {
      left: 12px;
    }
  }

  .icon-right {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: translateY(-4px);
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    border-radius: 100px;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 8px;
      height: 8px;
      border-bottom: 2px solid;
      border-right: 2px solid;
      transform: rotate(-45deg);
      right: 6px;
      top: 4px;
    }
  }

  .icon-left {
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    transform: translateY(0);
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    border-radius: 100px;
    cursor: pointer;

    &::after {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 8px;
      height: 8px;
      border-bottom: 2px solid;
      border-left: 2px solid;
      transform: rotate(45deg);
      left: 6px;
      top: 4px
    }
  }

  .icon-down {
    position: relative;
    display: inline-block;
    transform: translateY(-4px);
    width: 10px;
    height: 10px;
    border: 2px solid transparent;
    border-radius: 100px;
    cursor: pointer;
    
    &::after {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 8px;
      height: 8px;
      border-bottom: 2px solid;
      border-right: 2px solid;
      transform: rotate(45deg);
      left: 4px;
      top: 2px;
    }

  }
`;

export default PaginationWrapper;

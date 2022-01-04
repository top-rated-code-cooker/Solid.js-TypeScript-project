import { styled } from 'solid-styled-components';

const UploadWrapper = styled('div')`
  .btn--upload {
    position: relative;
    display: inline-block;
    cursor: pointer;
    color: ${(props) => props.theme.colors.primaryText};
    font-size: 15px;
    border: 1px solid ${(props) => props.theme.colors.inActive};
    padding: 8px 25px;
    border-radius: 8px;
    
    input {
      cursor: pointer;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
    }
  }

  .file--list {
    display: flex;
    padding: 10px;
    margin: 5px 0;

    .file--info {
      color: ${(props) => props.theme.colors.inActive};
      font-size: 14px;
      display: inline-block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .item--index {
      color: ${(props) => props.theme.colors.primaryText};
      font-size: 14px;
      margin-right: 15px;
    }

    .delete--btn {
      font-size: 14PX;
      color: ${(props) => props.theme.colors.danger};
      margin-left: 15px;
      cursor: pointer;
      display: none;
    }
    
    &:hover {
      background-color: ${(props) => props.theme.colors.grey};
      .delete--btn {
        display: block;
      }
    }
  }

  .btn--card {
    display: flex;
    align-items: center;
    height: 120px;
    width: 120px;
    overflow: hidden;
    padding: 5px;
    text-align: center;
    justify-content: center;


    img {
      width: 100%;
      height: auto;
    }
  }

  &.upload--card {
    display: flex;
    flex-wrap: wrap;

    .card--item {
      position: relative;

      &:after {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: rgba(0,0,0,0.6);
        visibility: hidden;
        opacity: 0;
      }
      
      .delete--icon {
        opacity: 0;
        visbility: hidden;
      }
      
      &:hover {
        .delete--icon,
        &:after {
          visibility: visible;
          opacity: 1;
          z-index: 1;
        }
        .delete--icon {
          z-index: 2;
        }
      }
    }
  }

  .btn--card,
  .card--item {
    height: 120px;
    width: 120px;
    overflow: hidden;
    border-radius: 8px;
    padding: 5px;
    border: 1px solid ${(props) => props.theme.colors.inActive};
    margin-right: 8px;
    margin-bottom: 8px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 8px;
    }
  }

  .delete--icon {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    height: 12px;
    width: 12px;
    color: ${(props) => props.theme.colors.danger};
    z-index: 9;
    cursor: pointer;
  }

  .upload--draggable {
    display: flex;
    height: 120px;
    width: 300px;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.2);

    input {
      width: 100%;
      height: 100%;
    }

    &.active,
    &:hover {
      border: 1px dashed ${(props) => props.theme.colors.primaryText};
    }
  }
`;

export default UploadWrapper;

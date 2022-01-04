import { Component } from 'solid-js';

const FileList: Component<any> = (props) => {
  return (
    <div className="file--list">
      <span className="item--index">{props.index + 1}.</span>
      <div className="file--info">
        {props.file?.name} - {props.file?.type}
      </div>
      <span className="delete--btn" onClick={() => props?.deleteFile?.(props.index)}>x</span>
    </div>
  )
}

export default FileList;

import { Component, createSignal, For, Show } from "solid-js";
import FileList from "./FileList";
import CardList from "./CardList";
import UploadWrapper from "./styles";

const Upload: Component<any> = (props: any) => {
  const [files, setFiles] = createSignal<any>([]),
    handleChange = (e: any) => {
      props.onChange && props.onChange(e);
      const file = e.target.files[0];
      setFiles([...files(), file]);
    },
    handleDropFile = (e: any) => {
      e.preventDefault();
      const file = e.dataTransfer.files[0];
      setFiles([...files(), file]);
    },
    deleteFile = (idx: number) => {
      setFiles(files().filter((_: any, index: any) => index !== idx));
    };

  const renderItems = () => (
    <UploadInput
      className={`${props.listType === "card" ? "btn--card" : ""} ${
        props.draggable ? "upload--draggable" : ""
      }`}
      onChange={handleChange}
      onDrop={handleDropFile}
    >
      {props.children}
    </UploadInput>
  );

  const renderMultipleList = () => (
    <Show when={props.fileList}>
      <For each={props.fileList}>
        {(file: any, index: any) => (
          <CardList
            imgSrc={file.url}
            onDelete={(e: any) => props.onDelete(e, index())}
          />
        )}
      </For>
    </Show>
  );

  const renderList = () => (
    <For each={files()}>
      {(file: any, index: any) => (
        <Show when={props.listType !== "card"}>
          <FileList file={file} index={index()} deleteFile={deleteFile} />
        </Show>
      )}
    </For>
  );

  return (
    <UploadWrapper
      className={`${props.listType === "card" ? "upload--card" : ""}`}
    >
      <Show when={props.children && props.listType !== "card"}>
        {renderItems()}
      </Show>
      {renderList()}
      {renderMultipleList()}
      <Show when={props.children && props.listType === "card"}>
        {renderItems()}
      </Show>
    </UploadWrapper>
  );
};

const UploadInput = (props: any) => (
  <div className={`btn--upload ${props.className}`}>
    <input
      type="file"
      onChange={props.onChange}
      onDrop={props.onDrop}
      onDragOver={(e) => {
        e.target.parentElement?.classList.add('active');
      }}
      onDragLeave={(e) => {
        e.target.parentElement?.classList.remove('active');
      }}
    />
    {props.children}
  </div>
);

export default Upload;

import { createSignal } from "solid-js";
import { styled } from "solid-styled-components";
import Upload from "../../../../components/Upload";

const Wrapper = styled("div")`
  h5 {
    color: ${(props) => props.theme.colors.primaryText};
  }
`;

const UploadDemo = () => {
  const [fileList, setFileList] = createSignal<any>([
      {
        url:
          "https://cf.bstatic.com/images/hotel/max1024x768/228/228984065.jpg",
      },
    ]),
    [imgSrc, setImgSrc] = createSignal(null),
    onChange = (e: any) => {
      getBase64(e.target.files[0], (url: any) => {
        setFileList([...fileList(), { url }]);
      });
    },
    getBase64 = (img: any, callback: any) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => callback(reader.result));
      reader.readAsDataURL(img);
    },
    handleFileChange = (e: any) => {
      getBase64(e.target.files[0], (url: any) => {
        setImgSrc(url);
      });
    },
    onDelete = (e: any, index: any) => {
      setFileList(fileList().filter((_: any, idx: any) => index !== idx));
    };

  return (
    <Wrapper>
      <h5>File List</h5>
      <Upload>Click to upload file</Upload>

      <hr style={{ "margin-top": "40px", border: "1px solid #2F2B2B" }} />
      <h5>Avatar</h5>
      <Upload listType="card" onChange={handleFileChange}>
        {
          // @ts-ignore
          imgSrc() ? <img src={imgSrc()} /> : "Upload"
        }
      </Upload>
      <hr style={{ "margin-top": "40px", border: "1px solid #2F2B2B" }} />

      <h5>Multiple Files</h5>
      <Upload
        listType="card"
        fileList={fileList()}
        onChange={onChange}
        onDelete={onDelete}
      >
        {fileList().length < 5 ? "Upload" : null}
      </Upload>

      <hr style={{ "margin-top": "40px", border: "1px solid #2F2B2B" }} />
      <h5>Draggable</h5>
      <Upload draggable>Click or Drag and drop file here</Upload>
    </Wrapper>
  );
};

export default UploadDemo;
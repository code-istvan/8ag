import React from "react";
import Button from "react-bootstrap/Button";
import ReactQuillEditor from "../components/ReactQuillEditor";
import FileUploadDropZone from "./FileUploadDropZone";

const CreateBlog = (props) => {
  return (
    <div>
      <h5>Provide blog title:</h5>
      <input
        type="text"
        name="title"
        placeholder="My title.."
        className="InputMassage"
        autoComplete="off"
        onChange={(event) => props.setTitle(event.target.value)}
        value={props.title}
        required
      />
      <br />
      <br />
      <h5>Write blog content:</h5>
      <ReactQuillEditor
        editorChangeHandler={props.editorChangeHandler}
        content={props.content}
      />
      <br />
      <FileUploadDropZone
        handleDrop={props.handleDrop}
        fileName={props.fileName}
        handleDeleteFile={props.handleDeleteFile}
      />
      <Button variant="primary" type="submit" onClick={props.savePost}>
        Submit
      </Button>
    </div>
  );
};

export default CreateBlog;

import React from "react";
import {Button, Alert } from "react-bootstrap";
import ReactQuillEditor from "../components/ReactQuillEditor";
import FileUploadDropZone from "./FileUploadDropZone";

const CreateBlog = (props) => {
  const {
    setTitle,
    title,
    content,
    editorChangeHandler,
    handleDrop,
    fileName,
    handleDeleteFile,
    validate,
    savePost
  } = props;
  return (
    <div>
      <h5>Provide blog title:</h5>
      <input
        type="text"
        name="title"
        placeholder="My title.."
        className="InputMassage"
        autoComplete="off"
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        required
      />
      <br />
      <br />
      <h5>Write blog content:</h5>
      <ReactQuillEditor
        editorChangeHandler={editorChangeHandler}
        content={content}
      />
      <br />
      <FileUploadDropZone
        handleDrop={handleDrop}
        fileName={fileName}
        handleDeleteFile={handleDeleteFile}
      />
      {!validate && (
        <Alert variant={"danger"}>
          Please provide title and content to submit.
        </Alert>
      )}
      <Button variant="primary" type="submit" onClick={savePost}>
        Submit
      </Button>
    </div>
  );
};

export default CreateBlog;

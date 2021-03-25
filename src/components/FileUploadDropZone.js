import React from "react";
import Dropzone from "react-dropzone";
import "./fileUploadDropZone.css";

const FileUploadDropZone = (props) => {
  return (
    <React.Fragment>
      <h5>Please upload blog image:</h5>
      <Dropzone
        onDrop={props.handleDrop}
        accept="image/*"
        minSize={100}
        maxSize={3072000}
      >
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
        }) => {
          const additionalClass = isDragAccept
            ? "accept"
            : isDragReject
            ? "reject"
            : "";

          return (
            <div
              {...getRootProps({
                className: `dropzone ${additionalClass}`,
              })}
            >
              <input {...getInputProps()} />
              <span>{isDragActive ? "📂" : "📁"}</span>
              <p>Drag'n'drop image, or click to select file</p>
            </div>
          );
        }}
      </Dropzone>
      {props.fileName && (
        <div>
          <strong>Selected File:</strong>
          <label>{props.fileName}</label>
          <label onClick={props.handleDeleteFile}>❌</label>
        </div>
      )}
    </React.Fragment>
  );
};

export default FileUploadDropZone;

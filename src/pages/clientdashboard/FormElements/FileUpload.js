import React from "react";
import { Upload } from "antd";

const FileUpload = ({ maxCount = 1, onChange, value }) => {
  return (
    <Upload
      listType="picture-card"
      fileList={value}
      beforeUpload={() => false} // Prevent file upload
      maxCount={maxCount}
      onChange={(v) => onChange && onChange(v.fileList)}
      accept=".doc,.docx,.pdf"
    >
      {value?.length !== maxCount && (
        <div>
          <p>
            <span className="fw-bold">Click to Upload </span>
            or Drag and Drop
          </p>
          <p>PDF, DOC, DOCX</p>
        </div>
      )}
    </Upload>
  );
};

export default FileUpload;

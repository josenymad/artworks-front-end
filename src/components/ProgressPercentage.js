import React from "react";
import "../styles/progress-percentage.css";

const ProgressPercentage = ({ uploadProgress }) => {
  return (
    <div className="progress-percentage">
      <label htmlFor="uploadPercent">Uploading...{}</label>
      <progress id="uploadPercent" max={100} value={uploadProgress}>
        {uploadProgress}%
      </progress>
    </div>
  );
};

export default ProgressPercentage;

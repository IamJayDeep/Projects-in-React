import React, { useState } from "react";

function FileUploader() {
  const [file, setFile] = useState(null);
  const handleSubmit = (e) => {
    console.log(e);
    let seletedFile = e.target.files[0];
    if (seletedFile) setFile(URL.createObjectURL(seletedFile));
  };
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleSubmit} />
      {file && <img src={file} alt="image" />}
    </div>
  );
}

export default FileUploader;

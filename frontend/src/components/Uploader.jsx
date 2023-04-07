import React, { useState } from "react";

export function Uploader() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("video", file);


    fetch("http://localhost:3000/api/uploads/", {
      method: "POST",
    //   credentials: 'include',
    //   withCredentials: true,
    //   credentials: "same-origin",
    headers: {
        // "Acces-Control-Allow-Origin": "http://localhost:5173",
        "Content-Type": "multipart/form-data",
      },
      body: formData,
    });
  };

      return (
        <form onSubmit={handleSubmit} id="uploader" className="m-5 border border-dark rounded">
            <label for="formFile" className="form-label m-3">Upload your video</label>
            <input className="form-control" type="file" onChange={handleFileChange} />
            <div className="m-3">
                <button type="submit" className="btn btn-outline-secondary">Upload</button>
                <button type="reset" className="btn btn-outline-danger ms-3">Cancel</button>
            </div>
        </form>
    )
}

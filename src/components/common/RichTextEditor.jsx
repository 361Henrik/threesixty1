import React from "react";
import ReactQuill from "react-quill";

export default function RichTextEditor({ value, onChange, placeholder = "", className = "" }) {
  const modules = {
    toolbar: [
      [{ header: [false, 2, 3] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "clean"]
    ]
  };
  const formats = ["header", "bold", "italic", "underline", "list", "bullet", "link"];

  return (
    <div className={className}>
      <ReactQuill
        theme="snow"
        value={value || ""}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
      />
    </div>
  );
}
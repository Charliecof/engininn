"use client";
import React from "react";

type FileInputProps = {
  onFileSelect: (file: File) => void;
};

const FileInput: React.FC<FileInputProps> = ({ onFileSelect }) => {
  return <input type="file" onChange={handleOnChange} />;

  function handleOnChange(event: React.FormEvent<HTMLInputElement>) {
    const target = event.target as HTMLInputElement & {
      files: FileList;
    };

    onFileSelect(target.files![0]);
  }
};

export default FileInput;

"use client";
import React, { useEffect, useState } from "react";
import Input from "../atoms/Input";
import useCreateRoom from "../../utils/hooks/useCreateRoom";
import { Room } from "@/utils/EngineInterfaces";
import FileInput from "../atoms/FileInput";
import useUploadFile from "@/utils/hooks/useUploadFile";

interface CreateRoomFormData extends Omit<Room, "Images"> {
  Images: File[];
}

const CreateRoomForm = () => {
  const [formData, setFormData] = useState<CreateRoomFormData | undefined>();
  const { createRoom } = useCreateRoom();
  const { uploadFile, isLoading } = useUploadFile();

  useEffect(() => {
    console.log(formData, "formData");
  }, [formData]);

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <Input
          type="text"
          onChange={(value) => handleInputChange(value, "Name")}
          name="Name"
          value={formData?.Name || ""}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <Input
          type="textarea"
          name="Description"
          value={formData?.Description || ""}
          onChange={(value) => handleInputChange(value, "Description")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <Input
          type="number"
          name="Price"
          value={formData?.Price || ""}
          onChange={(value) => handleInputChange(value, "Price")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Capacity
        </label>
        <Input
          type="number"
          name="Capacity"
          value={formData?.Capacity || ""}
          onChange={(value) => handleInputChange(value, "Capacity")}
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Images
        </label>
        <FileInput
          onFileSelect={(file: any) => handleInputChange(file, "Images")}
        />
      </div>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );

  function handleInputChange(value: any, key: keyof Room) {
    //@ts-ignore
    setFormData((prev) => {
      if (key === "Images") {
        return {
          ...(prev || {}),
          Images: prev?.Images ? [...prev.Images, value] : [value],
        };
      }
      return {
        ...(prev || {}),
        [key]: value,
      };
    });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!formData) return;

    //Upload images to server
    if (formData.Images) {
      uploadFile({
        file: formData.Images[0],
        onSucess: (data) => {
          console.log(data, "data");
          createRoom({ data: { ...formData, Images: [data.data.FileURL] } });
        },
      });
    }

    // createRoom({ data: formData });
  }
};

export default CreateRoomForm;

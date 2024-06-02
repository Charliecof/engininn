import { useMutation } from "@tanstack/react-query";
import FileAPI from "../api/File";
import { callFunctionIfDefined } from "../GeneralUtils";

const useUploadFile = () => {
  const uploadFile = useMutation({
    mutationFn: async ({
      file,
    }: {
      file: File;
      onSucess?: (data: any) => void;
      onError?: (e: any) => void;
    }) => {
      const formData = new FormData();
      formData.append("files", file);
      return await FileAPI.getInstance().uploadFile(formData);
    },
    onSuccess: (data, { onSucess }) => {
      callFunctionIfDefined(onSucess, data);
    },
    onError: (error, { onError }) => {
      callFunctionIfDefined(onError, error);
    },
  });

  return {
    uploadFile: uploadFile.mutate,
    isLoading: uploadFile.isPending,
  };
};

export default useUploadFile;

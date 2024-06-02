import { useMutation } from "@tanstack/react-query";
import EngineAPI from "../api/Engine";
import { Room } from "../EngineInterfaces";
import { callFunctionIfDefined } from "../GeneralUtils";

const useCreateRoom = () => {
  const createRoom = useMutation({
    mutationFn: async ({
      data,
    }: {
      data: Room;
      onSuccess?: (data: any) => void;
      onError?: (error: any) => void;
    }) => {
      return await EngineAPI.getInstance().createRoom(data);
    },
    onError: (error, { onError }) => {
      callFunctionIfDefined(onError, error);
    },
    onSuccess: (data, { onSuccess }) => {
      callFunctionIfDefined(onSuccess, data);
    },
  });

  return {
    createRoom: createRoom.mutate,
    isLoading: createRoom.isPending,
  };
};

export default useCreateRoom;

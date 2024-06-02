"use client";
import { useMutation } from "@tanstack/react-query";
import AuthAPI from "../api/Auth";
import { callFunctionIfDefined } from "../GeneralUtils";
import Cookies from "js-cookie";

const useUser = () => {
  const login = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
      onSuccess?: (data: any) => void;
      onError?: (error: any) => void;
    }) => {
      const { data } = await AuthAPI.getInstance().login(email, password);
      return data;
    },
    onError: (error, { onError }) => {
      callFunctionIfDefined(onError, error);
    },
    onSuccess: (data, { onSuccess }) => {
      Cookies.set("token", data.token);
      callFunctionIfDefined(onSuccess, data);
      return;
    },
  });

  return {
    login: login.mutate,
    isLoading: login.isPending,
  };
};

export default useUser;

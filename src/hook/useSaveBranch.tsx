import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm, SubmitHandler } from "react-hook-form";
import { saveBranch } from "../services/branch.service";
import { Content } from "../model/branch.model";

export const useSaveBranch = <T extends Record<string, any>>() => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>();

  const createBranch=useMutation({
    mutationFn: saveBranch
  })

  return { register, handleSubmit, errors, ...createBranch };
};




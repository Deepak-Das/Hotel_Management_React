import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { saveBranch } from "../services/branch.service";
import { useState } from "react";

export const useSaveBranch = <T extends Record<string, any>>() => {
  const form = useForm<T>();

  const { reset, ...createBranch } = useMutation({
    mutationKey: ["saveBranch"],
    mutationFn: saveBranch,
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  return {
    ...form,
    ...createBranch,
    showSuccessMessage,
    setShowSuccessMessage,
  };
};

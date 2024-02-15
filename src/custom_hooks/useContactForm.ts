"use client";

import sendMessageAction from "@/app/api/actions/sendMessageAction";
import { ContactSchema, contactSchema } from "@/schema/contactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export type ServerResponse = {
  message: string;
  type: "error" | "success" | "idle";
};

const useContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<ServerResponse>({
    message: "",
    type: "idle",
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactSchema) => {
    setLoading(true);
    try {
      const response = await sendMessageAction(data);
      if (response.type === "success") reset();
      setMessage(response);
    } catch (err: any) {
      setMessage({
        message: err.message ?? "An error occurred",
        type: "error",
      });
    }
    setLoading(false);
  };

  return {
    register,
    errors,
    handleSubmit,
    onSubmit,
    loading,
    message,
  };
};

export default useContactForm;

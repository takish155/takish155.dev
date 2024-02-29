"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import useContactForm from "@/custom_hooks/useContactForm";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import React from "react";
import { Meteors } from "@/components/ui/meteor-effect";

const ContactForm = ({
  name,
  message,
  email,
  emailError,
  maxMessageError,
  maxNameError,
  minMessageError,
  minNameError,
  submit,
}: {
  name: string;
  message: string;
  email: string;
  minNameError: string;
  maxNameError: string;
  emailError: string;
  minMessageError: string;
  maxMessageError: string;
  submit: string;
}) => {
  const {
    message: contactMessage,
    register,
    errors,
    loading,
    onSubmit,
    handleSubmit,
  } = useContactForm();
  return (
    <form onSubmit={handleSubmit((data) => onSubmit(data))}>
      {contactMessage.message && (
        <p
          data-test={contactMessage.type}
          className={`${
            contactMessage.type === "error"
              ? "bg-red-100 text-red-600"
              : "bg-green-100 text-green-800"
          }  max-w-[500px] w-full  px-4 py-2 mb-5 rounded-lg`}
        >
          {contactMessage.message}
        </p>
      )}
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
        <Label htmlFor="name">{name}</Label>
        <Input type="name" id="name" placeholder={name} {...register("name")} />
        {errors.name && (
          <p className="text-red-500 mt-3">
            {errors.name.message === "minNameError"
              ? minNameError
              : maxNameError}
          </p>
        )}
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
        <Label htmlFor="email">{email}</Label>
        <Input
          type="email"
          id="email"
          placeholder={email}
          {...register("email")}
        />
        {errors.email && <p className="text-red-500 mt-3">{emailError}</p>}
      </div>
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
        <Label htmlFor="message">{message}</Label>
        <Textarea placeholder={message} id="message" {...register("message")} />
        {errors.message && (
          <p className="text-red-500 mt-3">
            {errors.message.message === "minMessageError"
              ? minMessageError
              : maxMessageError}
          </p>
        )}
      </div>
      <Button type="submit" disabled={loading}>
        {submit}
      </Button>
    </form>
  );
};

export default ContactForm;

"use server";

import { ContactSchema, contactSchema } from "@/schema/contactSchema";
import { getTranslations } from "next-intl/server";
import prisma from "../../../../prisma/prisma";
import { ServerResponse } from "@/custom_hooks/useContactForm";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMessageAction = async (
  message: ContactSchema
): Promise<ServerResponse> => {
  const t = await getTranslations("ContactPage");
  try {
    const data = contactSchema.safeParse(message);
    if (!data.success) {
      throw new Error("Invalid data");
    }

    const sameMessage = await prisma?.contact.findFirst({
      where: {
        message: data.data.message,
      },
    });

    if (sameMessage) throw new Error(t("messageAlreadySentError"));

    await prisma?.contact.create({
      data: {
        message: data.data.message,
        email: data.data.email,
        name: data.data.name,
      },
    });

    await resend.emails.send({
      to: "rimutakeshi155@gmail.com",
      from: "takish155.dev <portfolio@takish155.dev>",
      subject: "Someone sent you a message from your portfolio",
      text: `Name: ${data.data.name}\nEmail: ${data.data.email}\nMessage: ${data.data.message}`,
    });

    return {
      message: t("messageSent"),
      type: "success",
    };
  } catch (err) {
    let errorMessage = "";
    if (err instanceof Error) {
      errorMessage = err.message;
    } else {
      errorMessage = String(err);
    }
    return {
      message: errorMessage,
      type: "error",
    };
  }
};

export default sendMessageAction;

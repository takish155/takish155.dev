import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";

const ContactSection = () => {
  const t = useTranslations("ContactPage");
  return (
    <Card className="w-[95%] max-w-[900px] mx-auto my-[15rem]">
      <CardHeader>
        <CardTitle className="mb-2">&#x1F4E9; {t("header")}</CardTitle>
        <CardDescription>{t("description")}</CardDescription>
      </CardHeader>
      <CardContent>
        <ContactForm
          email={t("email")}
          message={t("message")}
          name={t("name")}
          emailError={t("emailError")}
          maxMessageError={t("maxMessageError")}
          maxNameError={t("maxNameError")}
          minMessageError={t("minMessageError")}
          minNameError={t("minNameError")}
          submit={t("submit")}
        />
      </CardContent>
    </Card>
  );
};

export default ContactSection;

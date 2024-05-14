import React from "react";
import { useTranslations } from "next-intl";
import FromBottomAnimation from "@/animation/FromBottomAnimation";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("./ContactForm"));

const ContactSection = () => {
  const t = useTranslations("ContactPage");
  return (
    <FromBottomAnimation>
      <section
        className="w-[95%] max-w-[1080px] mx-auto my-[15rem] flex gap-[5%] flex-wrap"
        id="contact"
      >
        <div className="w-[50%] max-md:w-full mb-8">
          <h2 className="font-semibold text-header mb-4 mt-8">{t("header")}</h2>
          <p className="text-muted-foreground text-paragraph">
            {t("description")}
          </p>
        </div>
        <div className="w-[45%] max-md:w-full">
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
        </div>
      </section>
    </FromBottomAnimation>
  );
};

export default ContactSection;

import React from "react";
import { useTranslations } from "next-intl";
import { Github, Instagram, Mail } from "lucide-react";
import ContactForm from "../contact_section/ContactForm";

const ContactSection = () => {
  const t = useTranslations("ContactPage");
  return (
    <section>
      <section className="flex justify-around flex-wrap gap-4 w-[95%] mx-auto my-[15rem] relative">
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
          contact={t("header")}
        />
        <section className="mt-10 flex flex-col justify-center">
          <div className="mb-5">
            <h2 className="text-paragraph font-semibold flex gap-2 items-center">
              <Mail /> Email
            </h2>
            <p className="text-paragraph">rimutakeshi155@gmail.com</p>
          </div>
          <div className="mb-5">
            <h2 className="text-paragraph font-semibold flex gap-2 items-center">
              <Github /> Github
            </h2>
            <p className="text-paragraph">takish155</p>
          </div>
          <div>
            <h2 className="text-paragraph font-semibold flex gap-2 items-center">
              <Instagram /> Instagram
            </h2>
            <p className="text-paragraph">takish155</p>
          </div>
        </section>
      </section>
    </section>
    // <Card className="w-[95%] max-w-[900px] mx-auto my-[15rem]">
    //   <CardHeader>
    //     <CardTitle className="mb-2">&#x1F4E9; {t("header")}</CardTitle>
    //     <CardDescription>{t("description")}</CardDescription>
    //   </CardHeader>
    //   <CardContent className="flex">
    //     <ContactForm
    //       email={t("email")}
    //       message={t("message")}
    //       name={t("name")}
    //       emailError={t("emailError")}
    //       maxMessageError={t("maxMessageError")}
    //       maxNameError={t("maxNameError")}
    //       minMessageError={t("minMessageError")}
    //       minNameError={t("minNameError")}
    //       submit={t("submit")}
    //     />
    //     <section></section>
    //   </CardContent>
    // </Card>
  );
};

export default ContactSection;

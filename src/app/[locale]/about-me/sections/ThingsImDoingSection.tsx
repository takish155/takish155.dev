import { useTranslations } from "next-intl";
import React from "react";

const ThingsImDoingSection = ({ todo }: { todo: string[] }) => {
  const t = useTranslations("AboutMePage");

  return (
    <section className="mb-14">
      <h2 className="font-semibold text-[2.35rem] pt-[1rem] mb-5">
        {t("heading2")}
      </h2>
      <ul
        className=" tablet:w-full list-disc pl-5 text-lg text-muted-foreground"
        id="toDoList"
      >
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ThingsImDoingSection;

import { useTranslations } from "next-intl";
import { DomainFAQClient } from "./DomainFAQClient";

export const DomainFAQ = () => {
    const t = useTranslations("DomainFAQSection");
    const questions = t.raw("questions") as { question: string; answer: string }[];

    return (
        <DomainFAQClient
            title={t.raw("title") as string}
            subtitle={t("subtitle")}
            questions={questions}
        />
    );
};

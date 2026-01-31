import { useTranslations } from "next-intl";
import { HostingPlanGrid } from "./HostingPlanGrid";

export const HostingPlansSection = () => {
    const t = useTranslations("HostingPlansSection");

    const uiText = {
        first_year: t("first_year"),
        billing_cycle: t("billing_cycle"),
        managed_text: t("managed_text"),
        cta_button: t("cta_button"),
    };

    return <HostingPlanGrid plans={t.raw("plans")} uiText={uiText} />;
};


import { useTranslations } from "next-intl";
import { PricingClient } from "./PricingClient";

export const Pricing = () => {
    const t = useTranslations("AnonymousPricing");

    const plans = [
        { key: "starter" },
        { key: "grow" },
        { key: "bigger" }
    ];

    const translatedPlans = plans.map(plan => {
        const base = `plans.${plan.key}`;
        return {
            key: plan.key,
            name: t(`${base}.name`),
            description: t(`${base}.description`),
            price: t(`${base}.price`),
            original_price: t(`${base}.original_price`),
            save_badge: t(`${base}.save_badge`),
            features: t.raw(`${base}.features`) as string[],
        };
    });

    const uiText = {
        title: t("title"),
        subtitle: t("subtitle"),
        managed_server: t("managed_server"),
        order_now: t("order_now"),
    };

    return <PricingClient plans={translatedPlans} uiText={uiText} />;
};

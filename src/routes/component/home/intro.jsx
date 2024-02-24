import { useTranslation } from "react-i18next";
export default function Intro({intro}) {
    const { t } = useTranslation();
    return (
        <p className="px-8 pb-8 text-justify text-lg md:text-xl text-neutral-300">{t(intro)}.</p>
    );
}
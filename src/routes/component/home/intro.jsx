import { useTranslation } from "react-i18next";
export default function Intro({intro}) {
    const { t } = useTranslation();
    return (
        <p className="lg:px-5 lg:pb-3 xl:px-6 xl:pb-6 2xl:px-8 2xl:pb-8 
        text-justify text-neutral-300 
        lg:text-base xl:text-lg 2xl:text-xl">{t(intro)}.</p>
    );
}
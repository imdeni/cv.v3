import { useTranslation } from "react-i18next";
export default function Name({name,job}) {
    const { t } = useTranslation();
    return (
        <div className="lg:px-5 lg:pt-3 xl:px-6 xl:pt-6 2xl:px-8 2xl:pt-8 grid grid-rows-2 xl:gap-1">
            <p className="text-cyan-parent lg:text-2xl xl:text-3xl 2xl:text-4xl md:text-5xl font-bold">{name}</p>
            <p className="text-cyan-parent lg:text-lg xl:text-xl 2xl:text-2xl font-bold">{t(job)}</p>
        </div>
    );
}
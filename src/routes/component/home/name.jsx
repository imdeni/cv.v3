import { useTranslation } from "react-i18next";
export default function Name({name,job}) {
    const { t } = useTranslation();
    return (
        <div className="px-8 pt-8 grid grid-rows-2 gap-1">
            <p className="text-cyan-parent text-4xl md:text-5xl font-bold">{name}</p>
            <p className="text-cyan-parent text-lg md:text-xl font-bold">{t(job)}</p>
        </div>
    );
}
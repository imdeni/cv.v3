import { useTranslation } from "react-i18next";
import { Icon } from '@iconify/react';
export default function ContenctProject({ description, title, link, show }) {

    const { t } = useTranslation();

    const openNewTab = () => {
        window.open(link, '_blank');
    };
    return (
        <div className="hover:scale-105 w-full rounded-xl border border-zinc-800
    bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.9)_50%,transparent_75%,transparent_100%)] 
    bg-zinc-800  overflow-hidden 
    bg-[length:250%_250%,100%_100%] 
    bg-[position:-100%_0,0_0] bg-no-repeat 
    px-4 py-4 lg:px-8 lg:py-8 shadow-2xl relative 
    transition-[background-position_0s_ease] 
    hover:bg-[position:200%_0,0_0] 
    hover:duration-[1000ms]">
            <div className="grid grid-rows-[auto_minmax(auto,auto)] pb-[50px]">
                <h3 className="mb-2 text-md lg:text-lg font-medium tracking-tight text-neutral-200 text-justify">{t(title)}</h3>
                <h3 className="mb-2 text-md lg:text-lg font-medium tracking-tight text-neutral-400 text-justify">{t(description)}</h3>
            </div>
            {show === "Show Website" ? (
                <div id="buttons" className="absolute inset-x-0 bottom-8 left-8 bg-zinc-900 border-2 border-neutral-400 rounded-lg max-w-[200px]">
                    <button id="x" onClick={openNewTab} className="text-xs lg:text-lg bg-zinc-900 w-full text-neutral-400">{t(show)}</button>
                </div>
            ) : null
            }
            {show === "Under maintenance" ? (
                <div id="buttons" className="absolute inset-x-0 bottom-8 left-8 bg-zinc-900 border-2 border-neutral-400 rounded-lg max-w-[200px] lg:max-w-[230px]">
                    <div className="grid grid-cols-1 lg:grid-cols-[190px_minmax(auto,auto)]">
                        <button id="x" className="text-xs lg:text-lg bg-zinc-900 w-full text-neutral-400">{t(show)}</button>
                        <Icon icon="material-symbols:lock-outline" className="w-4 h-4 lg:w-6 lg:h-6 my-2 bg-zinc-900 text-neutral-400 hidden lg:block" />
                    </div>
                </div>
            ) : null
            }
        </div>
    );
}
import { useTranslation } from "react-i18next";
export default function ContentAbout() {
    const { t } = useTranslation();
    return (
        <div className="w-full rounded-xl border border-zinc-800
    bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.9)_50%,transparent_75%,transparent_100%)] 
    bg-zinc-800  overflow-hidden 
    bg-[length:250%_250%,100%_100%] 
    bg-[position:-100%_0,0_0] bg-no-repeat 
    px-8 py-8 shadow-2xl relative 
    transition-[background-position_0s_ease] 
    hover:bg-[position:200%_0,0_0] 
    hover:duration-[1000ms]">

            <div className="grid grid-rows-2-[auto] gap-1">
                <div className="lg:px-5 lg:pt-3 xl:px-6 xl:pt-6 2xl:px-8 2xl:pt-8 grid grid-rows-2 xl:gap-1">
                    <p className="text-cyan-parent text-2xl xl:text-3xl 2xl:text-4xl md:text-5xl font-bold">Deni Achmad</p>
                    <p className="text-cyan-parent text-lg xl:text-xl 2xl:text-2xl font-bold">Software Engineer</p>
                </div>
                <p className="lg:px-5 lg:pb-3 xl:px-6 xl:pb-6 2xl:px-8 2xl:pb-8 text-justify text-neutral-300 
                            text-md lg:text-base xl:text-lg 2xl:text-xl">I build accessible, inclusive products and digital experiences for website.</p>
            </div>
        </div>
    );
}
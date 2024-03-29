import { useTranslation } from "react-i18next";
export default function ContentAbout({desc,section}) {
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

            <div className="px-4 py-1 rounded-lg bg-zinc-800 bg-[linear-gradient(45deg,transparent_25%,rgba(100,100,100,.9)_50%,transparent_75%,transparent_100%)]  w-fit">
                <h1 className="text-md lg:text-lg font-medium tracking-tight text-cyan-parent">{t(section)}</h1>
            </div><br />

            {/* <h3 className="mb-2 text-lg font-medium tracking-tight text-white">Hello!</h3> */}
            <p className="text-md lg:text-lg text-slate-400 tracking-tight text-justify">{t(desc)}
            </p>
        </div>
    );
}
import { useTranslation } from "react-i18next";
import Btns from "./buttonChild"
export default function ContentExperience({ blnAwal, blnAkhir,
    thnAwal, thnAkhir, position, company, jobdesk, show, certificate,
    btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn10, btn11, btn12, btn13, btn14, btn15,
    bar1, bar2, bar3, bar4, bar5, bar6, bar7, bar8, bar9, bar10, bar11, bar12, bar13, bar14, bar15,
    link, link2, space, until }) {

    const { t } = useTranslation();

    const openNewTab = () => {
        window.open(link, '_blank');
    };
    const openNewTab2 = () => {
        window.open(link2, '_blank');
    };
    return (
        <div className="hover:scale-105 w-full rounded-xl border border-zinc-800 shadow shadows
    bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.9)_50%,transparent_75%,transparent_100%)] 
    bg-zinc-900  overflow-hidden 
    bg-[length:250%_250%,100%_100%] 
    bg-[position:-100%_0,0_0] bg-no-repeat 
    px-8 py-8 shadow-2xl relative 
    transition-[background-position_0s_ease] 
    hover:bg-[position:200%_0,0_0] 
    hover:duration-[1000ms]">
            {/* <div className="xs:bg-red-500 sm:bg-yellow-500 md:bg-green-500 lg:bg-blue-500 xl:bg-purple-500 2xl:bg-pink-500 "> */}
            <div className="grid grid-cols-[200px_minmax(auto,auto)] gap-4">
                <h3 className="mb-2 text-right text-lg font-medium tracking-tight text-neutral-400 text-justify">{t(blnAwal)} {t(thnAwal)} {until}{t(blnAkhir)} {t(thnAkhir)}</h3>
                <div className="grid grid-rows-[auto_minmax(auto,auto)]">
                    <h3 className="mb-2 text-lg font-medium tracking-tight text-neutral-200 text-justify">{t(position)} {space}{t(company)}</h3>
                    <h3 className="mb-2 text-lg font-medium tracking-tight text-neutral-400 text-justify">{t(jobdesk)}</h3>
                    <div className="grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-2 pt-2">
                        <Btns btnName={btn1} jumlahBars={bar1} />
                        <Btns btnName={btn2} jumlahBars={bar2} />
                        <Btns btnName={btn3} jumlahBars={bar3} />
                        <Btns btnName={btn4} jumlahBars={bar4} />
                        <Btns btnName={btn5} jumlahBars={bar5} />
                        <Btns btnName={btn6} jumlahBars={bar6} />
                        <Btns btnName={btn7} jumlahBars={bar7} />
                        <Btns btnName={btn8} jumlahBars={bar8} />
                        <Btns btnName={btn9} jumlahBars={bar9} />
                        <Btns btnName={btn10} jumlahBars={bar10} />
                        <Btns btnName={btn11} jumlahBars={bar11} />
                        <Btns btnName={btn12} jumlahBars={bar12} />
                        <Btns btnName={btn13} jumlahBars={bar13} />
                        <Btns btnName={btn14} jumlahBars={bar14} />
                        <Btns btnName={btn15} jumlahBars={bar15} />
                    </div>
                </div>
                {show !== "" ? (
                    <div id="buttons" className="bg-zinc-900 border-2 border-neutral-400 rounded-lg">
                        <button id="x" onClick={openNewTab} className="bg-zinc-900 w-full text-neutral-400">{t(show)}</button>
                    </div>
                ) : null
                }
                {certificate !== "" ? (
                    <div id="buttons" className="bg-zinc-900 border-2 border-neutral-400 rounded-lg">
                        <button id="x" onClick={openNewTab2} className="bg-zinc-900 w-full text-neutral-400">{t(certificate)}</button>
                    </div>
                ) : null
                }
            </div>
            {/* </div> */}
        </div>
    );
}
import { useTranslation } from "react-i18next";
export default function ButtonChild({ btnName,jumlahBars }) {
    const { t } = useTranslation();
    return (
        btnName !== "" ? (
            <div id="buttons" className="bg-transparent border-2 border-neutral-400 rounded-lg">
                <div className="lg:grid lg:grid-cols-[100px_minmax(auto,auto)] place-items-center gap-2">
                    <button id="x" className="pointer-events-none buttons bg-transparent rounded-lg w-full text-neutral-400 text-xs lg:text-lg">{t(btnName)}</button>
                    <div className={`signal-bars sizing-box hidden lg:block ${jumlahBars}`}>
                        <div className="first-bar bar"></div>
                        <div className="second-bar bar"></div>
                        <div className="third-bar bar"></div>
                        <div className="fourth-bar bar"></div>
                        <div className="fifth-bar bar"></div>
                    </div>
                </div>

            </div>
        ) : null
    );
}
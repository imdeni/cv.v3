import IsiConent from "../component/home/content";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TaskIcon from '@mui/icons-material/Task';
import SettingsIcon from '@mui/icons-material/Settings';
import { Icon } from '@iconify/react';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import React, { useState } from "react";
import reactIMG from "../../assets/react.png";
import cIMG from "../../assets/c.png";
import vueIMG from "../../assets/vue.png";
import viteIMG from "../../assets/vite.png";
import mysqlIMG from "../../assets/mysql.png";
import sqlIMG from "../../assets/sql.png";
import xamppIMG from "../../assets/xamp.png";
import apiIMG from "../../assets/api.png";
import cssIMG from "../../assets/css.png";
import jsIMG from "../../assets/js.png";
import htmlIMG from "../../assets/html.png";
import twIMG from "../../assets/tw.png";
import gitIMG from "../../assets/git.png";
import githubIMG from "../../assets/github.png";
import ksIMG from "../../assets/ks.png";
import drIMG from "../../assets/dr.png";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
    handleClose();
  }
  return (
    <>

      <div className="bg-black bg-opacity-75 w-screen h-max">

        <div id="nav" className="z-40 fixed xl:inset-x-1/4 max-w-lg md:py-16 xl:-ml-[250px] 2xl:-ml-[150px]">
          <div className="px-8 py-2 lg:px-8 lg:py-8 max-w-lg">

            <div className="grid grid-rows-2 gap-1">
              <p className="text-4xl md:text-5xl text-neutral-200 font-bold">Deni Achmad</p>
              <p className="text-lg md:text-xl text-neutral-300 font-bold">{t('job_view')}</p>
            </div>
            <p className="text-lg md:text-xl text-neutral-400">{t('intro_view')}.</p>
            <br />

            <div className="grid grid-cols-4 gap-2 max-w-sm">
              <div onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector("#about").offsetTop,
                  behavior: "smooth",
                });
              }} className="hover:scale-110 grid grid-row-2 border border-neutral-400 text-neutral-400 p-2 rounded-lg hover:text-white hover:border-white">
                <p className="flex justify-center"><AccountCircleIcon fontSize="large" /></p>
                <p className="flex justify-center">About</p>
              </div>

              <div onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector("#experience").offsetTop,
                  behavior: "smooth",
                });
              }} className="hover:scale-110 grid grid-row-2 border border-neutral-400 text-neutral-400 p-2 rounded-lg hover:text-white hover:border-white">
                <p className="flex justify-center"><WorkHistoryIcon fontSize="large" /></p>
                <p className="flex justify-center">Experience</p>
              </div>

              <div onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector("#project").offsetTop,
                  behavior: "smooth",
                });
              }} className="hover:scale-110 grid grid-row-2 border border-neutral-400 text-neutral-400 p-2 rounded-lg hover:text-white hover:border-white">
                <p className="flex justify-center"><TaskIcon fontSize="large" /></p>
                <p className="flex justify-center">Project</p>
              </div>

              <div onClick={handleShow} className="hover:scale-110 grid grid-row-2 border border-neutral-400 text-neutral-400 p-2 rounded-lg hover:text-white hover:border-white">
                <div className="flex justify-center">
                  <div className="block lg:hidden">
                    <SettingsIcon sx={{ fontSize: 20 }} />
                  </div>
                  <div className="hidden lg:block">
                    <SettingsIcon sx={{ fontSize: 40 }} />
                  </div>
                </div>
                <p className="flex justify-center">Language</p>
              </div>

            </div>

            <div className="grid grid-rows-2 gap-8">
              <div className="grid grid-cols-2 gap-2 place-items-center">
                <div className="lg:py-16 changer">
                  <img src={vueIMG} alt="vueIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                  <img src={viteIMG} alt="viteIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                  <img src={cIMG} alt="cIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                  <img src={reactIMG} alt="reactIMG" className="w-32 h-32 grayscale absolute bg-zinc-700 p-2" />
                </div>
                <div className="lg:py-16 changer">
                  <img src={apiIMG} alt="apiIMG" className="w-32 h-32 grayscale absolute bg-zinc-700 p-2" />
                  <img src={xamppIMG} alt="xamppIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                  <img src={sqlIMG} alt="sqlIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                  <img src={mysqlIMG} alt="mysqlIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 place-items-center">
                <div className="lg:py-16 changer">
                  <img src={twIMG} alt="twIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                  <img src={jsIMG} alt="jsIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                  <img src={htmlIMG} alt="htmlIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                  <img src={cssIMG} alt="cssIMG" className="w-32 h-32 grayscale absolute bg-zinc-700 p-2" />
                </div>
                <div className="lg:py-16 changer">
                  <img src={ksIMG} alt="ksIMG" className="w-32 h-32 grayscale absolute bg-zinc-700 p-2" />
                  <img src={drIMG} alt="drIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                  <img src={githubIMG} alt="githubIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                  <img src={gitIMG} alt="gitIMG" className="w-32 h-32 grayscale absolute  bg-zinc-700 p-2" />
                </div>
              </div>
            </div>


          </div>
        </div>

        <div className="grid grid-rows-[auto] justify-center lg:ml-[480px] xl:ml-[650px] 2xl:ml-[800px]">
          <div className="pt-8" id="about">
            <div className="mt-[300px] lg:mt-[0px] w-auto mx-8 my-2 rounded-xl max-w-5xl">
              <IsiConent />
            </div>
          </div>


          <div id="experience" className="w-auto mx-8 my-2 p-8 rounded-xl bg-zinc-900 grid gap-4 grid-rows max-w-5xl">
            <IsiConent />
            <IsiConent />
            <IsiConent />
            <IsiConent />
          </div>

          <div id="project" className="w-auto mx-8 my-2 p-8 rounded-xl bg-zinc-900 grid gap-4 grid-rows max-w-5xl">
            <IsiConent />
            <IsiConent />
            <IsiConent />
            <IsiConent />
          </div>


        </div>

      </div >

      {show == true &&
        <div className=" fixed z-[999] grid w-screen h-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="relative m-4 w-fit lg:w-1/5 max-w-[33.333333%] rounded-lg bg-zinc-500 font-sans text-base font-light leading-relaxed antialiased shadow-2xl">
            <div className="flex items-center p-4 font-sans text-neutral-100 text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
              Choose Language
            </div>
            <div className="relative flex justify-center p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
              <div className="grid grid-cols-2 gap-4">
                <button onClick={handleClick} value="idn" className="hover:bg-zinc-700">
                  <Icon className="w-16 h-16 border-2 border-black border-opacity-75 rounded-full pointer-events-none" icon="emojione:flag-for-indonesia" />
                </button>
                <button onClick={handleClick} value="en" className="hover:bg-zinc-700">
                  <Icon className="w-16 h-16 border-2 border-black border-opacity-75 rounded-full pointer-events-none" icon="circle-flags:uk" />
                </button>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
              <button onClick={handleClose}
                className="px-6 py-3 mr-1 font-sans text-xs font-bold text-black uppercase transition-all rounded-lg middle none center hover:bg-black hover:bg-opacity-75 hover:text-neutral-300 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                Cancel
              </button>
            </div>
          </div>
        </div>
      }

    </>
  );
}
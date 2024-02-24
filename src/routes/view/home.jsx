import IsiConentExperience from "../component/home/contentExperience";
import IsiConentAbout from "../component/home/contentAbout";
import IsiConentProject from "../component/home/contentProject";

import BackgroundAnimate from "../component/home/bgAnimate"
import BackgroundBarAnimate from "../component/home/barAnimate";
import Image from "../component/home/image";
import BtnSosmed from "../component/home/btnSosmed";
import ButtonView from "../component/home/button"
import HomeIntro from "../component/home/homeIntro"
import Certificate from "../../assets/deni.pdf"

import { Icon } from '@iconify/react';
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import React, { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [bgColorAbout, setBgColorAbout] = useState('#404040');
  const [bgColorExp, setBgColorExp] = useState('#404040');
  const [bgColorproject, setBgColorProject] = useState('#404040');
  const [scaleCss1, setScaleCss1] = useState('scale(1)');
  const [scaleCss2, setScaleCss2] = useState('scale(1)');
  const [scaleCss3, setScaleCss3] = useState('scale(1)');


  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
    handleClose();
  }

  const cssChangerAbout = () => {
    setScaleCss1('scale(1.2)');
    setScaleCss2('scale(1)');
    setScaleCss3('scale(1)');
    setBgColorAbout('cyan');
    setBgColorExp('#404040');
    setBgColorProject('#404040');
  };
  const cssChangerExp = () => {
    setScaleCss1('scale(1)');
    setScaleCss2('scale(1.2)');
    setScaleCss3('scale(1)');
    setBgColorExp('cyan');
    setBgColorAbout('#404040');
    setBgColorProject('#404040');
  };
  const cssChangerProject = () => {
    setScaleCss1('scale(1)');
    setScaleCss2('scale(1)');
    setScaleCss3('scale(1.2)');
    setBgColorProject('cyan');
    setBgColorAbout('#404040');
    setBgColorExp('#404040');
  };

  return (
    <>

      <div className="bg-black bg-opacity-75 w-screen h-max">

        <BackgroundAnimate />

        <div id="nav" className="z-40 fixed xl:inset-x-1/4 max-w-lg md:py-16 xl:-ml-[270px] 2xl:-ml-[170px] invisible lg:visible">
          <div className="px-8 py-2 lg:py-0">

            <BackgroundBarAnimate />

            <HomeIntro />
            <br />

            <div className="grid grid-cols-4 gap-4 max-w-md ">

              <div onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector("#about").offsetTop,
                  behavior: "smooth",
                });
                cssChangerAbout();
              }}
                style={{ backgroundColor: bgColorAbout, transform: scaleCss1 }}
                className="rounded-lg">
                <ButtonView icon="AccountCircleIcon" buttonName="About" />
              </div>

              <div onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector("#experience").offsetTop,
                  behavior: "smooth",
                });
                cssChangerExp();
              }}
                style={{ backgroundColor: bgColorExp, transform: scaleCss2 }}
                className="rounded-lg">
                <ButtonView icon="WorkHistoryIcon" buttonName="Experience" />
              </div>

              <div onClick={(e) => {
                e.preventDefault();
                window.scrollTo({
                  top: document.querySelector("#project").offsetTop,
                  behavior: "smooth",
                });
                cssChangerProject();
              }}
                style={{ backgroundColor: bgColorproject, transform: scaleCss3 }}
                className="rounded-lg">
                <ButtonView icon="TaskIcon" buttonName="Project" />
              </div>

              <div onClick={handleShow} >
                <ButtonView icon="SettingsIcon" buttonName="Language" />
              </div>

            </div>

            <Image />
            <BtnSosmed />

          </div>
        </div>

        <div className="grid grid-rows-[auto] justify-center lg:ml-[480px] xl:ml-[650px] 2xl:ml-[800px]">
          <div className="pt-16" id="about">

            <div className="mt-[300px] lg:mt-[0px] w-auto mx-8 my-2 rounded-xl max-w-5xl">
              <IsiConentAbout />
            </div>
          </div>


          <div id="experience" className="w-auto mx-8 my-2 p-8 rounded-xl bg-zinc-900 grid gap-4 grid-rows max-w-5xl">

            <div className="px-4 py-1 rounded-lg bg-zinc-900 bg-[linear-gradient(45deg,transparent_25%,rgba(100,100,100,.9)_50%,transparent_75%,transparent_100%)]  w-fit">
              <h1 className="text-lg font-medium tracking-tight text-cyan-parent">Experience</h1>
            </div>

            <IsiConentExperience
              blnAwal="August"
              blnAkhir="September"
              thnAwal=""
              thnAkhir="2019"
              position="Internship"
              jobdesk="Developed interactive website apps for Department of Cooperatives, including the user interface of Cooperatives website used to record cooperative activities per three months with calculations calculated by the system"
              company="Department of Cooperatives and Small and Medium Enterprises of Central Java"
              show="Show Website"
              certificate=""
              link="https://dinkop-umkm.jatengprov.go.id/"
              btn1="CodeIgniter"
              btn2="CSS"
              btn3="HTML"
              btn4="Javascript"
              btn5="mySql"
              btn6=""
              btn7=""
              btn8=""
              btn9=""
              btn10=""
              btn11=""
              btn12=""
              btn13=""
              btn14=""
              btn15=""
              // one-bars two-bars three-bars four-bars
              bar1="four-bars"
              bar2="four-bars"
              bar3="four-bars"
              bar4="three-bars"
              bar5="four-bars"
              bar6=""
              bar7=""
              bar8=""
              bar9=""
              bar10=""
              space="● "
              until="- "
            />
            <IsiConentExperience
              blnAwal=""
              blnAkhir=""
              thnAwal="2016"
              thnAkhir="2020"
              position="Graduated"
              jobdesk="PGRI Semarang University"
              company="Bachelor of Computer Information Systems"
              show=""
              certificate=""
              link=""
              btn1=""
              btn2=""
              btn3=""
              btn4=""
              btn5=""
              btn6=""
              btn7=""
              btn8=""
              btn9=""
              btn10=""
              btn11=""
              btn12=""
              btn13=""
              btn14=""
              btn15=""
              space="● "
              until="- "
            />
            <IsiConentExperience
              blnAwal=""
              blnAkhir=""
              thnAwal="2021"
              thnAkhir="Present"
              position="Freelance"
              jobdesk="Developed, maintained, and shipped production code for client websites."
              company="Software Engineer"
              show=""
              certificate=""
              link=""
              btn1="React.js"
              btn2="Vue.js"
              btn3="CodeIgniter"
              btn4="Laravel"
              btn5="Tailwind"
              btn6="CSS"
              btn7="API"
              btn8="HTML"
              btn9="Javascript"
              btn10="MySql"
              btn11="SqlServer"
              btn12="Xampp"
              btn13="Git"
              btn14="GitHub"
              btn15="C#"
              // one-bars two-bars three-bars four-bars
              bar1="four-bars"
              bar2="four-bars"
              bar3="four-bars"
              bar4="three-bars"
              bar5="four-bars"
              bar6="four-bars"
              bar7="four-bars"
              bar8="four-bars"
              bar9="three-bars"
              bar10="four-bars"
              bar11="four-bars"
              bar12="four-bars"
              bar13="four-bars"
              bar14="four-bars"
              bar15="four-bars"
              space="● "
              until="- "
            />
            <IsiConentExperience
              blnAwal="March"
              blnAkhir="June"
              thnAwal="2022"
              thnAkhir="2023"
              position="IT Programmer"
              jobdesk="Developed, maintained, and shipped production code for client website. Desktop apps maintenance & management. Database maintenance and data management. troubleshooting and maintenance software."
              company="PT Macananjaya Cemerlang"
              show="Show Website"
              certificate=""
              link="https://macanan.co.id/"
              // one-bars two-bars three-bars four-bars
              btn1="Vue.js"
              bar1="four-bars"
              btn2="Laravel"
              bar2="three-bars"
              btn3="Tailwind"
              bar3="four-bars"
              btn4="Foxpro"
              bar4="three-bars"
              btn5="VB6"
              bar5="four-bars"
              btn6="HTML"
              bar6="four-bars"
              btn7="CSS"
              bar7="four-bars"
              btn8="Javascript"
              bar8="three-bars"
              btn9="SqlServer"
              bar9="four-bars"
              btn10="Postman"
              bar10="four-bars"
              btn11="API"
              bar11="four-bars"
              btn12=""
              bar12=""
              btn13=""
              bar13=""
              btn14=""
              bar14=""
              btn15=""
              bar15=""
              space="● "
              until="- "
            />
            <IsiConentExperience
              blnAwal="Nov"
              blnAkhir="January"
              thnAwal="2023"
              thnAkhir="2024"
              position="Software Engineer"
              jobdesk="Learn an intensive educational programs that focus on C# programming language, ASP.NET Core 7 framework and includes debugging techniques, entity framework, loggers, Unit testing and design patterns. practice exam for making games using c# and creating websites using ASP.NET."
              company="PT Formulatrix"
              show="Show Website"
              certificate="Show Certificate"
              link="https://formulatrix.com/"
              link2={Certificate}
              // one-bars two-bars three-bars four-bars
              btn1="C#"
              bar1="four-bars"
              btn2="ASP.NET7"
              bar2="four-bars"
              btn3=""
              bar3=""
              btn4=""
              bar4=""
              btn5=""
              bar5=""
              btn6=""
              bar6=""
              btn7=""
              bar7=""
              btn8=""
              bar8=""
              btn9=""
              bar9=""
              btn10=""
              bar10=""
              btn11=""
              bar11=""
              btn12=""
              bar12=""
              btn13=""
              bar13=""
              btn14=""
              bar14=""
              btn15=""
              bar15=""
              space="● "
              until="- "
            />
          </div>

          <div id="project" className="w-auto mx-8 my-2 p-8 rounded-xl bg-zinc-900 grid gap-4 grid-rows max-w-5xl">

            <div className="px-4 py-1 rounded-lg bg-zinc-900 bg-[linear-gradient(45deg,transparent_25%,rgba(100,100,100,.9)_50%,transparent_75%,transparent_100%)]  w-fit">
              <h1 className="text-lg font-medium tracking-tight text-cyan-parent">Project</h1>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <IsiConentProject title="CV Deni (v.1)" description="My website CV and Portfolio version 1." show="Show Website" link="" />
              <IsiConentProject title="CV Deni (v.2)" description="My website CV and Portfolio version 2." show="Show Website" link="" />
              <IsiConentProject title="Saloka" description="Saloka website company profile. Test for applying for a job in Saloka, creating a company profile website for one week." show="Show Website" link="" />
              <IsiConentProject title="SI Apotek" description="SI Apotek is an information system that is used for monitoring pharmacy data. System is also equipped with daily and periodical report features." show="Show Website" link="" />
              <IsiConentProject title="SI Maiga" description="SI Maiga is an information system used for monitoring and determine student achievement, based on the average value of students which is calculated automatically by the system." show="Show Website" link="" />
              <IsiConentProject title="SI SPK" description="SI SPK is a decision support system that is used to determine prospective recipients of the Family Hope Program (PKH) automatically by a system based on the SMART algorithm (Simple Multi Attribute Ratting Technique)." show="Show Website" link="" />
              <IsiConentProject title="SI Koperasi" description="SI Koperasi is a Cooperative Information System used to record cooperative activities per three months with calculations calculated by the system ." show="Show Website" link="" />
              <IsiConentProject title="SI Toko" description="SI Toko is an information system used in stores that aims to manage stock of goods, sales and purchasing of goods." show="Show Website" link="" />
              <IsiConentProject title="SI Motor" description="SI Motor is a Website-based Motorbike Rental Information System." show="Show Website" link="" />
            </div>
          </div>


        </div>

      </div >

      {show == true &&
        <div className=" fixed z-[999] grid w-screen h-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm">
          <div className="relative m-4 w-fit lg:w-1/5 max-w-[33.333333%] rounded-lg bg-zinc-500 font-sans text-base font-light leading-relaxed antialiased shadow-2xl">
            <div className="flex items-center p-4 font-sans text-neutral-100 text-2xl antialiased font-semibold leading-snug shrink-0 text-blue-gray-900">
              {t('Choose Language')}
            </div>
            <div className="relative flex justify-center p-4 font-sans text-base antialiased font-light leading-relaxed border-t border-t-blue-gray-100 border-b-blue-gray-100 text-blue-gray-500">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid grid-rows-[auto]">
                  <button onClick={handleClick} value="idn" className="hover:bg-zinc-700">
                    <Icon className="w-16 h-16 border-2 border-black border-opacity-75 rounded-full pointer-events-none" icon="emojione:flag-for-indonesia" />
                  </button>
                  <p className="flex justify-center font-bold text-neutral-200">{t('idn')}</p>
                </div>
                <div className="grid grid-rows-[auto]">
                  <button onClick={handleClick} value="en" className="hover:bg-zinc-700">
                    <Icon className="w-16 h-16 border-2 border-black border-opacity-75 rounded-full pointer-events-none" icon="circle-flags:uk" />
                  </button>
                  <p className="flex justify-center font-bold text-neutral-200">{t('en')}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-end p-4 shrink-0 text-blue-gray-500">
              <button onClick={handleClose}
                className="px-6 mr-2 font-sans text-xs font-bold text-black uppercase transition-all rounded-lg middle none center hover:bg-black hover:bg-opacity-75 hover:text-neutral-300 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                {t('Cancel')}
              </button>
            </div>
          </div>
        </div>
      }

    </>
  );
}
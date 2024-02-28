import ImgSkill from "../../component/home/imgSkill";

import reactIMG from "../../../assets/react.png";
import cIMG from "../../../assets/c.png";
import vueIMG from "../../../assets/vue.png";
import viteIMG from "../../../assets/vite.png";
import mysqlIMG from "../../../assets/mysql.png";
import sqlIMG from "../../../assets/sql.png";
import xamppIMG from "../../../assets/xamp.png";
import apiIMG from "../../../assets/api.png";
import cssIMG from "../../../assets/css.png";
import jsIMG from "../../../assets/js.png";
import htmlIMG from "../../../assets/html.png";
import twIMG from "../../../assets/tw.png";
import gitIMG from "../../../assets/git.png";
import githubIMG from "../../../assets/github.png";
import ksIMG from "../../../assets/ks.png";
import drIMG from "../../../assets/dr.png";

export default function Image() {
    return (
        <div className="grid grid-rows-2 2xl:gap-8 
        lg:pb-2 xl:pb-20 2xl:pb-28
        lg:ml-[60px] 2xl:ml-0
        lg:-mt-[40px] xl:-mt-[40px] 2xl:-mt-[25px]">
              <div className="grid grid-cols-2 2xl:gap-2 place-items-center 
              ">
                <div className="lg:py-16 changer">
                  <ImgSkill name={vueIMG} altname="vueIMG"/>
                  <ImgSkill name={viteIMG} altname="viteIMG"/>
                  <ImgSkill name={cIMG} altname="cIMG"/>
                  <ImgSkill name={reactIMG} altname="reactIMG"/>
                </div>
                <div className="lg:py-16 changer">
                  <ImgSkill name={apiIMG} altname="apiIMG"/>
                  <ImgSkill name={xamppIMG} altname="xamppIMG"/>
                  <ImgSkill name={sqlIMG} altname="sqlIMG"/>
                  <ImgSkill name={mysqlIMG} altname="mysqlIMG"/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 place-items-center 
              lg:-mt-[40px] xl:-mt-[40px] 2xl:-mt-0">
                <div className="lg:py-16 changer">
                  <ImgSkill name={twIMG} altname="twIMG"/>
                  <ImgSkill name={jsIMG} altname="jsIMG"/>
                  <ImgSkill name={htmlIMG} altname="htmlIMG"/>
                  <ImgSkill name={cssIMG} altname="cssIMG"/>
                </div>
                <div className="lg:py-16 changer">
                  <ImgSkill name={ksIMG} altname="ksIMG"/>
                  <ImgSkill name={drIMG} altname="drIMG"/>
                  <ImgSkill name={githubIMG} altname="githubIMG"/>
                  <ImgSkill name={gitIMG} altname="gitIMG"/>
                </div>
              </div>
            </div>
    );
}
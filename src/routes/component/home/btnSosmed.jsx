import { Icon } from '@iconify/react';
export default function BtnSosmed() {
  const tailwind = "lg:w-10 lg:h-10 xl:w-12 xl:h-12 border border-neutral-400 p-2 rounded-lg text-neutral-300 hover:text-white hover:border-white hover:scale-150 hover:duration-[400ms] hover:bg-zinc-500"
  const openGmail = () => {
    window.open('https://mail.google.com/mail/u/0/?fs=1&to=im.deniachmad@gmail.com&tf=cm', '_blank');
  };
  const openGit = () => {
    window.open('https://github.com/imdeni', '_blank');
  };
  const openWa = () => {
    window.open('https://api.whatsapp.com/send?phone=6285803619114', '_blank');
  };
  const openIg = () => {
    window.open('https://www.instagram.com/dee__721/', '_blank');
  };
  const openLinkedin = () => {
    window.open('https://linkedin.com/in/deni-achmad-813938289', '_blank');
  };
  return (
    <div className=" flex justify-center">
      <div className="w-fit grid grid-cols-5 gap-2 xl:gap-6">
        <Icon onClick={openGmail} className={tailwind} icon="mdi-gmail" />
        <Icon onClick={openGit} className={tailwind} icon="ant-design:github-filled" />
        <Icon onClick={openWa} className={tailwind} icon="mingcute:whatsapp-line" />
        <Icon onClick={openIg} className={tailwind} icon="mdi-instagram" />
        <Icon onClick={openLinkedin} className={tailwind} icon="mingcute:linkedin-fill" />

      </div>
    </div>
  );
}
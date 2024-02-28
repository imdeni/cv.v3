import { Icon } from '@iconify/react';
export default function BtnSosmed() {
    return (
        <div className=" flex justify-center">
              <div className="w-fit grid grid-cols-5 gap-2 xl:gap-6">
                <Icon className="lg:w-10 lg:h-10 xl:w-12 xl:h-12 border border-neutral-400 p-2 rounded-lg text-neutral-300 hover:text-white hover:border-white hover:scale-150 hover:duration-[400ms] hover:bg-zinc-500" icon="mdi-gmail" />
                <Icon className="lg:w-10 lg:h-10 xl:w-12 xl:h-12 border border-neutral-400 p-2 rounded-lg text-neutral-300 hover:text-white hover:border-white hover:scale-150 hover:duration-[400ms] hover:bg-zinc-500" icon="ant-design:github-filled" />
                <Icon className="lg:w-10 lg:h-10 xl:w-12 xl:h-12 border border-neutral-400 p-2 rounded-lg text-neutral-300 hover:text-white hover:border-white hover:scale-150 hover:duration-[400ms] hover:bg-zinc-500" icon="mingcute:whatsapp-line" />
                <Icon className="lg:w-10 lg:h-10 xl:w-12 xl:h-12 border border-neutral-400 p-2 rounded-lg text-neutral-300 hover:text-white hover:border-white hover:scale-150 hover:duration-[400ms] hover:bg-zinc-500" icon="mdi-instagram" />
                <Icon className="lg:w-10 lg:h-10 xl:w-12 xl:h-12 border border-neutral-400 p-2 rounded-lg text-neutral-300 hover:text-white hover:border-white hover:scale-150 hover:duration-[400ms] hover:bg-zinc-500" icon="mingcute:linkedin-fill" />

              </div>
            </div>
    );
}
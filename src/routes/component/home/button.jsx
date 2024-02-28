import { useTranslation } from "react-i18next";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TaskIcon from '@mui/icons-material/Task';
import SettingsIcon from '@mui/icons-material/Settings';
import BackspaceIcon from '@mui/icons-material/Backspace';
import React, { useState } from "react";

export default function Intro({ icon, buttonName }) {
    const { t } = useTranslation();

    return (

        <div className="lg:w-auto lg:h-[50px] xl:h-[70px]
        2xl:w-full 2xl:h-full 
        buttons-shadow hover:cursor-pointer lg:hover:scale-110 
        grid grid-row-2 border border-neutral-400 text-neutral-400 
        xl:p-2 rounded-lg hover:text-white hover:border-white">
            <div className="flex justify-center">
                {icon == "AccountCircleIcon" &&
                    <div>
                        <p className="block 2xl:hidden">
                            <AccountCircleIcon sx={{ fontSize: 25 }} />
                        </p>
                        <p className="hidden 2xl:block">
                            <AccountCircleIcon sx={{ fontSize: 40 }} />
                        </p>
                    </div>
                }
                {icon == "WorkHistoryIcon" &&
                    <div>
                        <p className="block 2xl:hidden">
                            <WorkHistoryIcon sx={{ fontSize: 25 }} />
                        </p>
                        <p className="hidden 2xl:block">
                            <WorkHistoryIcon sx={{ fontSize: 40 }} />
                        </p>
                    </div>
                }
                {icon == "TaskIcon" &&
                    <div>
                        <p className="block 2xl:hidden">
                            <TaskIcon sx={{ fontSize: 25 }} />
                        </p>
                        <p className="hidden 2xl:block">
                            <TaskIcon sx={{ fontSize: 40 }} />
                        </p>
                    </div>
                }
                {icon == "SettingsIcon" &&
                    <div>
                        <p className="block 2xl:hidden">
                            <SettingsIcon sx={{ fontSize: 25 }} />
                        </p>
                        <p className="hidden 2xl:block">
                            <SettingsIcon sx={{ fontSize: 40 }} />
                        </p>
                    </div>
                }
                {icon == "BackspaceIcon" &&
                    <div>
                        <p className="block 2xl:hidden">
                            <BackspaceIcon sx={{ fontSize: 25 }} />
                        </p>
                        <p className="hidden 2xl:block">
                            <BackspaceIcon sx={{ fontSize: 40 }} />
                        </p>
                    </div>
                }
            </div>
            <p className="flex justify-center text-xs xl:text-lg 2xl:text-xl">{t(buttonName)}</p>
        </div>
    );
}
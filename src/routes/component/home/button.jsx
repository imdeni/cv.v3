import { useTranslation } from "react-i18next";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import TaskIcon from '@mui/icons-material/Task';
import SettingsIcon from '@mui/icons-material/Settings';
import React, { useState } from "react";

export default function Intro({ icon, buttonName }) {
    const { t } = useTranslation();

    return (

        <div className="buttons-shadow hover:cursor-pointer hover:scale-110 grid grid-row-2 border border-neutral-400 text-neutral-400 p-2 rounded-lg hover:text-white hover:border-white">
            <div className="flex justify-center">
                {icon == "AccountCircleIcon" &&
                    <div>
                        <p className="block lg:hidden">
                            <AccountCircleIcon sx={{ fontSize: 20 }} />
                        </p>
                        <p className="hidden lg:block">
                            <AccountCircleIcon sx={{ fontSize: 40 }} />
                        </p>
                    </div>
                }
                {icon == "WorkHistoryIcon" &&
                    <div>
                        <p className="block lg:hidden">
                            <WorkHistoryIcon sx={{ fontSize: 20 }} />
                        </p>
                        <p className="hidden lg:block">
                            <WorkHistoryIcon sx={{ fontSize: 40 }} />
                        </p>
                    </div>
                }
                {icon == "TaskIcon" &&
                    <div>
                        <p className="block lg:hidden">
                            <TaskIcon sx={{ fontSize: 20 }} />
                        </p>
                        <p className="hidden lg:block">
                            <TaskIcon sx={{ fontSize: 40 }} />
                        </p>
                    </div>
                }
                {icon == "SettingsIcon" &&
                    <div>
                        <p className="block lg:hidden">
                            <SettingsIcon sx={{ fontSize: 20 }} />
                        </p>
                        <p className="hidden lg:block">
                            <SettingsIcon sx={{ fontSize: 40 }} />
                        </p>
                    </div>
                }
            </div>
            <p className="flex justify-center">{t(buttonName)}</p>
        </div>
    );
}
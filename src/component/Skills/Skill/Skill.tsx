import React, {FC, ReactNode} from 'react';
import style from './Skill.module.css'
import {TypeScriptIcon} from "../../../assets/icons/isconSkills/TypeScriptIcon";

type SkillType = {
    children: ReactNode
}

export const Skill: FC<SkillType> = () => {
    return (
        <div className={style.skill}>
            <TypeScriptIcon/>
        </div>
    );
};


import React from 'react';
import style from './Skills.module.css'
import {Skill} from "./Skill/Skill";
import {TypeScriptIcon} from "../../assets/icons/isconSkills/TypeScriptIcon";
import {ReduxIcons} from "../../assets/icons/isconSkills/ReduxIcons";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <Skill>
                <TypeScriptIcon/>
            </Skill>
            <Skill>
                <ReduxIcons/>
            </Skill>
        </div>
    );
};


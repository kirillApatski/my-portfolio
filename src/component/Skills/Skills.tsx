import React from 'react';
import style from './Skills.module.css'
import {Skill} from "./Skill/Skill";
import {TypeScriptIcon} from "../../assets/icons/isconSkills/TypeScriptIcon";
import {ReactIcon} from "../../assets/icons/isconSkills/ReactIcon";
import {JavaScriptIcon} from "../../assets/icons/isconSkills/JavaScriptIcon";
import {ReduxIcon} from "../../assets/icons/isconSkills/ReduxIcon";
import {HtmlIcons} from "../../assets/icons/isconSkills/HTMLIcons";
import {CssIcon} from "../../assets/icons/isconSkills/CSSIcon";
import {SassIcon} from "../../assets/icons/isconSkills/SASSIcon";
import {GitIcon} from "../../assets/icons/isconSkills/GitIcon";
import {MaterialUiIcon} from "../../assets/icons/isconSkills/MaterialUiIcon";
import {AxiosIcon} from "../../assets/icons/isconSkills/AxiosIcon";
import {FormicIcon} from "../../assets/icons/isconSkills/FormicIcon";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <Skill>
                <JavaScriptIcon/>
            </Skill>
            <Skill>
                <TypeScriptIcon/>
            </Skill>
            <Skill>
                <ReactIcon/>
            </Skill>
            <Skill>
                <ReduxIcon/>
            </Skill>
            <Skill>
                <HtmlIcons/>
            </Skill>
            <Skill>
                <CssIcon/>
            </Skill>
            <Skill>
                <SassIcon/>
            </Skill>
            <Skill>
                <GitIcon/>
            </Skill>
            <Skill>
                <MaterialUiIcon/>
            </Skill>
            <Skill>
                <AxiosIcon/>
            </Skill>
            <Skill>
                <FormicIcon/>
            </Skill>
        </div>
    );
};



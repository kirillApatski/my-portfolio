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
import {FormicIcon} from "../../assets/icons/isconSkills/FormicIcon";
import {StoryBookIcon} from "../../assets/icons/isconSkills/StoryBookIcon";
import {AxiosIcon} from "../../assets/icons/isconSkills/AxiosIcon";

const skillsData = [
    <JavaScriptIcon/>,
    <TypeScriptIcon/>,
    <ReactIcon/>,
    <ReduxIcon/>,
    <HtmlIcons/>,
    <CssIcon/>,
    <SassIcon/>,
    <GitIcon/>,
    <AxiosIcon/>,
    <MaterialUiIcon/>,
    <FormicIcon/>,
    <StoryBookIcon/>
]

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            {
                skillsData.map((skill, index) => <Skill key={index}>{skill}</Skill>)
            }
        </div>
    );
};



import React from 'react';
import container from '../../common/styles/Container.module.css'
import style from './Skills.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${style.skillsContainer} ${container.container}`}>
                <h2 className={style.skillsTitle}>SKILLS</h2>
                <div className={style.skills}>
                    <Skill title={"JS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                    <Skill title={"CSS"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                    <Skill title={"REACT"} description={"Lorem ipsum dolor sit amet, consectetur adipisicing."}/>
                </div>
            </div>
        </div>
    );
};


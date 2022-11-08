import React, {FC, ReactNode} from 'react';
import style from './Skill.module.css'

type SkillType = {
    children: ReactNode
}

export const Skill: FC<SkillType> = ({children}) => {
    return (
        <div className={style.skill}>
            {children}
        </div>
    );
};


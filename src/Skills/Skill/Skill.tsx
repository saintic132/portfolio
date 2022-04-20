import React from 'react';
import style from './Skill.module.css'

type SkillType = {
    id: number
    title: string
    description: string
}


type SkillPropsType = {
    skill: SkillType[]
}

function Skill(props: SkillPropsType) {
    return (
        <>
            {
                props.skill.map(skill => {
                    return (
                        <div className={style.skill}>
                            <div
                                key={skill.id}
                                className={style.icon}
                            >.</div>
                            <h3>{skill.title}</h3>
                            <span>{skill.description}</span>
                        </div>
                    )
                })
            }
        </>

    );
}

export default Skill;

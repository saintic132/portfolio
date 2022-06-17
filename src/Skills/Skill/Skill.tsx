import React from 'react';
import style from './Skill.module.scss'

type SkillType = {
    id: number
    title: string
    description: string
    img: string
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
                        <div
                            key={skill.id}
                            className={style.skill}>
                            <img
                                className={style.icon}
                                src={skill.img}
                                alt=""/>
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

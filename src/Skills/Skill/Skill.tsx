import React from 'react';
import style from './Skill.module.css'

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
                            <h2>{skill.title}</h2>
                            <span>{skill.description}</span>
                        </div>
                    )
                })
            }
        </>

    );
}

export default Skill;

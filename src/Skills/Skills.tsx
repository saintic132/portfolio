import React from 'react';
import style from './Skills.module.css'
import styledContainer from '../common/css/Container.module.css'
import Skill from "./Skill/Skill";


function Skills() {

    let skills = [
        {
            id: 1, title: 'JS', description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore'
        },
        {
            id: 2, title: 'CSS', description: 'Lorem ipsum dolor sit '
        },
        {
            id: 3, title: 'React', description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt'
        },
        {
            id: 4,
            title: 'Bla bla',
            description: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit'
        },
    ]

    return (
        <div className={style.skillsBody}>
            <div className={`${styledContainer.container} ${style.container}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill skill={skills}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;

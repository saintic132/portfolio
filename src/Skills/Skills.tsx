import React from 'react';
import style from './Skills.module.css'
import styledContainer from '../common/css/Container.module.css'
import Skill from "./Skill/Skill";
import reactImg from '../common/img/react-icon.png'
import html_css from '../common/img/html&css.png'
import team from '../common/img/teamwork.png'
import other from '../common/img/other.png'


function Skills() {

    let skills = [
        {
            id: 1, title: 'React', description: 'React / Redux / Redux Toolkit / TypeScript / JavaScript' , img: reactImg
        },
        {
            id: 2, title: 'Design', description: 'HTML, CSS, SCSS, MUI, Ant Design', img: html_css
        },
        {
            id: 3, title: 'Team work', description: 'GIT, Jira', img: team
        },
        {
            id: 4, title: 'Other', description: 'Axios / Rest API / Unit Test / StoryBook', img: other
        },
    ]

    return (
            <div className={`${styledContainer.container} ${style.container}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill skill={skills}/>
                </div>
            </div>
    );
}

export default Skills;

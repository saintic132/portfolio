import React from 'react';
import style from './Skills.module.scss'
import styledContainer from '../common/css/Container.module.scss'
import Skill from "./Skill/Skill";
import reactImg from '../assets/img/project/react-icon.png'
import html_css from '../assets/img/project/html&css.png'
import team from '../assets/img/project/teamwork.png'
import other from '../assets/img/project/other.png'

function Skills() {

    let skills = [
        {
            id: 1, title: 'React', description: 'React / Redux / Redux Toolkit / TypeScript / JavaScript', img: reactImg
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
        <div
            id='skills'
            className={`${styledContainer.container} ${style.container}`}>
            <h2 className={style.title}>Skills</h2>
            <div className={styledContainer.line}/>
            <div className={style.skills}>
                <Skill skill={skills}/>
            </div>
        </div>
    );
}

export default Skills;

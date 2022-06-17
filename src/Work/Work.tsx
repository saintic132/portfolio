import React from 'react';
import style from './Work.module.scss'
import styledContainer from '../common/css/Container.module.scss'
import img1 from '../assets/img/project/project-1.png'
import img2 from '../assets/img/project/project-2.jpg'
import img3 from '../assets/img/project/project-3.jpg'
import Project from "./Projects/Project";


function Work() {

    let projects = [
        {
            id: 1,
            name: 'Todolist',
            description: 'React, Redux, TypeScript, Redux Toolkit, Redux-Thunk, React-router-dom, Axios, Mui, Formik, Storybook, Bug fixing, Covering code with unit tests',
            img: img1,
            link: 'https://github.com/saintic132/TodoList',
            client: 'Education project'
        },
        {
            id: 2,
            name: 'Social-network',
            description: 'React, Redux, TypeScript, Redux-Thunk, React-router-dom, Axios, Formik, Bug fixing, deploying',
            img: img2,
            link: 'https://github.com/saintic132/social-network',
            client: 'Self education'
        },
        {
            id: 3,
            name: 'Cards',
            description: 'React, Redux, TypeScript, Redux-Thunk, React-router-dom, Axios, Formik, Yup, Team development, Bug fixing, deploying',
            img: img3,
            link: 'https://github.com/saintic132/Cards',
            client: 'Start-up Company'
        },
    ]

    return (
        <div
            id='works'
            className={style.worksBody}>
            <div className={`${styledContainer.container} ${style.container}`}>
                <h2 className={style.title}>Works</h2>
                <div className={styledContainer.line}/>
                <div className={style.works}>
                    <Project projects={projects}/>
                </div>
            </div>
        </div>
    );
}

export default Work;

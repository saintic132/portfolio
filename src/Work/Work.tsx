import React from 'react';
import style from './Work.module.css'
import styledContainer from '../common/css/Container.module.css'
import img1 from '../common/img/project-1.jpg'
import img2 from '../common/img/project-2.jpg'
import img3 from '../common/img/project-3.jpg'
import Project from "./Projects/Project";


function Work() {

    let projects = [
        {
            id: 1,
            name: 'Todolist',
            description: 'Stack: TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui, Formik, Storybook; Bug fixing, deployin; Covering code with unit tests.',
            img: img1
        },
        {id: 2, name: 'Social-network', description: 'Stack: TypeScript, React, Redux,  Redux-Thunk, React-Router-dom, Axios, Formik; Bug fixing, deployin.', img: img2},
        {
            id: 3,
            name: 'Cards',
            description: 'Stack: TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Formik, Yup.\n' +
                'Team developement; Bug fixing, deployin.',
            img: img3
        },
    ]

    return (
        <div className={style.worksBody}>
            <div className={`${styledContainer.container} ${style.container}`}>
                <h2 className={style.title}>Works</h2>
                <div className={style.works}>
                    <Project projects={projects}/>
                </div>
            </div>
        </div>
    );
}

export default Work;

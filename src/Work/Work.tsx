import React from 'react';
import style from './Work.module.css'
import styledContainer from '../common/css/Container.module.css'
import img1 from '../common/img/project-1.jpg'
import img2 from '../common/img/project-2.jpg'
import img3 from '../common/img/project-3.jpg'
import img4 from '../common/img/project-4.jpg'
import Project from "./Projects/Project";


function Work() {

    let projects = [
        {id: 1, name: 'Project name', description: 'desp 1', img: img1},
        {id: 2, name: 'Project name', description: 'desp 2', img: img2},
        {id: 3, name: 'Project name', description: 'desp 3', img: img3},
        {id: 4, name: 'Project name', description: 'desp 4', img: img4},
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

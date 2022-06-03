import React from 'react';
import style from './Project.module.css'

type ProjectType = {
    id: number
    name: string
    description: string
    img: string
}
type ProjectPropsType = {
    projects: ProjectType[]
}

function Project(props: ProjectPropsType) {

    return (
        <div className={style.project__container}>
            {
                props.projects.map(proj => {
                    return (
                        <div
                            key={proj.id}
                            className={style.projects}>
                            <img
                                src={proj.img}
                                alt="img"/>
                            <h3 className={style.nameProject}>{proj.name}</h3>
                            <span>{proj.description}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Project;

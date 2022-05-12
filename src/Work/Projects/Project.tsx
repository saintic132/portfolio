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
        <>
            {
                props.projects.map(proj => {
                    return (
                        <div className={style.projects}>
                            <img src={proj.img} alt="img"/>
                            <h3 className={style.nameProject}>Name of project</h3>
                            <span>description</span>
                        </div>
                    )
                })
            }
        </>
    );
}

export default Project;

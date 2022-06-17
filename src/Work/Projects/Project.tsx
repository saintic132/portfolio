import React, {useState} from 'react';
import style from './Project.module.css'
import {Modal} from "../../common/modal/Modal";
import {ModalWindowProject} from "./ModalWindowProject/ModalWindowProject";

type ProjectType = {
    id: number
    name: string
    description: string
    img: string
    link: string
    client: string
}
type ProjectPropsType = {
    projects: ProjectType[]
}

function Project(props: ProjectPropsType) {

    const [active, setActive] = useState<boolean>(false);
    const [projectName, setProjectName] = useState<string>('string');
    const [clientName, setClientName] = useState<string>('string');
    const [lang, setLang] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [img, setImg] = useState<string>('');


    const clickToOpenModal = (projName: string, clientN: string, lang: string, link: string, img: string) => {
        setProjectName(projName)
        setClientName(clientN)
        setLang(lang)
        setLink(link)
        setImg(img)
        setActive(true)
    }

    return (

        <div className={style.project__container}>

            {
                active &&
                <Modal
                    active={active}
                    setActive={setActive}>
                    <ModalWindowProject
                        projectName={projectName}
                        clientName={clientName}
                        lang={lang}
                        link={link}
                        img={img}
                        setActive={setActive}
                    />
                </Modal>
            }


            {
                props.projects.map(proj => {
                    return (
                        <div
                            key={proj.id}
                            className={style.project}>
                            <img
                                className={style.project__img}
                                onClick={() => clickToOpenModal(proj.name, proj.client, proj.description, proj.link, proj.img)}
                                src={proj.img}
                                alt="img"/>
                            <div className={style.nameProject}>
                                <h3
                                    onClick={() => clickToOpenModal(proj.name, proj.client, proj.description, proj.link, proj.img)}>
                                    {proj.name}
                                </h3>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Project;

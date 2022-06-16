import React from 'react';
import style from './ModalWindowProject.module.css'
import languageImg from '../../../assets/img/modal_window/tag.png'
import clientImg from '../../../assets/img/modal_window/user.png'
import linkImg from '../../../assets/img/modal_window/link.png'

type ModalWindowProjectPropsType = {
    projectName: string
    clientName: string
    lang: string
    link: string
    img: string
}

export const ModalWindowProject = ({projectName, clientName, lang, link, img}: ModalWindowProjectPropsType) => {
    return (
        <div className={style.windowModal__container}>
            <h3>{projectName}</h3>
            <div className={style.windowModal__body}>
                <div className={style.windowModal__info}>
                    <img src={clientImg} alt="projectimg"/>
                    Client: {clientName}
                </div>
                <div className={style.windowModal__info}>
                    <img src={languageImg} alt="projectimg"/>
                    Stack: {lang}
                </div>
                <div className={style.windowModal__info}>
                    <img src={linkImg} alt="projectimg"/>
                    Preview:
                    <a
                        href={link}>
                        GitHub
                    </a>
                </div>
            </div>
            <div className={style.img}>
                <img src={img} alt="projectImage"/>
            </div>
        </div>
    )
}
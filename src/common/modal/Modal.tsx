import React from 'react';
import style from './Modal.module.css'

type PropsType = {
    active: boolean
    setActive: (value: boolean) => void
    children: React.ReactNode
}

export const Modal = ({active, setActive, children}: PropsType) => {

    const closeModal = () => {
        setActive(false)
    }

    return (
        <div
            className={active ? `${style.modal} ${style.active}` : style.modal}
            onClick={closeModal}
        >
            <div className={active ? `${style.modal__content} ${style.active}` : style.modal__content}
                 onClick={e => e.stopPropagation()}>
                <div className={style.children}>
                    {children}
                </div>
            </div>
        </div>
    )
}
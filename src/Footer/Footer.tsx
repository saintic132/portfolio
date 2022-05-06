import React from 'react';
import style from './Footer.module.css'
import styledContainer from "../common/css/Container.module.css";

export function Footer() {
    return (
        <div className={style.footerBody}>
            <div className={`${styledContainer.container} ${style.container}`}>
                <h2>Иван</h2>
                <div className={style.footer}>

                </div>
            </div>
        </div>
    );
};
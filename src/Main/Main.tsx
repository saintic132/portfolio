import React from 'react';
import style from './Main.module.css'
import styledContainer from '../common/css/Container.module.css'


function Main() {
    return (
        <div className={style.main}>
            <div className={styledContainer.container}>
                <div className={style.photo}>
                    Photo
                </div>
                <div className={style.textBlock}>
                    <h1>I'm Ivan Akhremchyk</h1>
                    <p>Bla bla bla</p>
                </div>
            </div>
        </div>
    );
}

export default Main;

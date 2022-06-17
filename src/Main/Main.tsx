import React from 'react';
import style from './Main.module.scss'
import styledContainer from '../common/css/Container.module.scss'
import photo from '../assets/img/photo.jpg'


function Main() {
    return (
        <div
            id='main'
            className={style.main}>
            <div className={styledContainer.container}>
                <img
                    src={photo}
                    alt="background"/>
                <div className={style.textBlock}>
                    <h1>i'm <u>Ivan Akhremchyk</u></h1>
                    <h3>Front-end developer</h3>
                    <p>Hello, I have experience in creating SPA with React/Redux/TypeScript.</p>
                    <p>Now I am improving my skills in this direction and expanding them with new technologies.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;

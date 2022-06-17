import React from 'react';
import style from './Main.module.css'
import styledContainer from '../common/css/Container.module.css'
import photo from '../assets/img/photo.jpg'


function Main() {
    return (
        <div
            id='main'
            className={style.main}>
            <div className={styledContainer.container}>
                <div className={style.photo}>
                    <img
                        src={photo}
                        alt="background"/>
                </div>
                <div className={style.textBlock}>
                    <h1>i'm  <u>Ivan Akhremchyk</u></h1>
                    <h3>Front-end developer</h3>
                    <p>Hello, I am a person who has a strong passion for
                        programming.</p>
                    <p>I have experience in creating SPA with React/Redux/TypeScript.</p>
                    <p>
                        Now I am improving my skills in
                        this direction and expanding them with new technologies.
                    </p>
                    <p>Open to your suggestions.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;

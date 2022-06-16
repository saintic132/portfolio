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
                    <h1>Hello everyone, my name is Ivan Akhremchyk</h1>
                    <p>I'm a front-end developer with experience building SPAs with ReactJS / Redux / TypeScript. I
                        improve my skills and master new technologies by reading literature and solving problems on
                        Codewars, as well as improving my level of English.
                        Ready to listen to your suggestions.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;

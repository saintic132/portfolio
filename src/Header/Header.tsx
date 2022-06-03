import React from 'react';
import style from './Header.module.css'


function Header() {
    return (
        <div className={style.header__container}>
            <div className={style.nav}>
                <a href="#">
                    Home
                </a>
                <a href="#">
                    Skills
                </a>
                <a href="#">
                    Jobs
                </a>
                <a href="#">
                    Contacts
                </a>
            </div>
        </div>

    )
}

export default Header;

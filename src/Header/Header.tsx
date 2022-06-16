import React from 'react';
import style from './Header.module.css'
import {Link} from "react-scroll";


function Header() {
    return (
        <div className={style.header__container}>
            <div className={style.nav}>
                <Link
                    activeClass={style.active}
                    to="main"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Home</Link>
                <Link
                    activeClass={style.active}
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Skills
                </Link>
                <Link
                    activeClass={style.active}
                    to="works"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Works
                </Link>
                <Link
                    activeClass={style.active}
                    to="contacts"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    Contacts
                </Link>
            </div>
        </div>

    )
}

export default Header;

import React from 'react';
import style from './Contacts.module.css'
import styledContainer from "../common/css/Container.module.css";
import vkLogo from '../assets/img/social/vk.png'
import githubLogo from '../assets/img/social/gh.png'
import linkedIn from '../assets/img/social/linked.png'
import mailLink from '../assets/img/social/mail.png'

function Contacts() {

    return (
        <div
            id='contacts'
            className={style.contactBody}>
            <div className={`${styledContainer.container} ${style.container}`}>
                <h2>Contacts</h2>
                <div className={styledContainer.line}/>
                <div className={style.contacts}>
                    <div className={style.contact__aboutMe}>
                        <h2 style={{textTransform: 'uppercase', textAlign: 'center'}}>Don't be shy</h2>
                        <p style={{textAlign: 'justify'}}>Feel free to get in touch with me. I am always open to
                            discussing new projects, creative ideas or opportunities to be part of your visions. Open for your suggestions</p>
                        <p className={style.logos}>
                            <a
                                href='mailto:saintic132@gmail.com'
                                target='_blank'
                                rel="noreferrer"
                                title='Mail'
                            >
                                <img src={mailLink} alt="mailLogo"/>
                            </a>
                            <div>
                                <span style={{textTransform: 'uppercase'}}>mail me</span>
                                <a className={style.contact__mail}
                                   href="mailto:saintic132@gmail.com">saintic132@gmail.com</a>
                            </div>
                        </p>
                        <p className={style.linkLogo}>
                            <a
                                href='https://www.linkedin.com/in/ivan-akhremchyk-9a4585222/'
                                target='_blank'
                                rel="noreferrer"
                                title='LinkedIn'
                            >
                                <img src={linkedIn} alt="linkedIn"/>
                            </a>
                            <a
                                href='https://github.com/saintic132'
                                target='_blank'
                                rel="noreferrer"
                                title='GitHub'
                            >
                                <img src={githubLogo} alt="githubLogo"/>
                            </a>
                            <a
                                href='https://vk.com/saintic'
                                target='_blank'
                                rel="noreferrer"
                                title='VK'
                            >
                                <img src={vkLogo} alt="vkLogo"/>
                            </a>
                        </p>
                    </div>
                    <div className={style.contactForm}>
                        <form action="">
                            <div className={style.form}>
                                <input
                                    type="text"
                                    placeholder={'Your name'}/>
                                <input
                                    type="text"
                                    placeholder={'Your email'}/>
                                <input
                                    type="text"
                                    placeholder={'Your subject'}/>
                                <textarea
                                    name="message" placeholder="YOUR MESSAGE">

                                </textarea>
                                <button type="submit" className="button">
                                    <span className="button-text">Send Message</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;

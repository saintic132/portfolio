import React from 'react';
import style from './Contacts.module.css'
import styledContainer from "../common/css/Container.module.css";
import vkLogo from '../assets/img/vk.png'
import githubLogo from '../assets/img/gh.png'
import linkedIn from '../assets/img/linked.png'
import mailLink from '../assets/img/mail.png'
import call from '../assets/img/call.png'


function Contacts() {

    return (
        <div className={style.contactBody}>
            <div className={`${styledContainer.container} ${style.container}`}>
                <h2>Contacts</h2>
                <div className={style.contacts}>
                    <div className={style.contact__aboutMe}>
                        <h2 style={{textTransform: 'uppercase'}}>Don't be shy</h2>
                        <p style={{textAlign: 'justify'}}>Feel free to get in touch with me. I am always open to
                            discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                        <p className={style.logos}>
                            <a
                                href='#'
                                target='_blank'
                                rel="noreferrer"
                                title='Mail'
                            >
                                <img src={mailLink} alt="mailLogo"/>
                            </a>
                            <div>
                                <span style={{textTransform: 'uppercase'}}>mail me</span>
                                <span>steve@mail.com</span>
                            </div>
                        </p>
                        <p className={style.logos}>
                            <a
                                href='#'
                                target='_blank'
                                rel="noreferrer"
                                title='Call'
                            >
                                <img src={call} alt="callLogo"/>
                            </a>
                            <div>
                                <span style={{textTransform: 'uppercase'}}>call</span>
                                <span>Number here</span>
                            </div>
                        </p>
                        <p className={style.linkLogo}>
                            <a
                                href='#'
                                target='_blank'
                                rel="noreferrer"
                                title='LinkedIn'
                            >
                                <img src={linkedIn} alt="linkedIn"/>
                            </a>
                            <a
                                href='#'
                                target='_blank'
                                rel="noreferrer"
                                title='GitHub'
                            >
                                <img src={githubLogo} alt="githubLogo"/>
                            </a>
                            <a
                                href='#'
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

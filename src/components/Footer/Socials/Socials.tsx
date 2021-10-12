import React from 'react'
import s from './Socials.module.css'
import { FaLinkedin, FaGithub, FaTelegram, FaTwitter } from 'react-icons/fa'

export const Socials = React.memo(() => {
    return (
        <div className={ s.socialsContainer }>
            <a className={ s.socialLink } href=""><FaLinkedin className={ s.socialIcon }/></a>
            <a className={ s.socialLink } href=""><FaGithub className={ s.socialIcon }/></a>
            <a className={ s.socialLink } href=""><FaTelegram className={ s.socialIcon }/></a>
            <a className={ s.socialLink } href=""><FaTwitter className={ s.socialIcon }/></a>
        </div>
    )
})
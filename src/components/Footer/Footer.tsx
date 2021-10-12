import React from 'react'
import { useTranslation } from 'react-i18next'
import g from '../../App.module.css'
import s from './Footer.module.css'
import { Socials } from './Socials/Socials'

export const Footer = React.memo(() => {
    const { t } = useTranslation()

    return (
        <footer className={ s.footer }>
            <div className={ [g.contentContainer, s.footerContainer].join(' ') }>
                <h2 className={ g.sectionTitle }>{ t('footer.fullName') }</h2>
                <Socials></Socials>
                <p>{ t('footer.copyright') }</p>
            </div>
        </footer>
    )
})
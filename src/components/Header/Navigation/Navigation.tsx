import React from 'react'
import s from './Navigation.module.css'
import { useTranslation } from 'react-i18next'

export const Navigation = React.memo(() => {
    const { t } = useTranslation()
    return (
        <nav className={ s.headerNav }>
            <ul className={ s.headerNavList }>
                <li className={ s.headerNavItem }>
                    <a className={ s.headerNavLink } href="#about">{ t('nav.about') }</a>
                </li>
                <li className={ s.headerNavItem }>
                    <a className={ s.headerNavLink } href="#skills">{ t('nav.skills') }</a>
                </li>
                <li className={ s.headerNavItem }>
                    <a className={ s.headerNavLink } href="#projects">{ t('nav.projects') }</a>
                </li>
                <li className={ s.headerNavItem }>
                    <a className={ s.headerNavLink } href="#contacts">{ t('nav.contacts') }</a>
                </li>
            </ul>
        </nav>
    )
})
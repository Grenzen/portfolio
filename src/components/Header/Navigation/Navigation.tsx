import React from 'react'
import s from './Navigation.module.css'

export const Navigation = React.memo(() => {
    return (
        <nav className={ s.headerNav }>
            <ul className={ s.headerNavList }>
                <li className={ s.headerNavItem }>
                    <a className={ s.headerNavLink } href="#about">Главная</a>
                </li>
                <li className={ s.headerNavItem }>
                    <a className={ s.headerNavLink } href="#skills">Скиллы</a>
                </li>
                <li className={ s.headerNavItem }>
                    <a className={ s.headerNavLink } href="#projects">Проекты</a>
                </li>
                <li className={ s.headerNavItem }>
                    <a className={ s.headerNavLink } href="#contacts">Контакты</a>
                </li>
            </ul>
        </nav>
    )
})
import React, { MouseEvent } from 'react'
import g from '../../App.module.css'
import s from './Header.module.css'
import { Navigation } from './Navigation/Navigation'
import { LangType } from '../../App'

type HeaderPropType = {
    changeLanguageCallback: (lang: LangType) => void
}

export const Header: React.FC<HeaderPropType> = React.memo((
    {
        changeLanguageCallback,
    }) => {

    const changeLang = (event: MouseEvent) => {
        changeLanguageCallback(event.currentTarget.innerHTML.toLowerCase() as LangType)
    }

    return (
        <header className={ s.header }>
            <div className={ g.contentContainer }>
                <button onClick={ changeLang }>EN</button>
                <button onClick={ changeLang }>RU</button>
                <Navigation></Navigation>
            </div>
        </header>
    )
})


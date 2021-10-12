import React from 'react'
import g from './App.module.css'
import { useTranslation } from 'react-i18next'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Footer } from './components/Footer/Footer'

export type LangType = 'en' | 'ru'

export const App = React.memo(() => {
    const { i18n } = useTranslation()

    const changeLanguageCallback = (lang: LangType) => {
        i18n.changeLanguage(lang)
    }
    return (
        <div className={ g.App }>
            <Header changeLanguageCallback={ changeLanguageCallback }></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    )
})

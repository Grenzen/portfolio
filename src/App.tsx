import React from 'react'
import g from './App.module.css'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'

export const App = React.memo(() => {
    return (
        <div className={ g.App }>
            <Header></Header>
            <Main></Main>
        </div>
    )
})

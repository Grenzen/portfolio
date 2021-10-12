import React from 'react'
import g from '../../App.module.css'
import s from './Header.module.css'
import { Navigation } from './Navigation/Navigation'

export const Header = React.memo(() => {
    return (
        <header className={ s.header }>
            <div className={ g.contentContainer }>
                <Navigation></Navigation>
            </div>
        </header>
    )
})


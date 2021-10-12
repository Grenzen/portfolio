import React from 'react'
import { About } from './About/About'
import { Skills } from './Skills/Skills'
import { Projects } from './Projects/Projects'

export const Main = React.memo(() => {
    return (
        <main>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
        </main>
    )
})
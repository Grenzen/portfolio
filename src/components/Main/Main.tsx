import React from 'react'
import { About } from './About/About'
import { Skills } from './Skills/Skills'
import { Projects } from './Projects/Projects'
import { Contacts } from './Contacts/Contacts'

export const Main = React.memo(() => {
    return (
        <main>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contacts></Contacts>
        </main>
    )
})
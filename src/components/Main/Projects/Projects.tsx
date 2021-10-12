import React, { useMemo } from 'react'
import g from '../../../App.module.css'
import s from './Projects.module.css'
import { ProjectItem } from './ProjectItem/ProjectItem'
import { v1 } from 'uuid'

export type ProjectType = {
    id: string
    projectImageSrc: string
    projectLink: string
    projectTitle: string
    projectDescription: string
}

const projects: ProjectType[] = [
    {
        id: v1(),
        projectImageSrc: '/assets/images/qr-menu.png',
        projectLink: 'https://qr-menu-clone-admin.herokuapp.com/dashboard',
        projectTitle: 'QR Menu',
        projectDescription: 'Some Text',
    },
    {
        id: v1(),
        projectImageSrc: '/assets/images/covid.png',
        projectLink: 'https://rolling-scopes-school.github.io/grenzen-JS2020Q3/covid-dashboard/',
        projectTitle: 'Covid-19 Dashboard',
        projectDescription: 'Some Text',
    },
]

export const Projects = React.memo(() => {
    const mappedProjects = useMemo(() => projects.map(el => (
        <ProjectItem
            key={ el.id }
            id={ el.id }
            projectImageSrc={ el.projectImageSrc }
            projectLink={ el.projectLink }
            projectTitle={ el.projectTitle }
            projectDescription={ el.projectDescription }
        ></ProjectItem>
    )), [projects])

    return (
        <section className={ s.sectionProjects }>
            <div className={ [g.contentContainer, s.projectsContainer].join(' ') }>
                <h2 className={ g.sectionTitle }>Проекты</h2>
                <div className={ s.projectsItemsContainer }>
                    { mappedProjects }
                </div>
            </div>
        </section>
    )
})
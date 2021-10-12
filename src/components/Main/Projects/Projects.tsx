import React, { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
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
        projectDescription: 'qr-menu',
    },
    {
        id: v1(),
        projectImageSrc: '/assets/images/covid.png',
        projectLink: 'https://rolling-scopes-school.github.io/grenzen-JS2020Q3/covid-dashboard/',
        projectTitle: 'Covid-19 Dashboard',
        projectDescription: 'covid-19',
    },
]

export const Projects = React.memo(() => {
    const { t } = useTranslation()
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
        <section className={ s.sectionProjects } id={ 'projects' }>
            <div className={ [g.contentContainer, s.projectsContainer].join(' ') }>
                <h2 className={ g.sectionTitle }>{ t('projects.title') }</h2>
                <div className={ s.projectsItemsContainer }>
                    { mappedProjects }
                </div>
            </div>
        </section>
    )
})
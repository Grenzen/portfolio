import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './ProjectItem.module.css'
import { ProjectType } from '../Projects'

export const ProjectItem: React.FC<ProjectType> = React.memo((
    {
        projectImageSrc, projectDescription,
        projectLink, projectTitle,
    }) => {
    const { t } = useTranslation()
    return (
        <div className={ s.projectItemContainer }>
            <div style={ { backgroundImage: `url(${ process.env.PUBLIC_URL }${ projectImageSrc })` } }
                 className={ s.projectItemImage }
            >
            </div>
            <a className={ s.projectItemLink } href={ projectLink }>{ t('projects.link') }</a>
            <h3 className={ s.projectItemTitle }>{ projectTitle }</h3>
            <article className={ s.projectItemDescription }>{ t(`projects.${ projectDescription }`) }</article>
        </div>
    )
})
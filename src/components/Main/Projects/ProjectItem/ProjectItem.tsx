import React from 'react'
import s from './ProjectItem.module.css'
import { ProjectType } from '../Projects'

export const ProjectItem: React.FC<ProjectType> = React.memo((
    {
        projectImageSrc, projectDescription,
        projectLink, projectTitle,
    }) => {
    return (
        <div className={ s.projectItemContainer }>
            <div style={ { backgroundImage: `url(${ projectImageSrc })` } }
                 className={ s.projectItemImage }
            >
            </div>
            <a className={ s.projectItemLink } href={ projectLink }>Тык</a>
            <h3 className={ s.projectItemTitle }>{ projectTitle }</h3>
            <article className={ s.projectItemDescription }>{ projectDescription }</article>
        </div>
    )
})
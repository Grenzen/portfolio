import React from 'react'
import { useTranslation } from 'react-i18next'
import g from '../../../App.module.css'
import s from './About.module.css'


export const About = React.memo(() => {
    const { t } = useTranslation()
    return (
        <section className={ s.sectionAbout } id={ 'about' }>
            <div className={ [g.contentContainer, s.aboutContainer].join(' ') }>
                <article className={ s.aboutArticle }>
                    <h1>{ t('about.fullName') }</h1>
                    <p>{ t('about.subtitle') }</p>
                </article>
                <img src={ process.env.PUBLIC_URL + '/assets/images/cat.jpg' } alt="Margarita Trutneva" width={ '230' }
                     height={ '200' }/>
            </div>
        </section>
    )
})
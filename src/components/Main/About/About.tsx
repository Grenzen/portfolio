import React from 'react'
import g from '../../../App.module.css'
import s from './About.module.css'

export const About = React.memo(() => {
    return (
        <section className={ s.sectionAbout } id={ 'about' }>
            <div className={ [g.contentContainer, s.aboutContainer].join(' ') }>
                <article className={ s.aboutArticle }>
                    <h1>Маргарита Трутнева</h1>
                    <p>Front-end разработчик</p>
                </article>
                <img src="/assets/images/cat.jpg" alt="Margarita Trutneva" width={ '230' } height={ '200' }/>
            </div>
        </section>
    )
})
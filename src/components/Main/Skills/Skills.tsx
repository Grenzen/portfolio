import React, { useMemo } from 'react'
import { v1 } from 'uuid'
import g from '../../../App.module.css'
import s from './Skills.module.css'
import { SkillItem } from './SkillItem/SkillItem'

export type SkillType = {
    id: string
    title: string
    imageSrc: string
    description: string
}
const skills: SkillType[] = [
    {
        id: v1(),
        title: 'HTML',
        imageSrc: '/assets/logos/html5.svg',
        description: 'some text',
    },
    {
        id: v1(),
        title: 'CSS',
        imageSrc: '/assets/logos/css3.svg',
        description: 'some text',
    },
    {
        id: v1(),
        title: 'React',
        imageSrc: '/assets/logos/react.svg',
        description: 'some text',
    },
]

export const Skills = React.memo(() => {
    const mappedSkills = useMemo(() => skills.map(el => (
        <SkillItem
            key={ el.id }
            id={ el.id }
            title={ el.title }
            imageSrc={ el.imageSrc }
            description={ el.description }
        ></SkillItem>
    )), [skills])

    return (
        <section className={ s.sectionSkills }>
            <div className={ [g.contentContainer, s.skillsContainer].join(' ') }>
                <h2 className={ g.sectionTitle }>Скиллы</h2>
                <div className={ s.skillsItemsContainer }>
                    { mappedSkills }
                </div>
            </div>
        </section>
    )
})
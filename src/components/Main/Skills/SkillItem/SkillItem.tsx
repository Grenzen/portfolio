import React from 'react'
import s from './SkillItem.module.css'
import { SkillType } from '../Skills'

type SkillItemPropType = SkillType

export const SkillItem: React.FC<SkillItemPropType> = React.memo((
    {
        description, imageSrc,
    }) => {
    return (
        <div className={ s.skillItemContainer }>
            <div
                className={ s.skillItemImage }
                style={ { backgroundImage: `url(${ imageSrc })` } }
            ></div>
            <article className={ s.skillItemDescription }>{ description }</article>
        </div>
    )
})
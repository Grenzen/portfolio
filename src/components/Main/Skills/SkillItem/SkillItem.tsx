import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './SkillItem.module.css'
import { SkillType } from '../Skills'

type SkillItemPropType = SkillType

export const SkillItem: React.FC<SkillItemPropType> = React.memo((
    {
        title, imageSrc,
    }) => {
    const { t } = useTranslation()

    return (
        <div className={ s.skillItemContainer }>
            <div
                className={ s.skillItemImage }
                style={ { backgroundImage: `url(${ process.env.PUBLIC_URL }${ imageSrc })` } }
            ></div>
            <article className={ s.skillItemDescription }>{ t(`skills.${ title.toLowerCase() }`) }</article>
        </div>
    )
})
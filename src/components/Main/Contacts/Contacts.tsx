import React from 'react'
import { useTranslation } from 'react-i18next'
import g from '../../../App.module.css'
import s from './Contacts.module.css'

export const Contacts = React.memo(() => {
    const { t } = useTranslation()
    return (
        <section className={ s.sectionContacts } id={ 'contacts' }>
            <div className={ [g.contentContainer, s.contactsContainer].join(' ') }>
                <h2 className={ g.sectionTitle }>{ t('contacts.title') }</h2>
                <form className={ s.contactsForm } action="">
                    <input type="text"/>
                    <input type="text"/>
                    <textarea rows={ 5 }/>
                    <input className={ s.contactsButton } type="submit" value={ `${ t('contacts.button') }` }/>
                </form>
            </div>
        </section>
    )
})
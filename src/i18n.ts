import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import translationRu from './locales/ru/translation.json'
import translationEn from './locales/en/translation.json'

const resources = {
    en: {
        translation: translationEn,
    },
    ru: {
        translation: translationRu,
    },
}

i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
        debug: true,
        detection: {
            order: ['queryString', 'cookie'],
            caches: ['cookie'],
        },
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n
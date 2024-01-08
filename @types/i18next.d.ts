import 'i18next'
import resources from './resources'
import { fallbackNS, defaultNS } from '../app/i18n/settings'

declare module 'i18next' {
  interface CustomTypeOptions {
   defaultNS: typeof translation;
   fallbackNS: typeof fallbackNS;
   resources: typeof resources;
  }
}
import { useEffect } from 'react';
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import ReactGA from 'react-ga4';

const initCookieConsent = () => {
  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: 'box',
        position: 'bottom right',
        equalWeightButtons: true,
        flipButtons: false,
      },
      preferencesModal: {
        layout: 'box',
        position: 'right',
        equalWeightButtons: true,
        flipButtons: false,
      },
    },
    categories: {
      necessary: {
        readOnly: true,
      },
      analytics: {},
    },
    language: {
      default: 'en',
      autoDetect: 'browser',
      translations: {
        en: {
          consentModal: {
            title: 'Hello traveller, it\'s cookie time!',
            description:
              'Our website uses tracking cookies to understand how you interact with it. This will be set only if you accept. <a href="/privacy" class="cc-link">Privacy policy</a>',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            showPreferencesBtn: 'Manage preferences',
          },
          preferencesModal: {
            title: 'Consent Preferences',
            acceptAllBtn: 'Accept all',
            acceptNecessaryBtn: 'Reject all',
            savePreferencesBtn: 'Save preferences',
            closeIconLabel: 'Close modal',
            sections: [
              {
                title: 'Cookie Usage',
                description:
                  'We use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want.',
              },
              {
                title: 'Strictly Necessary Cookies',
                description:
                  'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                linkedCategory: 'necessary',
              },
              {
                title: 'Performance and Analytics cookies',
                description:
                  'These cookies allow the website to remember the choices you have made in the past',
                linkedCategory: 'analytics',
              },
            ],
          },
        },
      },
    },
    onConsent: () => {
      if (CookieConsent.acceptedCategory('analytics')) {
        const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
        if (gaMeasurementId) {
          if (!ReactGA.isInitialized) {
            ReactGA.initialize(gaMeasurementId);
          }
          ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
        }
      }
    },
    onChange: ({ changedCategories }) => {
      if (changedCategories.includes('analytics')) {
        if (CookieConsent.acceptedCategory('analytics')) {
          const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
          if (gaMeasurementId) {
            if (!ReactGA.isInitialized) {
               ReactGA.initialize(gaMeasurementId);
            }
            ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
          }
        }
      }
    },
  });
};

export const CookieConsentComponent = () => {
  useEffect(() => {
    initCookieConsent();
  }, []);

  return null;
};

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import * as CookieConsent from 'vanilla-cookieconsent';

export const useAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (CookieConsent.acceptedCategory('analytics')) {
      const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

      // Make sure we only initialize once
      if (gaMeasurementId && !ReactGA.isInitialized) {
        ReactGA.initialize(gaMeasurementId);
      }

      if (ReactGA.isInitialized) {
        ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
      }
    }
  }, [location]);
};

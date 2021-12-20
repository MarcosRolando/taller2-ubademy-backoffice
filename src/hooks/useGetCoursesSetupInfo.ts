import React, { useEffect } from 'react';
import { BackendService } from '../services/backend';

export const useGetCoursesSetupInfo = () => {
  const [courseTypes, setCourseTypes] = React.useState([]);
  const [subscriptionTypes, setSubscriptionTypes] = React.useState([]);
  const [countries, setCountries] = React.useState([]);

  useEffect(() => {
    const backendService = new BackendService();
    backendService.getCoursesSetupInfo()
      .then((setupInfo: any) => {
        setupInfo["course_genres"].push("None");
        setCourseTypes(setupInfo["course_genres"]);
        let subscriptions = Object.keys(setupInfo["subscriptions"]) as any;//Esto es para solo tener los tipos de sub y no el precio
        setupInfo["subscriptions"].push("None");
        setSubscriptionTypes(subscriptions);
        setupInfo["locations"].push("None");
        setCountries(setupInfo["locations"]);
      })
      .catch((error: Error) => {
        console.log(error.message); 
      })
  }, [])
  return { courseTypes, subscriptionTypes, countries };
}

import React, { useEffect } from 'react';
import { BackendService } from '../services/backend';

export const useGetCoursesSetupInfo = () => {
  const [courseTypes, setCourseTypes] = React.useState(["None"]);
  const [subscriptionTypes, setSubscriptionTypes] = React.useState(["None"]);
  const [countries, setCountries] = React.useState(["None"]);

  useEffect(() => {
    const backendService = new BackendService();
    backendService.getCoursesSetupInfo()
      .then((setupInfo: any) => {
        setCourseTypes(prevCourseTypes => [...prevCourseTypes, ...setupInfo["course_genres"]]);
        let subscriptions = Object.keys(setupInfo["subscriptions"]) as any;//Esto es para solo tener los tipos de sub y no el precio
        setSubscriptionTypes(prevSubscriptionTypesTypes => [...prevSubscriptionTypesTypes, ...subscriptions]);
        setCountries(prevCountries => [...prevCountries, ...setupInfo["locations"]]);
      })
      .catch((error: Error) => {
        console.log(error.message); 
      })
  }, [])
  return { courseTypes, subscriptionTypes, countries };
}

import React, { useEffect } from 'react';
import { BackendService } from '../services/backend';

export const useGetUserCourses = (email: string) => {
  const [courses, setCourses] = React.useState(undefined);
  useEffect(() => {
    const backendService = new BackendService();
    backendService.getUserCourses(email)
      .then((_courses: any) => setCourses(_courses))
      .catch((error: Error) => {
        console.log(error.message);
      })
  }, [email])
  return { courses };
}

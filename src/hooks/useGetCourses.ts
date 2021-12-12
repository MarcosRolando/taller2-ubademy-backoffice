import React, { useEffect } from 'react';
import { BackendService } from '../services/backend';

export const useGetCourses = () => {
  const [courses, setCourses] = React.useState([]);
  useEffect(() => {
    const backendService = new BackendService();
    backendService.getCourses()
      .then((_courses: any) => setCourses(_courses))
      .catch((error: Error) => {
        console.log(error.message);
      })
  }, [])
  return { courses };
}

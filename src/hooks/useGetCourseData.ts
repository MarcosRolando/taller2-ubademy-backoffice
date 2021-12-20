import React, { useEffect } from 'react';
import { BackendService } from '../services/backend';

export const useGetCourseData = (id: string) => {
  const [courseData, setCourseData] = React.useState(undefined);
  useEffect(() => {
    const backendService = new BackendService();
    backendService.getCourseData(id)
      .then((course: any) => {
        setCourseData(course); 
      })
      .catch((error: Error) => {
        console.log(error.message);
      })
  }, [id])
  return { courseData };
}

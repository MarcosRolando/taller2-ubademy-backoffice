import React from "react";
import './styles.css';

export const CourseDetail = ({ course }: any) => {
  const {_title, _creator_email, _location, _subType, 
      _description, _hashtags, _images, _videos, _course_type, _collaborators, _students} = course;


  return (
    <div className='CourseDetail'>
      <div>
          {_title}
      </div>
      <div>
          {_creator_email}
      </div>
      <div>
          {_location}
      </div>
      <div>
          {_subType}
      </div>
      <div>
          {_description}
      </div>
      <div>
          {_hashtags}
      </div>
      <div>
          {_images}
      </div>
      {/* <div>
          {_videos}
      </div> */}
      <div>
          {_course_type}
      </div>
      <div>
          {_collaborators}
      </div>
      <div>
          {_students}
      </div>
    </div>
  );
}

import React from "react";
import './styles.css';

export const CourseDetail = ({ course }: any) => {
  const {_title, _creator_email, _location, _subType, 
      _description, _hashtags, _images, _videos, _course_type, _collaborators, _students} = course;


  return (
    <div className='CourseDetail'>
      <img src={_images[0]} alt="Course thumbnail" />
      <div className= ''>

      </div>
      <p className="CourseTitle" >
          {_title}
      </p>
      <div>
          {_description}
      </div>
      <div>
          {_course_type}
      </div>
      <div>
          {_hashtags.map((h: string) => ` ${h}`)}
      </div>
      <div>
          {`Made by: ${_creator_email}`}
      </div>
      <div>
        {`Location: ${_location}`}
      </div>
      <div>
        {`Subscription required: ${_subType}`}
      </div>
      <div>
          {_images.map((url:string) =>
              <img src={url} alt={'imagen'} />
          )}
      </div>
      {/* <div>
          {_videos}
      </div> */}
      <div>
          {_collaborators}
      </div>
      <div>
          {_students}
      </div>
    </div>
  );
}

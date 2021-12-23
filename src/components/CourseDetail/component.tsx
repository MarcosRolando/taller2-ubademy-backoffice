import React from "react";
import ReactPlayer from "react-player";
import './styles.css';

export const CourseDetail = ({ course }: any) => {
  const {_title, _creator_email, _location, _subType, 
      _description, _hashtags, _images, _videos, _course_type, _collaborators, _students} = course;

  return (
    <div className='CourseDetail'>
      <div className='CourseThumbnail'>
        <img src={_images[0]} alt="CourseThumbnail" style={{width: '100%'}} />
      </div>
      <p className="CourseTitle" >
          {_title}
      </p>
      <div>
        <p className='CourseTextTitle'>
          Description
        </p>
        <p className='CourseText'>
          {(_description.length === 0) ? 'There is no description for this course' : _description}
        </p>
      </div>
      <div>
        <p className='CourseTextTitle'>
          Course type
        </p>
        <p className='CourseText'>
          {_course_type}
        </p>
      </div>
      <div>
        <p className='CourseTextTitle'>
          Hashtags
        </p>
        <div className='Hashtags'>
          {(_hashtags.length === 0) ? 
            <p className='CourseText'>There are no hashtags in this course</p>
            :
            _hashtags.map((hashtag: string) => 
            <p key={hashtag} className='Hashtag'>{`#${hashtag}`}</p> 
          )}
        </div>
      </div>
      <div>
        <p className='CourseTextTitle'>
          Teacher
        </p>
        <p className='CourseText'>
          {_creator_email}
        </p>
      </div>
      <div>
        <p className='CourseTextTitle'>
          Collaborators
        </p>
        {(_collaborators.length === 0) ? 
            <p className='CourseText'>There are no collaborators in this course</p>
            :
            _collaborators.map((collaborator: string) => 
          <p key={collaborator} className='CourseText'>{collaborator}</p> 
        )}
      </div>
      <div>
        <p className='CourseTextTitle'>
          Location
        </p>
        <p className='CourseText'>
          {_location}
        </p>
      </div>
      <div>
        <p className='CourseTextTitle'>
          Subscription type
        </p>
        <p className='CourseText'>
          {_subType}
        </p>
      </div>
      <div>
        <p className='CourseTextTitle'>
          Students
        </p>
        {(_students.length === 0) ? 
            <p className='CourseText'>There are no students in this course</p>
            :
            _students.map((student: string) => 
          <p key={student} className='CourseText'>{student}</p> 
        )}
      </div>
      <p className='CourseTextTitle'>
        Images
      </p>
      <div className='CourseImages'>
          {_images.map((url:string) =>
            <div key={url} className='CourseImage'>
                <img src={url} alt={'imagen'} style={{width: '100%'}} />
            </div>
          )}
      </div>
      <p className='CourseTextTitle'>
        Classes
      </p>
      <div>
          {_videos.map((video: any) =>
            <div key={video.url}>
              <p className='CourseVideoTitle'>
                  {video.name}
              </p>
              <ReactPlayer url={video.url} controls={true}/>
            </div>
          )}
      </div>
      <div style={{minHeight: '10em'}}/>
    </div>
  );
}

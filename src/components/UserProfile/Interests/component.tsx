import React from "react";
import './styles.css';

export const Interests = ({ genres }: any) => {
  return (
    <div className='Interests'>
      <p className='InterestsText'>
        Interests
      </p>
      {(genres.length !== 0) ? 
        genres.map((genre: string) => <p className='Interest'>{genre}</p>)
        : <></>
      }
    </div>
  );
}

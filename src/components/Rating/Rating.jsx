import React from 'react'

export const Rating = ({children}) => {
   const stars = Math.round(children);
   const emptyStars = 5 - stars;
   return <div>{'★'.repeat(stars) + '☆'.repeat(emptyStars)}</div>;
}

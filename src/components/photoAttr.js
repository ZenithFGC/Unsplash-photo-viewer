import React from 'react';
import Like from '../components/like.js';

const PhotoAttr = ({ detailPhoto }) => {
  const {
    id,
    created,
    authorAvatar,
    authorName,
    authorLink,
    isLiked,
    likes,
    } = detailPhoto;

  return (
        <div className="">
            <div className="">
                <a href={ authorLink } target="_blank">
                    <img src={ authorAvatar }/>
                    { authorName }
                </a>
                <div className="">
                    { created }
                </div>
            </div>

            <div className="">
            <Like
                likeCount={ likes }
                photoId={ id }
                isLiked={ isLiked }
            />
            </div>
        </div>
  )
};

export default PhotoAttr
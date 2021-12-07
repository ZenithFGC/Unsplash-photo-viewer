import React from 'react';
import Like from '../components/like.js';
import "../styles/photoAttr.css"

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
        <div className="gallery-item_detail_attr">
            <div className="gallery-item_detail_info">
                <a href={ authorLink } target="_blank" className = "gallery-item_detail_author">
                    <img src={ authorAvatar }/>
                    { authorName }
                </a>
                <div className="gallery-item_detail_date">
                    ( { created } )
                </div>
            </div>
             <div className="gallery-item_detail_likes">
            <Like
                count={ likes }
                idPhoto={ id }
                isLiked={ isLiked }
            />
            </div>
        </div>
  )
};

export default PhotoAttr
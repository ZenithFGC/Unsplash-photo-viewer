import React from "react";
import { Link } from "react-router-dom";
import Like from "./like";
import "../styles/photo.css"

const Photo = ({ photo }) => {
    const {
        id,
        created,
        photoImageSmall,
        authorAvatar,
        authorName,
        authorLink,
        isLiked,
        likes,
    } = photo;

    
    return (
        <li className="gallery-item" key={id}>
            <div className="gallery-item_container">
                <img className="gallery-item_img"
                    src={photoImageSmall}
                />
                <div className="gallery-item_info">
                    <a href={authorLink} target="_blank">
                    <img src={authorAvatar}/>
                    {authorName}
                    </a>
                    <div className="gallery-item_info_date">{created}</div>
                    <div className="gallery-item_like">
                        <Like
                            count={likes} 
                            idPhoto={id}
                            isLiked={isLiked}
                        />
                    </div>
                </div>
                
                <Link className="gallery-item_detail_link"
                    to={{
                        pathname: `/photos/${id}`,
                        state: { modal: true },
                        idPhoto: id,
                    }} >
                </Link>
            </div>
        </li>
        
    )

};

export default Photo;
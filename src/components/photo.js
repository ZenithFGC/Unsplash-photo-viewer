import React from "react";
import { Link } from "react-router-dom";
import Like from "./like";

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
        <li className="" key={id}>
            <div className="">
                <div className="">
                    <div className="">
                        <a href={authorLink} target="_blank">
                        <img src={authorAvatar}/>
                        {authorName}
                        </a>
                    </div>
                    <div className="">{created}</div>
                </div>
                <Link className=""
                    to={{
                        pathname: `/stock.js/${id}`,
                        state: { modal: true },
                        photoId: id,
                    }}>

                </Link>
                <div className="">
                    <Like
                        likeCount={likes} 
                        photoId={id}
                        isLiked={isLiked}
                    />
                </div>
            </div>
            <img className="gallery__item__img"
                src={photoImageSmall}
            />
        </li>
    )

};

export default Photo;
import React from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { like, dislike} from "..//redux/actions/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "../styles/like.css";

const Like = ({ count, like, dislike, idPhoto, isLiked, data}) => {
    const classPhoto = isLiked ? 'liked' : 'notLiked';

    const selected = data.filter(el => el.id === idPhoto)[0];
    
    const toggleLike = debounce( (idPhoto) => {
        
        selected.isLiked ? dislike(idPhoto) : like(idPhoto)
    }, 50);
    
    const element = <FontAwesomeIcon icon={faCoffee} />;
    return (
        <div className="like">
            <div className={ classPhoto }
                 onClick ={() => toggleLike(idPhoto)}>
                 { element }
            </div>
            <span className="like_count">
                {count}
            </span>
        </div>
    )
    
};

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
};

export default connect( mapStateToProps, {like, dislike})(Like);
import React from "react";
import { connect } from "react-redux";
import { debounce } from "lodash";
import { like, dislike} from "..//redux/actions/index";

const Like = ({ count, like, dislike, idPhoto, isLiked, data}) => {
    const selected = data.filter((el) => el.id === idPhoto)[0];
    const toggleLike = debounce( (idPhoto) => {
        selected.isLiked ? dislike(idPhoto) : like(idPhoto)
    }, 400);
    const classPhoto = isLiked ? 'liked' : 'notLiked';

    return (
        <div className="">
            <span className="">
                {count}
            </span>
            <div className={ classPhoto }
                 onClick ={() => toggleLike(idPhoto)}>
            </div>
        </div>
    )
    
};

const mapStateToProps = (state) => {
    return {
        data: state.photoViewer.data
    }
};

export default connect( mapStateToProps, {like, dislike})(Like);
import React from "react";
import { unsplash, authenticationUrl } from '../api/unsplashAPI.js';
import { connect } from "react-redux";
import { setPhoto } from "../redux/actions/index";
import Photo from "./photo";

class UnsplashPhotos extends React.Component {
    componentDidMount() {
        const {thisPage, setPhoto } = this.props;
        unsplash.auth.setBearerToken(localStorage.getItem('token'));
        setPhoto(thisPage);
        window.addEventListener('scroll', this.handleScroll, false)
    }

    handleScroll(ev) {
        ev.preventDDefault();
        const {thisPage, setPhoto } = this.props;
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 120) &&!this.props.isFetching)
         {
            setPhoto(thisPage);
        }
    }

    render() {
        const {stock, isFetching, errMsg} = this.props;
        let num = 0;
        return (
            <div className="">
                <ul className="">
                    {stock.map(photo =>
                        <Photo
                            key={num++}
                            className=""
                            photo={photo} 
                        />)}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        stock: state.photoViewer.photoData,
        thisPage: state.photoViewer.currentPage,
        isFetching: state.photoViewer.isFetching,
        errMsg: state.photoViewer.errorMessage
    }
}

export default connect(mapStateToProps, { setPhoto })(UnsplashPhotos);
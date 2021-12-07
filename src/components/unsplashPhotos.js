import React from "react";
import { unsplash } from '../api/unsplashAPI.js';
import { connect } from "react-redux";
import { setPhoto } from "../redux/actions/index";
import Photo from "./photo";
import "../styles/unsplashPhotos.css";



class UnsplashPhotos extends React.Component {
    componentDidMount() {
        const {thisPage, setPhoto } = this.props;
        unsplash.auth.setBearerToken(localStorage.getItem('token'));
        setPhoto(thisPage);
        window.addEventListener('scroll', this.handleScroll.bind(this), false)
    }

    handleScroll(ev) {
        ev.preventDefault();
        const {thisPage, setPhoto } = this.props;
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight) &&!this.props.isFetching)
         {
            setPhoto(thisPage);
        }
    }

    render() {
        const {stock, thisPage, setPhoto} = this.props;
        let num = 0;
        return (
            <div className="container">
                <div className="header">
                Unsplash Gallery
                </div>
                <ul className="gallery">
                    {stock.map(photo =>
                        <Photo
                            key={num++}
                            photo={photo} 
                        />)}
                </ul>
                <button className="btn btn-more"
                    onClick={ev => {
                        if(!this.props.isFetching) {
                            setPhoto(thisPage)
                        }
                    }}
                    > загрузить еще фото
                </button>
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        stock: state.data,
        thisPage: state.thisPage,
        isFetching: state.isFetching,
        errMsg: state.errMsg
    }
}

export default connect(mapStateToProps, { setPhoto })(UnsplashPhotos);
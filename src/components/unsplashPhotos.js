import React from "react";
import { unsplash } from '../api/unsplashAPI.js';
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
        ev.preventDefault();
        console.log(this.props);
        const {thisPage, setPhoto } = this.props;
        if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 120) &&!this.props.isFetching)
         {
            setPhoto(thisPage);
        }
    }

    render() {
        const {stock} = this.props;
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
                {/* <button
                className=""
                onClick={ev => {
                if(!this.props.isFetching) {
                setPhoto(thisPage)
           }
        }}
        >
          Загрузить еще
        </button> */}
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
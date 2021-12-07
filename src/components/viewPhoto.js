import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import Modal from 'react-responsive-modal';
import PhotoAttr from './photoAttr.js';
import "../styles/viewPhoto.css";

const ViewPhoto = ({ data, match: { params } }) => {

  const handleCloseModal = (ev) => {
    // ev.stopPropagation();
    window.history.back();
  }

  const detailPhoto = data.filter(photo =>
    photo.id === params.id)[0]
    console.log(detailPhoto);

  if (!detailPhoto || !data) {
    return (
      <Redirect to="/home" />
    )
  }
  
  return (
    <Modal
     center
     open
     onClose={handleCloseModal}
     animationDuration = { 600 } >
      <img className="gallery-item_detail_photo"
          src={detailPhoto.photoImageRegular} 
          />    
      <PhotoAttr detailPhoto={detailPhoto} />      
    </Modal>
  )
};
const mapStateToProps = state => {
  return {
    data: state.data,
  }
};

export default compose(
  withRouter, connect(mapStateToProps)
)(ViewPhoto)
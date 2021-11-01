import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import Modal from 'react-responsive-modal';
import PhotoAttr from './photoAttr.js';

const ViewPhoto = ({ data, match: { params } }) => {

  const handleCloseModal = (ev) => {
    ev.stopPropagation();
    window.history.back();
  }

  const detailPhoto = data.filter(photo =>
    photo.id === params.id)[0]

  if (!detailPhoto || !data) {
    return (
      <Redirect to="/home" />
    )
  }

  return (
    <Modal
     center
     open
     onClose={handleCloseModal} >
        <img className=""
            src={detailPhoto.photoImgRegular} />    
        <PhotoAttr detailPhoto={detailPhoto} />      
    </Modal>
  )
};
const mapStateToProps = state => {
  return {
    data: state.photoViewer.data,
  }
};

export default compose(
  withRouter, connect(mapStateToProps)
)(ViewPhoto)
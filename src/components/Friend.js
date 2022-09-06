import React from "react";
import PropTypes from "prop-types";

function Friend(props) {
  return (
    <React.Fragment>
      <h4>{props.friendPic}</h4>
      <h3><strong>{props.friendName}</strong></h3>
      <h5>{props.post}</h5>
      <h5>{props.button}</h5>
    </React.Fragment>
  )
}

Friend.propTypes = {
  friendPic: PropTypes.string.isRequired,
  friendName: PropTypes.string.isRequired,
  post: PropTypes.string,
  button: PropTypes.string
};

export default Friend;
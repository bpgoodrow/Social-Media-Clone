import React from "react";
import Friend from "./Friend";

const request = [
  {
    friendName: 'CooperMalone',
    friendPic: 'defaultImage',
    button: 'button'
  },
  {
    friendName: 'Peter Vang',
    friendPic: 'defaultImage',
    button: 'button'
  }
]

function FriendRequest() {
  return(
    <React.Fragment>
      <h4><strong>Friend Request</strong></h4>
    <hr/>
    {request.map((friend, index) =>
      <Friend friendName = {friend.friendName}
      friendPic = {friend.friendPic}
      button = {friend.button} 
    key={index}/>
    )}
    </React.Fragment>
  )
}

export default FriendRequest;
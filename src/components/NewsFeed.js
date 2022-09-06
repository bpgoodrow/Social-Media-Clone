import React from "react";
import Friend from "./Friend";

const notification = [
  {
    friendName: 'CooperMalone',
    friendPic: 'defaultImage',
    post: 'defaultPost'
  },
  {
    friendName: 'Peter Vang',
    friendPic: 'defaultImage',
    post: 'defaultPost'
  }
]

function NewsFeed() {
  return(
    <React.Fragment>
      <h2>What's Happening?</h2>
      <hr/>
      {notification.map((friend, index) =>
      <Friend friendName={friend.friendName}
        friendPic={friend.friendPic}
        post={friend.post}
        key={index}/>
      )}
      <hr/>
    </React.Fragment>
  )
}

export default NewsFeed;
import React from "react";
import Header from "./Header";
import User from "./User";
import NewsFeed from "./NewsFeed";
import FriendRequest from "./FriendRequest";


function App(){
  return (
    <React.Fragment>
      <Header />
      <User />
      <NewsFeed />
      <FriendRequest/>
    </React.Fragment>
  )
}

export default App;
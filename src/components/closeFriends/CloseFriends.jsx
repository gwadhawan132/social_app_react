import React from 'react'
import './CloseFriends.css'

export default function CloseFriends({user}) {
  return (
    <div>
       <li className="sidebarfriend">
      <img src={user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFriendName">{user.username}</span>
    </li>
    </div>
  )
}

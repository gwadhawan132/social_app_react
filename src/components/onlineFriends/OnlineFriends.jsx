import './OnlineFriends.css';


export default function OnlineFriends({user}) {
  return (
    <div>
         <li className="rightbarFriendListItem">
            <div className="rightbarProfileImgContainer">
              <img src={user.profilePicture} alt="" className="rightbarProfileImg" />
              <div className="rightbarOnline"></div>
            </div>
            <span className="rightbarUsern">{user.username}</span>
          </li>
    </div>
  )
}

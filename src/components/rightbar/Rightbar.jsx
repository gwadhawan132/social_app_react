import  './Rightbar.css';
import { Users } from '../../dummyData';
import OnlineFriends from '../onlineFriends/OnlineFriends';
import Following from '../following/Following';




export default function Rightbar({Profile}) {

  const HomeRightBar=()=>{
    return(
      <>
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>jack smith</b> and<b> 3 other friends</b> have a birthday today </span>
        </div>
        <img src="/assets/ad.png" alt="" className="rightbarAdd" />
        <h4 className="rightbarTitle">Online friends</h4>

        <ul className="rightbarFriendList">
        {Users.map((u)=>(
          <OnlineFriends key={u.id} user={u}/>
        ))}
        </ul>
      </>
    )
  }


  const ProfileRightBar=()=>{
    return(
      <>
        <h4 className='rightbarTitle'> User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City : </span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From : </span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City : </span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship : </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">
      {Users.map((u)=>(
        <Following key={u.id} user={u}/>
      ))}

      
        
      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        { Profile ? <ProfileRightBar/> : <HomeRightBar/>}
      </div>
    </div>
  )
}

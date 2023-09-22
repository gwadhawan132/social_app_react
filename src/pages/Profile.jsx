import './Profile.css';
import Topbar from '../components/topbar/Topbar';
import Sidebar from '../components/sidebar/Sidebar';
import Feed from '../components/feed/Feed';
import Rightbar from '../components/rightbar/Rightbar';


export default function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profileContainer">  
     <Sidebar/>
     <div className="profileRight">
        <div className="profileRightTop">
         <div className="profileCover">
          <img src="assets/person/2.jpeg" alt="" className="profileUserImg" />
          <img src="assets/post/3.jpeg" alt="" className="profileCoverImg" />
         </div> 
         <div className="profileInfo">
          <h4 className="profileName">Gautam wadhawan</h4>
          <span className="profileDesc">hello i'm on this app</span>
         </div>
       </div>
        <div className="profileRightBottom">
            <Feed/>
            <Rightbar profile/>
        </div>
      </div>
    </div>
    </>
  );
}

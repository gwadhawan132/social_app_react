import './Topbar.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const navigate=useNavigate();

  const onProfile=()=>{
    navigate("/profile")
  }
  const onHomePageClick=()=>{
    navigate("/")
  }
  const onLogout=()=>{
    navigate("/login")
  }

  return (
    <>
    <div className="topbarContainer">
    
      <div className="topbarleft">
        <span className="logo" onClick={onLogout}>
          Gautamsocial
        </span>
      </div>
      <div className="topbarcenter">
        <div className="searchBar">
        <SearchIcon className='searchIcon'/>
        <input placeholder='Search for friends,post,persons' className="searchbarinput" />


        </div>
      </div>
      <div className="topbarright">
        <div className="topbarLinks">
        <span className="topbarLink" onClick={onHomePageClick}>Homepage</span>
        <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
         <div className="topbarIconItem">
            <PersonIcon/>
        <span className="topbarIconBadge">1</span>
         </div>
         <div className="topbarIconItem">
            <ChatIcon/>
        <span className="topbarIconBadge">3</span>
         </div>
         <div className="topbarIconItem">
            <NotificationsIcon/>
        <span className="topbarIconBadge">12</span>
         </div>        

        </div>
      </div>
      <img src="/assets/person1.jpeg" alt="" className="topbarImg" onClick={onProfile}/>
    </div>
    </>
  )
}

import './Sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import { Users } from '../../dummyData';
import CloseFriends from '../closeFriends/CloseFriends';



export default function Siderbar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
      <ul className="sidebarList">
        <li className="sidebarlistItem">
   <RssFeedIcon classname='sidebarlistitemIcon'/>
      <span className="sidebarlistitemText">
        Feed
      </span>
        </li>
        <li className="sidebarlistItem">
   <ChatIcon classname='sidebarlistitemIcon'/>
      <span className="sidebarlistitemText">
        Chats
      </span>
        </li>
        <li className="sidebarlistItem">
   <PlayCircleIcon classname='sidebarlistitemIcon'/>
      <span className="sidebarlistitemText">
        Videos
      </span>
        </li>
        <li className="sidebarlistItem">
   <SchoolIcon classname='sidebarlistitemIcon'/>
      <span className="sidebarlistitemText">
        Courses
      </span>
        </li>
        <li className="sidebarlistItem">
   <BookmarksIcon classname='sidebarlistitemIcon'/>
      <span className="sidebarlistitemText">
        Bookmarks
      </span>
        </li>
        <li className="sidebarlistItem">
   <WorkIcon classname='sidebarlistitemIcon'/>
      <span className="sidebarlistitemText">
        Jobs
      </span>
        </li>
        <li className="sidebarlistItem">
   <EventIcon classname='sidebarlistitemIcon'/>
      <span className="sidebarlistitemText">
        Events
      </span>
        </li>
      </ul>
   <button className="sidebarButton">Show more</button>
   <hr className='sidebarHr'/>

   <ul className="sidebarFriendList">
    {Users.map((u)=>(
      <CloseFriends key={u.id} user={u}/>
    ))}

   </ul>
      </div>
    </div>
  )
}

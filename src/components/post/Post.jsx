import './Post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Users } from '../../dummyData';
import { useState } from 'react';


export default function Post({post}) {
  const [like,setLike]=useState(post.like);
  const [isLiked,setIsLiked]=useState(false);

  const likeHandler=()=>{
    setLike(isLiked ? like-1:like+1)
    setIsLiked(!isLiked)
  }

  return (
    <div className='post'>
    <div className="postWrapper">
      <div className="postTop">
        <div className="postTopLeft">
          <img src="assets/person1.jpeg" alt="" className="TopLeftImg" />
          <span className="postUsername"> {Users.filter((u)=>u.id===post.userId)[0].username}</span>
          <span className="postDate">{post.date}</span>

        </div>
        <div className="postTopRight">
          <MoreVertIcon/>
        </div>
      </div>
      <div className="postCenter">
        <span className="postText">{post?.desc}</span> {/*as not all the posts have descriptions so we checked it first  */}
        <img src={post.photo} alt="" className="postImg" />

      </div>
      <div className="postBottom">
        <div className="postBottomLeft">
        <img src="/assets/like.png" onClick={likeHandler} alt="" className="likeIcon" />
        <img src="/assets/heart.png" onClick={likeHandler} alt="" className="likeIcon" />
        <span className="likeCounter">{like} people like it</span>
        </div>
        <div className="postBottomRight">
          <span className="postCommentText">{post.comment} comments</span>
        </div>
      </div>
    </div>
    </div>
  )
}

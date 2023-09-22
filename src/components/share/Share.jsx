import './Share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddLocationIcon from '@mui/icons-material/AddLocation';
export default function Share() {
  return (
    <div className='share'>
    <div className="shareWrapper">
        <div className="shareTop">
            <img src="assets/person1.jpeg" alt=""  className='shareProfileImg'/>
            <input placeholder='Whats in your mind Gautam' className="shareInp" />
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor="tomato" className='shareIcon'/>
                    <span className="shareOptionText">Photos or videos</span>
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor="blue" className='shareIcon'/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <AddLocationIcon htmlColor="green" className='shareIcon'/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor="goldenrod" className='shareIcon'/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
    </div>
      
    </div>
  ) 
}

import React from "react";
import "./SearchCard.css";
import { abbreviateNumber } from "js-abbreviation-number";
import { useNavigate } from "react-router-dom";
import VideoLength from "../../utils/VideoLength";

const SearchCard = ({ title, url, Cname, Clogo, views, time, id, desc, seconds }) => {
  const navigate = useNavigate();
 
  return (
    <div className="app__searchcard section__padding">
      <div className="app__searchcard-img">
        <img onClick={() => navigate(`/video/${id}`)} src={url} alt="" />
        <VideoLength seconds={seconds} className='videolength' />
      </div>
      <div className="app__searchcard-content">
        <h1 onClick={() => navigate(`/video/${id}`)}>{title}</h1>
        <div>
          {`${abbreviateNumber(views, 2)} Views--`} {time}
        </div>
        <div className="app__searchcard-content_channel">
          <img src={Clogo} alt="" />
          <h2>{Cname}</h2>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default SearchCard;

import React from "react";
import "./VideoCard.css";
import { abbreviateNumber } from "js-abbreviation-number";
import { useNavigate } from "react-router-dom";
import VideoLength from "../../utils/VideoLength";

const VideoCard = ({ url, Clogo, title, Cname, views, time, id, seconds }) => {
  const navigate = useNavigate();
  return (
    <div className="app__card">
      <div className="app__card-wrapper">
        <div className="app__card-img">
          <img onClick={() => navigate(`/video/${id}`)} src={url} alt="" />
          <VideoLength seconds={seconds} className="videolength" />
        </div>
        <div className="app__card-detail">
          <div className="app__card-detail_channelLogo">
            <img src={Clogo} alt="" />
          </div>
          <div className="app__card-detail_content">
            <h1>{title}</h1>
            <span>
              <p>{Cname}</p>

              <span>
                <div>
                  {`${abbreviateNumber(views, 2)} Views--`} {time}
                </div>
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;

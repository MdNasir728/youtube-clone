import React, { useContext } from "react";
import "./VideoDetail.css";
import { abbreviateNumber } from "js-abbreviation-number";
import ReactPlayer from "react-player";
import { AiFillLike, AiFillDislike, AiOutlineShareAlt } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";

import { context } from "../../utils/AppContext";
import VideoLength from "../../utils/VideoLength";

const VideoDetail = () => {
  const { id } = useParams();
  const { setId, data, relatedData } = useContext(context);
  setId(id);
  const navigate = useNavigate();

  return (
    <div className="app__videodetail">
      <div className="app__videodetail-left">
        <div className="app__videodetail-left_player">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="reactplayer"
          />
          <VideoLength seconds={data?.lengthSeconds} />
          <h1>{data.title}</h1>
          <div className="left_player-wrapper">
            <div className="left_player-wrapper_channel">
              <div className="wrapper_channel-logo">
                <img src={data?.author?.avatar?.[1]?.url} alt="" />
              </div>
              <div className="wrapper_channel-name">
                <span>{data?.author?.title}</span>
                <span>{data?.author?.stats?.subscribersText}</span>
              </div>
              <button type="button">Subscribe</button>
            </div>
            <div className="left_player-wrapper_social">
              <div className="wrapper_social-like">
                <AiFillLike size={23} style={{ cursor: "pointer" }} />
                <span>{`${abbreviateNumber(
                  data?.stats?.likes,
                  2
                )} Likes`}</span>
                <AiFillDislike size={23} style={{ cursor: "pointer" }} />
              </div>
              <AiOutlineShareAlt size={25} style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>

        <div className="app__videodetail-left_desc">
          <div className="left_desc-heading">
            <span>
              {`${abbreviateNumber(data?.stats?.views, 2)} Views`}-- 1 year
              ago--{`${abbreviateNumber(data?.stats?.comments, 2)} Comments`}
            </span>
          </div>
          <div className="left_desc-content">{data.description}</div>
        </div>
      </div>
      <div className="app__videodetail-right">
        {relatedData?.map((item, i) => {
          return (
            <div className="right_card" key={i}>
              <div className="right_card-thumbnail">
                <img
                  onClick={() => navigate(`/video/${item?.video?.videoId}`)}
                  src={item?.video?.thumbnails?.[0]?.url}
                  alt=""
                />
              </div>
              <div className="right_card-content">
                <h1 onClick={() => navigate(`/video/${id}`)}>
                  {item?.video?.title.slice(0, 50)}...
                </h1>

                <h2>{item?.video?.author?.title}</h2>
                <div>
                  <span>{`${abbreviateNumber(
                    item?.video?.stats?.views,
                    2
                  )} Views--`}</span>
                  <span>{item?.video?.publishedTimeText}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoDetail;

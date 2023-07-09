import React, { useContext } from "react";
import "./Feed.css";
import { VideoCard, Sidebar } from "../Index";
import { context } from "../../utils/AppContext";

const Feed = () => {
  const {loading, mobileMenu, searchResults } = useContext(context);
  console.log(searchResults);
  return (
    <div className="app__feed section__padding">
      <div className="app__feed-sidebar_container">
        <Sidebar />
      </div>

      {mobileMenu && (
        <div className="app__feed-sidebar_mobile_container">
          <Sidebar />
        </div>
      )}
      <div className="app__feed-content">
        {loading? <h1>Loading...</h1>:searchResults?.map((result, i) => (
          <div className="videocard_wrapper">
            <VideoCard
              key={i}
              url={result?.video?.thumbnails[1]?.url}
              Clogo={result?.video?.author?.avatar?.map((url) => url.url)}
              title={result?.video?.title}
              Cname={result?.video?.author?.title}
              views={result?.video?.stats?.views}
              time={result?.video?.publishedTimeText}
              id={result?.video?.videoId}
              seconds={result?.video?.lengthSeconds
              }            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;

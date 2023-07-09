import React, { useContext } from "react";
import "./SearchFeed.css";
import { Sidebar, SearchCard, VideoCard } from "../Index";
import { context } from "../../utils/AppContext";

const SearchFeed = () => {
  const {loading, mobileMenu, searchResults } = useContext(context);
  return (
    <div className="app__searchfeed">
      <div className="app__feed-sidebar_container">
        <Sidebar />
      </div>

      {mobileMenu && (
        <div className="app__feed-sidebar_mobile_container">
          <Sidebar />
        </div>
      )}
      <div className="app__searchfeed-container">
        {loading? <h1>Loading...</h1>:searchResults?.map((result, i) => (
          <SearchCard
            key={i}
            url={result?.video?.thumbnails[1]?.url}
            Clogo={result?.video?.author?.avatar?.map((url) => url.url)}
            title={result?.video?.title}
            Cname={result?.video?.author?.title}
            views={result?.video?.stats?.views}
            time={result?.video?.publishedTimeText}
            id={result?.video?.videoId}
            desc={result?.video?.descriptionSnippet}
            seconds={result?.video?.lengthSeconds}
          />
        ))}
      </div>
      <div className="app__searchfeed-mobile_container">
        {searchResults.map((result, i) => (
          <VideoCard
            key={i}
            url={result?.video?.thumbnails[1]?.url}
            Clogo={result?.video?.author?.avatar?.map((url) => url.url)}
            title={result?.video?.title}
            Cname={result?.video?.author?.title}
            views={result?.video?.stats?.views}
            time={result?.video?.publishedTimeText}
            id={result?.video?.videoId}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchFeed;

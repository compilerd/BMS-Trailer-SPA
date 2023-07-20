import React, { useEffect, useCallback, useState } from "react";

import "./RightView.css";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export const RightSideView = ({ title, content }) => {
  const [currentURL, setCurrentURL] = useState("");
  const [openTrailerVideo, setOpenTrailerVideo] = useState(false);

  //when : callback function called on click at any preview card
  //does : sets the video trailer view flag as true and update the state of currentURL
  const playTrailer = useCallback((URL) => {
    if (URL.length) {
      setCurrentURL(URL);
      setOpenTrailerVideo(true);
    }
  }, []);

  //when : callback function called on closing of VideoPlayer.
  //does :removes the iframe from the parent node
  const removeIFrame = useCallback((id) => {
    var frame = document.getElementById(id);
    frame.parentNode.removeChild(frame);
    setOpenTrailerVideo(false);
  }, []);

  return (
    <div className="right-view">
      <div className="right-view-title">{title}</div>
      <div className="right-view-upcoming">
        <img
          src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/now-showing-web-collection-202012090733.png"
          alt="null Trailer"
          width="100%"
          height="100%"
        />
      </div>
      <div className="right-view-content-row">
        {Object.keys(content).map((item, index) => {
          return (
            <div className="preview-screen" key={index}>
              <div className="preview-template" key={index}>
                <img
                  src={content[item]?.EventImageUrl}
                  alt={content[item]?.EventName}
                  height="100%"
                  width="100%"
                  onClick={() => playTrailer(content[item]?.TrailerURL)}
                />
              </div>
              {openTrailerVideo && currentURL === content[item]?.TrailerURL ? (
                <div className="preview-template" key={currentURL}>
                  <div
                    className="close"
                    onClick={() => removeIFrame(currentURL)}
                  >
                    X
                  </div>
                  <VideoPlayer URL={currentURL} id={currentURL} />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const MemoizedRightSideView = React.memo(RightSideView);
export default MemoizedRightSideView;

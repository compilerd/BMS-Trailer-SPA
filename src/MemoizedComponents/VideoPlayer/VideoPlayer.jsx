import React, { useState, useEffect } from "react";
import { sanitizeURL } from "../../Common/Utils";
import Constants from "../../Common/Constants";

const VideoPlayer = ({ URL, id }) => {
  const [modifiedUrl, setModifiedURL] = useState("");

  //when : called everytime there is URL change, whenever user selectes a preview card
  //does : returns modified url to play embeded video on spa, as original url aren't supported
  useEffect(() => {
    if (URL?.length) {
      let modURL = sanitizeURL(
        URL,
        Constants.videoCompCompareAndReplace.existingString,
        Constants.videoCompCompareAndReplace.replaceString
      );
      setModifiedURL(modURL);
    }
  }, [URL]);
  return (
    <iframe
      id={id}
      src={modifiedUrl}
      width="100%"
      height="100%"
      allowFullScreen
    ></iframe>
  );
};

const MemoizedVideoPlayer = React.memo(VideoPlayer);

export default MemoizedVideoPlayer;

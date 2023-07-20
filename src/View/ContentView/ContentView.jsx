import React from "react";
import "./ContentView.css";
import LeftSideView from "../../MemoizedComponents/LeftSideView/LeftSideView";
import RightSideView from "../../MemoizedComponents/RightSideView/RightSideView";
const ContentView = ({ languageList, moviesList }) => {
  return (
    <div className="view">
      <div className="left-view-container">
        <LeftSideView title={"Filter"} content={languageList} />
      </div>
      <div className="right-view-container">
        <RightSideView title={"Trailer View"} content={moviesList} />
      </div>
    </div>
  );
};

const MemoizedContentView = React.memo(ContentView);
export default MemoizedContentView;

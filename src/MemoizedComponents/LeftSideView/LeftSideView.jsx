import React from "react";
import "./LeftView.css";

const LeftSideView = ({ title, content }) => {
  return (
    <div className="left-view">
      <div className="left-view-title">{title}</div>
      <div className="left-view-content">
        {content.map((item, index) => {
          return (
            <button key={index} className="left-view-content-item">
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const MemoizedLeftSideView = React.memo(LeftSideView);

export default MemoizedLeftSideView;

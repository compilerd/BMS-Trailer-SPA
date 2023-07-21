import React, { useEffect, useState } from "react";
import { fetchApiWrapper } from "./utils";
import "./dashboard.css";
import Header from "./Header/Header";
import ContentView from "./ContentView/ContentView";
import Constants from "./constants";

const Dashboard = () => {
  const [languageList, setLanguageList] = useState([]);
  const [moviesList, setMoviesList] = useState({});

  //when : immediately after the component is mounted
  //does : makes GET api call and segregate and update data in respective state.
  const fetchMyTrailersList = async () => {
    const res = await fetchApiWrapper(
      Constants.bmsMockDataAPIParams.url,
      Constants.bmsMockDataAPIParams.params
    );
    if (typeof res === "object") {
      if (res?.languageList?.length) {
        setLanguageList(res?.languageList);
      }
      if (
        typeof res?.moviesData === "object" &&
        Object.keys(res?.moviesData)?.length
      ) {
        setMoviesList(res.moviesData);
      }
    }
  };
  useEffect(() => {
    fetchMyTrailersList();
  }, []);

  return (
    <div className="container">
      <div className="item">
        <Header />
      </div>
      <div className="item">
        <ContentView languageList={languageList} moviesList={moviesList} />
      </div>
    </div>
  );
};

export default Dashboard;

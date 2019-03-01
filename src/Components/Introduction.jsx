import React from "react";
import Img from "./banner.png";

export default class Banner extends React.Component {
  render() {
    return (
      <div className="bannerbox">
        <img src={Img} alt="" className="cover" />
        <div className="bannertxtmain"> Indian Weddings </div>
        <div className="bannertxtsub"> As explained by Vinny </div>
      </div>
    );
  }
}

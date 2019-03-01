import React from "react";
import Banner from "../Components/Introduction";
import Event from "../Components/Event";
import EventName from "../Components/EventName";

export default class BodyContainer extends React.Component {
  render() {
    return (
      <div className="body">
        <Banner />

        <Event event={this.props.event} />
      </div>
    );
  }
}
